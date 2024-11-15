import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const createFolderData = {
    "methods_type": "rt_create_folder",
    "data": {
        "user_id": "userID1",
        "folder_id": "folder2",
        "title": "New Folder",
        "parent_id": "folder1"
    }
};

folderFunction(createFolderData)
    .then(({ data }) => {
        console.log('Create Folder:', data);
    })
    .catch(error => {
        console.error('Error in create folder:', error);
    });