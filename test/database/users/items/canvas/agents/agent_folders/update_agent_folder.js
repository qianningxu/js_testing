import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const agentFolderFunction = httpsCallable(functions, 'agent_folder_crud_operations');

const updateAgentFolderData = {
    "methods_type": "rt_update_agent_folder",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "folder_id": "agentFolder1",
        "update_data": {
            "name": "Updated Agent Folder Name"
        }
    }
};

agentFolderFunction(updateAgentFolderData)
    .then(({ data }) => {
        console.log('Update Agent Folder:', data);
    })
    .catch(error => {
        console.error('Error in update agent folder:', error);
    });