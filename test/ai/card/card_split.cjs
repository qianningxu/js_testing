const axios = require('axios');

// Base URL of the Firebase function
const BASE_URL = "https://ai-operations-streaming-zknvgjosyq-uc.a.run.app";


const testFunction = async () => {
    console.log("Testing Firebase streaming function...");

    try {

        const response = await axios.post(
            BASE_URL,
            { 
                "method_type": "card_split",
                "user_input": "In the late 20th century and into the 21st century, the rise of China can largely be attributed to significant economic reforms initiated in the late 1970s. The shift away from a centrally planned economy towards a socialist market economy allowed for unprecedented levels of foreign investment and the growth of the private sector. By opening up to the world, China not only created millions of jobs but also became a global manufacturing hub. This transition facilitated a rapid increase in GDP, lifted hundreds of millions out of poverty, and laid the groundwork for China’s substantive influence on the global stage in the 21st century."
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