import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference for PDF folder operations
const pdfFolderCrud = httpsCallable(functions, 'pdf_folder_operations');

// Test Data for Drag and Drop PDF
const dragAndDropData = {
  user_id: "123",
  canvas_id: "canvas1",
  item_id: "1741026042",   // This item must exist in your database.
  new_parent_id: "test_folder_1",       // Use an empty string for top-level, or provide a different folder id.
  new_order: 0             // Adjust the order as required.
};

async function testDragAndDropPdf() {
  try {
    console.log("\n🔹 Drag and Drop PDF item...");
    const response = await pdfFolderCrud({
      methods_type: 'rt_drag_and_drop_pdf',
      data: dragAndDropData
    });
    console.log("✅ Response:", response.data);
  } catch (error) {
    console.error("❌ Error moving PDF item:", error);
  }
}

testDragAndDropPdf();
