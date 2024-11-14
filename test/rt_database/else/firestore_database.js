import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const getCanvasCards = httpsCallable(functions, 'get_canvas_cards');
const data = { canvas_id: "canvasID1" };

getCanvasCards(data).then(({ data: response }) => {
    console.log('Retrieved cards:', JSON.stringify(response, null, 2));
});
