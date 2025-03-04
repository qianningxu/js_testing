import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference for PDF folder operations
const pdfFolderCrud = httpsCallable(functions, 'pdf_folder_operations');

// Test Data for Get PDF Directory
const getDirectoryData = {
  user_id: "123",
  canvas_id: "canvas1"
};

async function testGetPdfDirectory() {
  try {
    console.log("\n🔹 Getting PDF directory...");
    const response = await pdfFolderCrud({
      methods_type: 'rt_get_pdf_directory',
      data: getDirectoryData
    });
    
    // Pretty-print the JSON response with indentation for better readability
    console.log("✅ Response:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("❌ Error getting PDF directory:", error);
  }
}

testGetPdfDirectory();