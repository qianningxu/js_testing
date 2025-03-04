import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const agentFolderFunction = httpsCallable(functions, 'agent_folder_crud_operations');

const getAgentsDirectoryData = {
    "methods_type": "rt_get_agents_directory",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1"
    }
};

agentFolderFunction(getAgentsDirectoryData)
    .then(({ data }) => {
        console.log('Get Agents Directory:', JSON.stringify(data, null, 2));  // Pretty-printing the JSON for clarity
    })
    .catch(error => {
        console.error('Error in get agents directory:', error);
    });