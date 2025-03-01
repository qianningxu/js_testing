import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const agentFolderFunction = httpsCallable(functions, 'agent_folder_crud_operations');

const createAgentFolderData = {
    "methods_type": "rt_create_agent_folder",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "folder_id": "agentFolder2",
        "name": "Agent Folder 2",
        "parent_id": null
    }
};

agentFolderFunction(createAgentFolderData)
    .then(({ data }) => {
        console.log('Create Agent Folder:', data);
    })
    .catch(error => {
        console.error('Error in create agent folder:', error);
    });