// Import necessary modules
const admin = require('firebase-admin');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Path to your service account key
const serviceAccountPath = path.join(__dirname, 'serviceAccountKey.json');
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

// Initialize Firebase Admin SDK with service account
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // Add your databaseURL if needed for accessing Realtime Database
    // databaseURL: "https://your-project-id.firebaseio.com"
  });
}

// Function to call Cloud Function with admin SDK
async function generateEmbeddingsForPdf(userId, canvasId, pdfId) {
  try {
    // Create a token for authentication
    const token = await admin.auth().createCustomToken('service-account-user');
    console.log('Created custom token for authentication');
    
    // Get your project ID from the service account
    const projectId = serviceAccount.project_id;
    const region = 'us-central1'; // Replace with your function's region
    
    // Construct the Cloud Function URL
    const functionUrl = `https://${region}-${projectId}.cloudfunctions.net/save_embeddings`;
    
    console.log(`Calling Cloud Function at: ${functionUrl}`);
    
    // Call the Cloud Function using HTTPS
    const response = await callFunctionWithToken(functionUrl, token, {
      user_id: userId,
      canvas_id: canvasId,
      pdf_id: pdfId
    });
    
    console.log('Embeddings generated successfully:', response);
    return response;
  } catch (error) {
    console.error('Error generating embeddings:', error);
    throw error;
  }
}

// Helper function to call the Cloud Function via HTTPS
function callFunctionWithToken(url, token, data) {
  return new Promise((resolve, reject) => {
    // First exchange the custom token for an ID token
    getIdToken(token)
      .then(idToken => {
        // Now call the function with the ID token
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${idToken}`
          }
        };
        
        const req = https.request(url, options, (res) => {
          let responseData = '';
          
          res.on('data', (chunk) => {
            responseData += chunk;
          });
          
          res.on('end', () => {
            try {
              const parsedData = JSON.parse(responseData);
              resolve(parsedData);
            } catch (e) {
              console.error('Error parsing response:', e);
              reject(new Error(`Invalid response: ${responseData}`));
            }
          });
        });
        
        req.on('error', (error) => {
          reject(error);
        });
        
        req.write(JSON.stringify({ data: data }));
        req.end();
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Helper function to exchange a custom token for an ID token
async function getIdToken(customToken) {
  // This typically requires using the client SDK, but for testing you could:
  // 1. Use a REST API endpoint to exchange the token
  // 2. Create a small express server that uses the client SDK to do this
  
  // Placeholder - you would need to implement this part
  // For testing, you could create a simple Express.js endpoint that does this exchange
  
  // Return the custom token for now (this won't work in production)
  return customToken;
  
  // In a real implementation, you might use:
  // const response = await fetch('https://your-token-exchange-service.com/getIdToken', {
  //   method: 'POST',
  //   body: JSON.stringify({ token: customToken })
  // });
  // const data = await response.json();
  // return data.idToken;
}

// Usage
generateEmbeddingsForPdf('123456', 'canvasID1', '1740584703')
  .then(response => {
    // Handle successful response
    if (response.status === 'Success') {
      console.log(`Generated ${response.chunks_count} embedding chunks`);
    } e