import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Initialize the chat operations function
const chatOperations = httpsCallable(functions, 'chat_crud_operations');

// Test for getting branch information
async function testGetBranchInfo() {
  try {
    // Replace with your actual message ID that might have branches
    const messageId = "852b3cae-34df-4e53-9ad1-b81728a5aaa2";
    
    console.log("Getting branch information for message:", messageId);
    
    // Call the function to get branch information
    const response = await chatOperations({
      "methods_type": "rt_get_branch_info",
      "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "24add134-bf0c-4491-81ef-bba1297b3d1a",
        "message_id": messageId
      }
    });

    // Log the result
    console.log("Branch information retrieved successfully!");
    console.log("Response:", response.data);
    
    // Show branch details
    if (response.data.branch_count > 1) {
      console.log(`Message has multiple branches: ${response.data.current_branch_index + 1}/${response.data.branch_count}`);
      console.log("Sibling message IDs:", response.data.siblings);
      console.log("Parent message ID:", response.data.parent_id);
    } else {
      console.log("Message has no branches or is the only branch");
    }
    
    return response.data;
  } catch (error) {
    console.error("Error getting branch info:", error);
    throw error;
  }
}

// Run the test
testGetBranchInfo()
  .then(result => console.log("Test completed successfully"))
  .catch(err => console.error("Test failed:", err));