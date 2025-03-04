<<<<<<<< HEAD:test/database/users/items/canvas/pdfs/pdf_folders/test_create_pdf_folder.js
import { functions } from '../../../../../../../firebaseConfig.js';
========
import { functions } from '../../../../firebaseConfig.js';
>>>>>>>> 660d5776fab637c3f0dee9fdb8ff3faeb3be4afe:test/database/by_canvas/pdf_folders/test_create_pdf_folder.js
import { httpsCallable } from 'firebase/functions';

// Firebase function reference
const pdfFolderCrud = httpsCallable(functions, 'pdf_folder_operations');

// Test Data
const testData = {
    user_id: "123",
    canvas_id: "canvas1",
    folder_id: "test_folder_2",
    title: "My PDF Folder",
    parent_id: "test_folder_1"
};

// Test Case: Create a PDF folder
async function testCreatePdfFolder() {
    try {
        console.log("\n🔹 Creating PDF folder...");
        const response = await pdfFolderCrud({
            methods_type: 'rt_create_pdf_folder',
            data: testData
        });

        console.log("✅ Response:", response.data);
    } catch (error) {
        console.error("❌ Error creating PDF folder:", error);
    }
}

// Run Test
testCreatePdfFolder();
