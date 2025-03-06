// Import Firebase modules
import { functions } from '../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Create reference to the Cloud Function
const getMultipleContext = httpsCallable(functions, 'get_context');

// Data payload with parameters
const data = {
  user_id: "123",
  canvas_id: "canvas1",
  pdf_ids: ["py1010_3"],
  query: "What do you think of the mind body problem",
  k: 10  // Number of documents to retrieve
};

// Directly call the function
getMultipleContext(data)
  .then((result) => {
    console.log('Result status:', result.data.status);
    if (result.data.status === 'Success') {
      console.log(`Retrieved ${result.data.document_count} document chunks`);
      console.log('Results by document:', result.data.results_by_document);
      console.log('Context:', result.data.context);
    } else {
      console.error('Error:', result.data.error);
    }
  })
  .catch((error) => {
    console.error('Error calling get_multiple_context:', error);
  });