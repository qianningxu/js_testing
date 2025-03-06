import { functions } from '../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference
const getContextFunction = httpsCallable(functions, 'get_context');

// Function to retrieve context from PDF
async function getContextFromPDF(userId, pdfId, query, canvasId = null) {
  try {
    // Prepare data payload
    const data = {
      user_id: userId,
      pdf_id: pdfId,
      query: query
    };
    
    // Add canvas_id if provided
    if (canvasId) {
      data.canvas_id = canvasId;
    }
    
    // Call the Firebase function
    const response = await getContextFunction(data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return { status: 'Failure', error: error.message };
  }
}

// Test Data
const testData = {
  userId: "123",
  canvasId: "canvas1",
  pdfId: "hip_pain",
  query: "What are common causes of hip pain?"
};

// Test function
async function testGetContext() {
  console.log("Retrieving context...");
  const result = await getContextFromPDF(
    testData.userId,
    testData.pdfId,
    testData.query,
    testData.canvasId
  );
  console.log("Result:", result);
}

// Run the test
testGetContext();

export { getContextFromPDF };