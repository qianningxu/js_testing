import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Firebase function reference
const pdfCrudFunction = httpsCallable(functions, 'pdf_operations');

// Test Data
const testData = {
    user_id: "123",  // Replace with actual user_id
    canvas_id: "canvas1",  // Replace with actual canvas_id
    pdf_id: "py1010_3"  // The PDF ID you want to retrieve
};

// Test Case: Fetch PDF Metadata
async function testGetPdf() {
    try {
        console.log("\n🔹 Fetching PDF metadata...");
        const response = await pdfCrudFunction({
            methods_type: 'generate_pdf_embeddings',
            data: testData
        });

        console.log("✅ Response:", response.data);
    } catch (error) {
        console.error("❌ Error fetching PDF metadata:", error);
    }
}

// Run Test
testGetPdf();
