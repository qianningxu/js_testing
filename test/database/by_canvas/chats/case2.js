/*this case demonstrate a example where we 
1. create a chat, add 3 messages
2. edit the second message, thus create a new node
3. switch back to the old node
*/

import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Define user and chat information
const userId = "test_user";
const canvasId = "test_canvas";
const chatId = "test_chat_" + Date.now(); // Use timestamp for unique ID

// Store node IDs for later reference
let rootNodeId = null;
let branchNodeId = null;

// Create a new chat
async function createNewChat() {
  const createChatFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_create_chat",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId,
      "title": "Branch Testing Chat"
    }
  };
  
  try {
    const response = await createChatFunction(data);
    console.log('Chat created successfully:', response.data);
    rootNodeId = response.data.root_node;
    console.log('Root node ID:', rootNodeId);
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

// Retrieve the chat to see current state
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
    console.log('Current chat state:');
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error retrieving chat:', error);
    throw error;
  }
}

// Edit a message and create a new branch
async function editMessageAndCreateBranch(nodeId, messageIndex, newContent) {
  const editFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_edit_message_and_branch",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId,
      "node_id": nodeId,
      "message_index": messageIndex,
      "new_message": {
        "role": "user",
        "content": newContent,
        "timestamp": Date.now()
      }
    }
  };
  
  try {
    const response = await editFunction(data);
    console.log('Message edited and new branch created:', response.data);
    branchNodeId = response.data.new_node_id;
    console.log('New branch node ID:', branchNodeId);
    return response.data;
  } catch (error) {
    console.error('Error editing message and creating branch:', error);
    throw error;
  }
}

// Switch to a different branch
async function switchNode(nodeId) {
  const switchFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_switch_node",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId,
      "node_id": nodeId
    }
  };
  
  try {
    const response = await switchFunction(data);
    console.log(`Switched to node: ${nodeId}`);
    return response.data;
  } catch (error) {
    console.error('Error switching nodes:', error);
    throw error;
  }
}

// Get the path to a specific node
async function getConversationPath(nodeId) {
  const pathFunction = httpsCallable(functions, 'chat_crud_operations');
  
  const data = {
    "methods_type": "rt_get_conversation_path",
    "data": {
      "user_id": userId,
      "canvas_id": canvasId,
      "chat_id": chatId,
      "node_id": nodeId
    }
  };
  
  try {
    const response = await pathFunction(data);
    console.log(`Path to node ${nodeId}:`);
    console.log(JSON.stringify(response.data.path, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error getting conversation path:', error);
    throw error;
  }
}

// Run the full test sequence
async function runBranchTest() {
  console.log("=== STARTING BRANCH AND SWITCH TEST ===");
  
  try {
    // Step 1: Create a new chat
    console.log("\n--- CREATING NEW CHAT ---");
    await createNewChat();
    
    // Step 2: Add three initial messages to root node
    console.log("\n--- ADDING INITIAL MESSAGES TO ROOT NODE ---");
    await addMessage("Hello! I want to discuss a project idea.", "user");
    await addMessage("I'd be happy to discuss your project idea. What's it about?", "assistant");
    await addMessage("It's a mobile app for tracking workout progress.", "user");
    
    // Step 3: Check chat state
    console.log("\n--- CHECKING CHAT STATE AFTER INITIAL MESSAGES ---");
    const initialState = await retrieveChat();
    
    // Step 4: Edit the second user message (index 2) to create a branch
    console.log("\n--- EDITING MESSAGE TO CREATE BRANCH ---");
    await editMessageAndCreateBranch(rootNodeId, 2, "Actually, it's a web application for meal planning.");
    
    // Step 5: Add three new messages to the branch
    console.log("\n--- ADDING MESSAGES TO NEW BRANCH ---");
    await addMessage("That sounds interesting! What specific features do you want in your meal planning app?", "assistant");
    await addMessage("I want users to be able to create weekly meal plans with a shopping list.", "user");
    await addMessage("Great idea! A meal planning app with shopping list integration would be very useful.", "assistant");
    
    // Step 6: Check chat state again
    console.log("\n--- CHECKING CHAT STATE AFTER BRANCH MESSAGES ---");
    await retrieveChat();
    
    // Step 7: Get path to current node to see messages
    console.log("\n--- VIEWING CURRENT BRANCH PATH ---");
    await getConversationPath(branchNodeId);
    
    // Step 8: Switch back to the original node
    console.log("\n--- SWITCHING BACK TO ORIGINAL NODE ---");
    await switchNode(rootNodeId);
    
    // Step 9: Confirm switch by getting path
    console.log("\n--- VIEWING ORIGINAL BRANCH PATH ---");
    await getConversationPath(rootNodeId);
    
    // Step 10: Final chat state
    console.log("\n--- FINAL CHAT STATE ---");
    await retrieveChat();
    
    console.log("\n=== TEST COMPLETED SUCCESSFULLY ===");
  } catch (error) {
    console.error("\n=== TEST FAILED ===", error);
  }
}

// Execute the test
runBranchTest();