import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Initialize the chat operations function
const chatOperations = httpsCallable(functions, 'chat_crud_operations');

// Test for switching between branches
async function testSwitchBranch() {
  try {
    // Replace with your actual message IDs
    const currentMessageId = "852b3cae-34df-4e53-9ad1-b81728a5aaa2";
    const targetMessageId = "1bf744fb-8e60-47d5-9e28-d68c80d5fedf";
    
    console.log(`Switching from current message: ${currentMessageId} to target message: ${targetMessageId}`);
    
    // Call the function to switch branches
    const response = await chatOperations({
      "methods_type": "rt_switch_branch",
      "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "24add134-bf0c-4491-81ef-bba1297b3d1a",
        "current_message_id": currentMessageId,
        "target_message_id": targetMessageId
      }
    });

    // Log the result
    console.log("Branch switched successfully!");
    console.log("Response:", response.data);
    
    // Show the new active path
    console.log("New active path:", response.data.active_path);
    
    // If the response includes messages, show a summary
    if (response.data.messages && response.data.messages.length > 0) {
      console.log("Messages in new thread:", response.data.messages.length);
      response.data.messages.forEach((msg, index) => {
        console.log(`${index + 1}. ${msg.role}: ${msg.content.substring(0, 30)}...`);
      });
    }
    
    return response.data;
  } catch (error) {
    console.error("Error switching branch:", error);
    throw error;
  }
}

// Run the test
testSwitchBranch()
  .then(result => console.log("Test completed successfully"))
  .catch(err => console.error("Test failed:", err));