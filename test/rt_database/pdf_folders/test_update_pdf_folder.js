import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference for PDF folder operations
const pdfFolderCrud = httpsCallable(functions, 'pdf_folder_operations');

// Test Data for Update PDF Folder
const updateData = {
  user_id: "123456",
  canvas_id: "canvasID1",
  folder_id: "test_folder_1",
  update_data: {
    title: "Updated PDF Folder Title"
  }
};

async function testUpdatePdfFolder() {
  try {
    console.log("\n🔹 Updating PDF folder...");
    const response = await pdfFolderCrud({
      methods_type: 'rt_update_pdf_folder',
      data: updateData
    });
    console.log("✅ Response:", response.data);
  } catch (error) {
    console.error("❌ Error updating PDF folder:", error);
  }
}

testUpdatePdfFolder();
