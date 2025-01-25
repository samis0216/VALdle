import React, { useState } from 'react';

const App = () => {
    const [fileContent, setFileContent] = useState(null);
    const [result, setResult] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target.result;
                const wordFound = content.toLowerCase().includes("dubstep");
                setResult(wordFound ? "The word 'dubstep' was found in the file!" : "The word 'dubstep' was not found in the file.");
            };
            reader.onerror = () => {
                setResult("Error reading file. Please try again.");
            };
            reader.readAsText(file);
        } else {
            setResult("No file selected.");
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Upload a File to Search for "dubstep"</h1>
            <input
                type="file"
                onChange={handleFileUpload}
                accept=".txt"
                style={{ marginBottom: '10px' }}
            />
            {result && <p>{result}</p>}
        </div>
    )
}

export default App;
