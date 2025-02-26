import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference
const pdfCrudFunction = httpsCallable(functions, 'pdf_operations');

// Test Data
const testData = {
    user_id: "123456",  // Replace with actual user_id
    canvas_id: "canvasID1",  // Replace with actual canvas_id
    pdf_id: "1740584703",  // The PDF ID you want to rename
    updates: {
        file_name: "Renamed_Document.pdf"  // The new file name
    }
};

// Test Case: Update PDF Name
async function testUpdatePdfName() {
    try {
        console.log("\n🔹 Updating PDF name...");
        const response = await pdfCrudFunction({
            methods_type: 'update_pdf_metadata',
            data: testData
        });

        console.log("✅ Response:", response.data);
    } catch (error) {
        console.error("❌ Error updating PDF name:", error);
    }
}

// Run Test
testUpdatePdfName();
