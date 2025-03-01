import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const deleteAgentFunction = httpsCallable(functions, 'agent_crud_operations');

const data = {
    "methods_type": "rt_delete_agent",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1",
        "agent_id": "agent1"
    }
};

deleteAgentFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });