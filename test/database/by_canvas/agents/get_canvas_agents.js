import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const getCanvasAgentsFunction = httpsCallable(functions, 'agent_crud_operations');

const data = {
    "methods_type": "rt_get_canvas_agents",
    "data": {
        "user_id": "test_user",
        "canvas_id": "canvasID1"
    }
};

getCanvasAgentsFunction(data)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        
        if (responseData.status === 'Success') {
            console.log(`Retrieved ${responseData.agents.length} agents from canvas with ID ${data.data.canvas_id}.`);
            console.log('Complete response in JSON format:', JSON.stringify(responseData, null, 2));
        } else {
            console.error('Unexpected status in response:', responseData.status);
        }
    })
    .catch(error => {
        console.error('Error calling the function:', error);
    });