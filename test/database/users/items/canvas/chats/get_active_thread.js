import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Initialize the chat operations function
const chatOperations = httpsCallable(functions, 'chat_crud_operations');

// Test for getting the active thread
async function testGetActiveThread() {
  try {
    // Replace with your actual chat ID
    const chatId = "24add134-bf0c-4491-81ef-bba1297b3d1a";
    
    console.log("Getting active thread for chat:", chatId);
    
    // Call the function to get the active thread
    const response = await chatOperations({
      "methods_type": "rt_get_active_thread",
      "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "chat_id": chatId
      }
    });

    // Log the result
    console.log("Active thread retrieved successfully!");
    console.log("Active path:", response.data.active_path);
    
    // Show messages in the thread
    console.log("Messages in thread:", response.data.thread_messages.length);
    response.data.thread_messages.forEach((msg, index) => {
      console.log(`${index + 1}. ID: ${msg.id} | Role: ${msg.role} | Content: ${msg.content.substring(0, 30)}...`);
    });
    
    // Show branch points in the conversation
    if (response.data.branch_points && response.data.branch_points.length > 0) {
      console.log("\nBranch points in this conversation:");
      response.data.branch_points.forEach((point, index) => {
        console.log(`${index + 1}. Message ID: ${point.message_id} | Position: ${point.position} | Branches: ${point.branch_count}`);
      });
    } else {
      console.log("\nNo branch points in this conversation thread.");
    }
    
    return response.data;
  } catch (error) {
    console.error("Error getting active thread:", error);
    throw error;
  }
}

// Run the test
testGetActiveThread()
  .then(result => console.log("Test completed successfully"))
  .catch(err => console.error("Test failed:", err));