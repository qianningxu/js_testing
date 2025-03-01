import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const createFolderData = {
    "methods_type": "rt_create_folder",
    "data": {
        "user_id": "test_user",
        "folder_id": "folder2",
        "title": "New Folder",
        "parent_id": null
    }
};

folderFunction(createFolderData)
    .then(({ data }) => {
        console.log('Create Folder:', data);
    })
    .catch(error => {
        console.error('Error in create folder:', error);
    });