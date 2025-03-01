import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const readAgentFunction = httpsCallable(functions, 'agent_crud_operations');

const data = {
    "methods_type": "rt_read_agent",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "agent_id": "agent1"
    }
};

readAgentFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });