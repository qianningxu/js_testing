// callFunction.js

const fetch = require('node-fetch');

async function callStreamFunction() {
    const response = await fetch('https://stream-response-zknvgjosyq-uc.a.run.app');

    if (!response.ok) {
        console.error('Network response was not ok:', response.statusText);
        return;
    }

    // Read the response as a stream
    response.body.on('data', (chunk) => {
        console.log('Received chunk:', chunk.toString());
    });

    response.body.on('end', () => {
        console.log('Stream ended');
    });
}

callStreamFunction().catch((error) => {
    console.error('Error:', error);
});
