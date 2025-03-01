import { functions } from '../../../../../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';
import fs from 'fs';
import path from 'path';

// Firebase function reference
const pdfCrudFunction = httpsCallable(functions, 'pdf_operations');

// Hardcoded test values
const pdfFilePath = '/Users/side/Desktop/Easydraft/Easydraft_JS_testing/test/utils/test_pdf.pdf';

async function testUploadPdf() {
    try {
        // Read the file into a buffer
        const fileBuffer = fs.readFileSync(pdfFilePath);
        const uint8Array = new Uint8Array(fileBuffer);

        // Extract file name from path
        const fileName = path.basename(pdfFilePath);

        // Call Firebase function
        const response = await pdfCrudFunction({
            methods_type: 'upload_pdf',
            data: {
                user_id: "123",
                canvas_id: "canvas1",
                pdf_file: {
                    content: Array.from(uint8Array), // Convert buffer to array
                    filename: fileName, // Include the original filename
                }
            }
        });

        console.log('Upload Response:', response.data);
    } catch (error) {
        console.error('Error uploading PDF:', error);
    }
}

// Run the test
testUploadPdf();
