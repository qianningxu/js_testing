import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Initialize the chat operations function
const chatOperations = httpsCallable(functions, 'chat_crud_operations');

// Test for editing a message
async function testEditMessage() {
  try {
    // Replace with your actual message ID
    const messageToEditId = "1bf744fb-8e60-47d5-9e28-d68c80d5fedf";
    
    console.log("Editing message:", messageToEditId);
    
    // Call the function to edit a message
    const response = await chatOperations({
      "methods_type": "rt_edit_message",
      "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "24add134-bf0c-4491-81ef-bba1297b3d1a",
        "message_id": messageToEditId,
        "new_content": "This is the edited content"
      }
    });

    // Log the result
    console.log("Message edited successfully!");
    console.log("Response:", response.data);
    console.log("New branch message ID:", response.data.message_id);
    
    return response.data;
  } catch (error) {
    console.error("Error editing message:", error);
    throw error;
  }
}

// Run the test
testEditMessage()
  .then(result => console.log("Test completed successfully"))
  .catch(err => console.error("Test failed:", err));