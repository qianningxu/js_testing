//This case demonstrate a simple example of create a chat, add 3 messages, and retrieve the chat

import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define user and chat information
const userId = "123456";
const canvasId = "test_canvas";
const chatId = "test_chat_" + Date.now(); // Use timestamp for unique ID

// Create a new chat
async function createNewChat() {
  const createChatFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_create_chat",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId,
      "title": "Test Multiple Messages"
    }
  };
  
  try {
    const response = await createChatFunction(data);
    console.log('Chat created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating chat:', error);
    throw error;
  }
}

// Add a message to the chat
async function addMessage(content, role) {
  const addMessageFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_add_message",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId,
      "message": {
        "role": role,
        "content": content,
        "timestamp": Date.now()
      }
    }
  };
  
  try {
    const response = await addMessageFunction(data);
    console.log(`Message added successfully: "${content.substring(0, 30)}..."`);
    return response.data;
  } catch (error) {
    console.error('Error adding message:', error);
    throw error;
  }
}

// Retrieve the chat
async function retrieveChat() {
  const readChatFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_read_chat",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId
    }
  };
  
  try {
    const response = await readChatFunction(data);
    console.log('Chat retrieved successfully:');
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error retrieving chat:', error);
    throw error;
  }
}

// Run the test sequence
async function runTest() {
  console.log("Starting test: Create chat, add 3 messages, and retrieve chat");
  
  try {
    // Step 1: Create a new chat
    await createNewChat();
    
    // Step 2: Add three messages (user, assistant, user)
    await addMessage("Hello! I need help with understanding how to structure my Firebase data for a chat application.", "user");
    await addMessage("I'd be happy to help! For chat applications, you typically want to consider things like message ordering, read receipts, and real-time updates. What specific features are you looking to implement?", "assistant");
    await addMessage("I want to implement a feature where users can edit previous messages and create new conversation branches.", "user");
    
    // Step 3: Retrieve the chat to verify all messages were added
    await retrieveChat();
    
    console.log("Test completed successfully!");
  } catch (error) {
    console.error("Test failed:", error);
  }
}

// Execute the test
runTest();