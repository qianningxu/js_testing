import { functions } from '../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const updateFolderData = {
    "methods_type": "rt_update_folder",
    "data": {
        "user_id": "123",
        "folder_id": "folder2",
        "update_data": {
            "title": "Updated Folder Title"
        }
    }
};

folderFunction(updateFolderData)
    .then(({ data }) => {
        console.log('Update Folder:', data);
    })
    .catch(error => {
        console.error('Error in update folder:', error);
    });