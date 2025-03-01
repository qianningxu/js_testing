import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const createAgentFunction = httpsCallable(functions, 'agent_crud_operations');

const data = {
    "methods_type": "rt_create_agent",
    "data": {
        "user_id": "123",
        "canvas_id": "canvas1",
        "agent_id": "agent1",
        "name": "Test Agent 2",
        "content": "This is a sample agent content.",
        "parent_id": "agentFolder1"
    }
};

createAgentFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });