<<<<<<<< HEAD:test/database/users/items/folders/test_get_entire_directory.js
import { functions } from '../../../../../firebaseConfig.js';
========
import { functions } from '../../../../firebaseConfig.js';
>>>>>>>> 660d5776fab637c3f0dee9fdb8ff3faeb3be4afe:test/database/level1/folders/test_get_entire_directory.js
import { httpsCallable } from 'firebase/functions';

const folderFunction = httpsCallable(functions, 'folder_curd_operations');

const getFolderContentsData = {
    "methods_type": "rt_get_entire_directory",
    "data": {
<<<<<<<< HEAD:test/database/users/items/folders/test_get_entire_directory.js
        "user_id": "123"
========
        "user_id": "test_user"  // Only user_id is needed to fetch the entire directory
>>>>>>>> 660d5776fab637c3f0dee9fdb8ff3faeb3be4afe:test/database/level1/folders/test_get_entire_directory.js
    }
};

folderFunction(getFolderContentsData)
    .then(({ data }) => {
        console.log('Get Folder Contents:', JSON.stringify(data, null, 2));  // Pretty-printing the JSON for clarity
    })
    .catch(error => {
        console.error('Error in get folder contents:', error);
    });