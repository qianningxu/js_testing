import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const updateAgentFunction = httpsCallable(functions, 'agent_crud_operations');

const data = {
    "methods_type": "rt_update_agent",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "agent_id": "agent1",
        "update_data": {
            "name": "Updated Agent Name",
            "content": "This content has been updated."
        }
    }
};

updateAgentFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });