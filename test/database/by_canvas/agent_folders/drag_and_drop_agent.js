import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const agentFolderFunction = httpsCallable(functions, 'agent_folder_crud_operations');

const dragAndDropAgentData = {
    "methods_type": "rt_drag_and_drop_agent",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "item_id": "agent1",
        "new_parent_id": "agentFolder1",
        "new_order": 0
    }
};

agentFolderFunction(dragAndDropAgentData)
    .then(({ data }) => {
        console.log('Drag and Drop Agent:', data);
    })
    .catch(error => {
        console.error('Error in drag and drop agent:', error);
    });