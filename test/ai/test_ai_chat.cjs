const axios = require('axios');

// Base URL of the Firebase function
const BASE_URL = "https://ai-operations-streaming-zknvgjosyq-uc.a.run.app";

// Add a function to print the actual error response content
const getErrorContent = async (errorResponse) => {
  try {
    if (errorResponse.data) {
      const reader = errorResponse.data;
      const chunks = [];
      
      for await (const chunk of reader) {
        chunks.push(chunk);
      }
      
      const content = Buffer.concat(chunks).toString('utf8');
      return content;
    }
  } catch (e) {
    return "Could not read error content: " + e.message;
  }
  return "No error content available";
};

const testFunction = async () => {
  console.log("Testing Firebase streaming function...");
  
  try {
    const response = await axios.post(
      `${BASE_URL}/ai_operations_streaming`, // Add the function name to the URL path
      {
        "method_type": "direct", /*diffuse */
        "user_input": "What are the implications of AI on society, give me an essay?",
        "isReason": true,
        /*Is there is an agent, put the agent's content(prompt) down below, otherwise, keep it as an empty string*/
        "prompt": ""
      },
      { 
        responseType: 'stream', 
        headers: { 'Content-Type': 'application/json' } 
      }
    );

    console.log("Streaming response:");
    
    response.data.on('data', (chunk) => {
      const text = chunk.toString();
      process.stdout.write(text); // Print text directly
    });

    response.data.on('end', () => {
      console.log("\nStream ended.");
    });

    response.data.on('error', (err) => {
      console.error("Stream error:", err);
    });
    
  } catch (error) {
    console.error(`Error during function test: ${error.response?.status || error.message}`);
    
    if (error.response) {
      console.log("Response headers:", error.response.headers);
      
      // Try to get the error content
      const errorContent = await getErrorContent(error.response);
      console.log("Error content:", errorContent);
    }
  }
};

testFunction();