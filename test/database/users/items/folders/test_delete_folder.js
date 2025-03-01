import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const deleteFolderData = {
    "methods_type": "rt_delete_folder",
    "data": {
        "user_id": "123",
        "folder_id": "folder1"
    }
};

folderFunction(deleteFolderData)
    .then(({ data }) => {
        console.log('Delete Folder:', data);
    })
    .catch(error => {
        console.error('Error in delete folder:', error);
    });