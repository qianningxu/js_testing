import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const createFolderData = {
    "methods_type": "rt_drag_and_drop",
    "data": {
        "user_id": "123",
        "item_id": "canvas2",
        "new_parent_id": "folder2",
        "new_order":0
    }
};


folderFunction(createFolderData)
    .then(({ data }) => {
        console.log('Create Folder:', data);
    })
    .catch(error => {
        console.error('Error in create folder:', error);
    });