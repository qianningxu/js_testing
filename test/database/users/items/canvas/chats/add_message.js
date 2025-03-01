import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Initialize the chat operations function
const chatOperations = httpsCallable(functions, 'chat_crud_operations');

// Simple test for adding a message to an existing chat
async function testAddMessage() {
  try {
    // Assuming we have an existing chat ID and message ID
    // You would normally get these from a previous create_chat operation
    const existingChatId = "REPLACE_WITH_EXISTING_CHAT_ID";
    const existingMessageId = "REPLACE_WITH_PARENT_MESSAGE_ID";
    
    console.log("Adding a message to chat:", existingChatId);
    
    // Call the function to add a message
    const response = await chatOperations({
      "methods_type": "rt_create_message",
      "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": "24add134-bf0c-4491-81ef-bba1297b3d1a",
        "content": "This is a test message",
        "role": "system"
      }
    });
    
    // Log the result
    console.log("Message added successfully!");
    console.log("Response:", response.data);
    console.log("New message ID:", response.data.message_id);
    
    return response.data;
  } catch (error) {
    console.error("Error adding message:", error);
    throw error;
  }
}

// Run the test
testAddMessage()
  .then(result => console.log("Test completed successfully"))
  .catch(err => console.error("Test failed:", err));