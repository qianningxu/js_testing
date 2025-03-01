import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const agentFolderFunction = httpsCallable(functions, 'agent_folder_crud_operations');

const createAgentFolderData = {
    "methods_type": "rt_create_agent_folder",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "folder_id": "agentFolder3",
        "name": "Agent Folder 1",
        "parent_id": "agentFolder1"
    }
};

agentFolderFunction(createAgentFolderData)
    .then(({ data }) => {
        console.log('Create Agent Folder:', data);
    })
    .catch(error => {
        console.error('Error in create agent folder:', error);
    });