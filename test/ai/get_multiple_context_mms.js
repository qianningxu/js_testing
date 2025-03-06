// Import Firebase modules
import { functions } from '../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Create reference to the Cloud Function
const getMultipleContextMMR = httpsCallable(functions, 'get_context_mmr');

// Data payload with parameters
const data = {
  user_id: "123",
  canvas_id: "canvas1",
  pdf_ids: ["py1010_1"],  // Example with multiple PDFs
  query: "What do you think of the mind body problem",
  k: 8,                // Number of documents to return in final result
  fetch_k: 24,         // Number of documents to initially fetch before diversity filtering
  lambda_mult: 0.65    // Balance between relevance (1.0) and diversity (0.0)
};


getMultipleContextMMR(data)
  .then((result) => {
    console.log('Result status:', result.data.status);
    if (result.data.status === 'Success') {
      
      console.log(result.data.context);
      
    } else {
      console.error('Error:', result.data.error);
    }
  })
  .catch((error) => {
    console.error('Error calling get_context_mmr:', error);
  });