// Import Firebase modules
import { functions } from '../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Create reference to the Cloud Function
const getContextMMR = httpsCallable(functions, 'get_context_mmr');

// Data payload with parameters
const data = {
  user_id: "123",
  canvas_id: "canvas1",
  pdf_id: "hip_pain",
  query: "What are common causes of hip pain?",
  k: 10,                // Number of documents to return
  fetch_k: 30,          // Number of documents to initially retrieve
  lambda_mult: 0.7      // Balance between relevance and diversity
};

// Directly call the function
getContextMMR(data)
  .then((result) => {
    console.log('Result status:', result.data.status);
    if (result.data.status === 'Success') {
      console.log(`Retrieved ${result.data.document_count} document chunks`);
      console.log('Context:', result.data.context);
    } else {
      console.error('Error:', result.data.error);
    }
  })
  .catch((error) => {
    console.error('Error calling get_context_mmr:', error);
  });