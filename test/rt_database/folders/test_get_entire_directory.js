import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const getFolderContentsData = {
    "methods_type": "rt_get_entire_directory",
    "data": {
        "user_id": "userID1"  // Only user_id is needed to fetch the entire directory
    }
};

folderFunction(getFolderContentsData)
    .then(({ data }) => {
        console.log('Get Folder Contents:', JSON.stringify(data, null, 2));  // Pretty-printing the JSON for clarity
    })
    .catch(error => {
        console.error('Error in get folder contents:', error);
    });