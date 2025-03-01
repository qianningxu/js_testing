import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const agentFolderFunction = httpsCallable(functions, 'agent_folder_crud_operations');

const deleteAgentFolderData = {
    "methods_type": "rt_delete_agent_folder",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "folder_id": "agentFolder1"
    }
};

agentFolderFunction(deleteAgentFolderData)
    .then(({ data }) => {
        console.log('Delete Agent Folder:', data);
    })
    .catch(error => {
        console.error('Error in delete agent folder:', error);
    });