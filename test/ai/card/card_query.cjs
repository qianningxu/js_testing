const axios = require('axios');

// Base URL of the Firebase function
const BASE_URL = "https://ai-operations-streaming-zknvgjosyq-uc.a.run.app";


const testFunction = async () => {
    console.log("Testing Firebase streaming function...");

    try {

        const response = await axios.post(
            BASE_URL,
            { 
                "method_type": "card_query",
                "user_input": JSON.stringify({
                    "card content": "Artificial Intelligence in Healthcare\nArtificial Intelligence (AI) is revolutionizing healthcare through applications in diagnostics, treatment planning, and personalized medicine. AI algorithms can analyze vast amounts of medical data to assist in decision-making and improve patient outcomes.",
                    "question": "How does AI contribute to improving diagnostics in healthcare?"
                })
            },
            { 
                responseType: 'stream', 
                headers: { 'Content-Type': 'application/json' } 
            }
        );

        console.log("Streaming response:");
        let buffer = '';

        response.data.on('data', (chunk) => {
            buffer += chunk.toString();

            // Attempt to split buffer into complete JSON objects
            let boundary = buffer.indexOf('\n');
            while (boundary !== -1) {
                const completeData = buffer.substring(0, boundary).trim();
                buffer = buffer.substring(boundary + 1);

                if (completeData) {
                    try {
                        // Parse and pretty-print the JSON object
                        const json = JSON.parse(completeData);
                        console.log(JSON.stringify(json, null, 2));
                    } catch (err) {
                        // If parsing fails, prepend data back to buffer
                        buffer = completeData + '\n' + buffer;
                        break;
                    }
                }
                boundary = buffer.indexOf('\n');
            }
        });

        response.data.on('end', () => {
            console.log("Stream ended.");
            // Handle any remaining data in the buffer
            if (buffer.trim()) {
                try {
                    const json = JSON.parse(buffer.trim());
                    console.log(JSON.stringify(json, null, 2));
                } catch (err) {
                    console.error("Error parsing remaining buffer:", err.message);
                }
            }
        });
    } catch (error) {
        console.error("Error during function test:", error.message);
    }
};

testFunction();