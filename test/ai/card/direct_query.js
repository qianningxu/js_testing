import { functions } from '../../../firebaseConfig.js';
import { httpsCallable } from 'firebase/functions';

// Reference to the callable function
const testFunction = httpsCallable(functions, 'direct_query_api')

const data = {
    "card content": "### Artificial Intelligence in Healthcare\nArtificial Intelligence (AI) is revolutionizing healthcare through applications in diagnostics, treatment planning, and personalized medicine. AI algorithms can analyze vast amounts of medical data to assist in decision-making and improve patient outcomes.",
    "question": "How does AI contribute to improving diagnostics in healthcare?",
    "linked cards": {
        "AI and Diagnostics": "### AI and Diagnostics\nAI improves diagnostics by analyzing medical images, predicting disease outbreaks, and providing early detection of conditions like cancer. Machine learning models can process images faster and with higher accuracy than traditional methods.",
        "AI in Medical Imaging": "### AI in Medical Imaging\nAI tools in medical imaging, such as MRI and CT scans, help in identifying anomalies with precision. AI systems can compare scans with vast databases to highlight potential issues, aiding radiologists in making more informed decisions.",
        "Predictive Analytics in Healthcare": "### Predictive Analytics in Healthcare\nAI uses predictive analytics to forecast disease outbreaks, patient deterioration, and potential complications. This allows for proactive measures and personalized care, reducing the likelihood of adverse outcomes."
    }
};

// Convert the data object to a JSON string
const jsonData = JSON.stringify(data);

testFunction(jsonData)
    .then(({ data: responseData }) => {
        console.log('Function call successful:', responseData);
        // You can handle the response data here, such as updating the UI
    })
    .catch(error => {
        console.error('Error calling the function:', error);
        // You can handle errors here, such as displaying an error message to the users
    });