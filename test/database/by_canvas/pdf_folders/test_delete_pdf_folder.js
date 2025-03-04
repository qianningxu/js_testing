import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference for PDF folder operations
const pdfFolderCrud = httpsCallable(functions, 'pdf_folder_operations');

// Test Data for Delete PDF Folder
const deleteData = {
  user_id: "123",
  canvas_id: "canvas1",
  folder_id: "test_folder_1"
};

async function testDeletePdfFolder() {
  try {
    console.log("\n🔹 Deleting PDF folder...");
    const response = await pdfFolderCrud({
      methods_type: 'rt_delete_pdf_folder',
      data: deleteData
    });
    console.log("✅ Response:", response.data);
  } catch (error) {
    console.error("❌ Error deleting PDF folder:", error);
  }
}

testDeletePdfFolder();
