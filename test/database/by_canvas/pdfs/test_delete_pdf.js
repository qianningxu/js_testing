import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference
const pdfCrudFunction = httpsCallable(functions, 'pdf_operations');

// Test Data (Replace with actual values)
const testData = {
    user_id: "123456",
    canvas_id: "canvasID1",
    pdf_id: "1740584129" // Change this to a real PDF ID for testing
};

// Test Case 1: Successfully delete an existing PDF
async function testDeletePdf() {
    try {
        console.log("\n🔹 Test Case 1: Deleting existing PDF...");
        const response = await pdfCrudFunction({
            methods_type: 'delete_pdf',
            data: testData
        });

        console.log("✅ Response:", response.data);
    } catch (error) {
        console.error("❌ Error deleting PDF:", error);
    }
}

// Run the test
testDeletePdf();

