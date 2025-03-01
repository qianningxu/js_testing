import { functions } from '../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Initialize the chat operations function
const chatOperations = httpsCallable(functions, 'chat_crud_operations');

// Test for getting all chats in a canvas
async function testGetCanvasChats() {
  try {
    // Replace with your actual canvas ID
    const canvasId = "canvas1";
    
    console.log("Getting all chats for canvas:", canvasId);
    
    // Call the function to get canvas chats
    const response = await chatOperations({
      "methods_type": "rt_get_canvas_chats",
      "data": {
        "user_id": "123",
        "canvas_id": canvasId
      }
    });

    // Log the result
    console.log("Canvas chats retrieved successfully!");
    console.log("Response:", response.data);
    
    // Show chat summaries
    const chats = response.data.chats;
    if (chats && Object.keys(chats).length > 0) {
      console.log(`\nFound ${Object.keys(chats).length} chats in this canvas:`);
      
      // Sort chats by updated_at timestamp (most recent first)
      const sortedChatIds = Object.keys(chats).sort((a, b) => 
        chats[b].updated_at - chats[a].updated_at
      );
      
      sortedChatIds.forEach((chatId, index) => {
        const chat = chats[chatId];
        const date = new Date(chat.updated_at * 1000).toLocaleString();
        console.log(`${index + 1}. Chat ID: ${chatId}`);
        console.log(`   Title: ${chat.title}`);
        console.log(`   Last Updated: ${date}`);
        console.log(`   Message Count: ${chat.message_count}`);
        console.log(`---`);
      });
    } else {
      console.log("\nNo chats found in this canvas.");
    }
    
    return response.data;
  } catch (error) {
    console.error("Error getting canvas chats:", error);
    throw error;
  }
}

// Run the test
testGetCanvasChats()
  .then(result => console.log("Test completed successfully"))
  .catch(err => console.error("Test failed:", err));