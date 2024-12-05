import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const createFolderData = {
    "methods_type": "rt_drag_and_drop",
    "data": {
        "user_id": "test_user",
        "item_id": "canvas4",
        "new_parent_id": "folder1",
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