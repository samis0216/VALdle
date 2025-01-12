// React Component to Parse Uploaded File for the Word 'Genre'
import React, { useState } from 'react';

const FileUploader = () => {
    const [fileContent, setFileContent] = useState(null);
    const [results, setResults] = useState([]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const content = e.target.result;
                setFileContent(content);
                parseFileContent(content);
            };

            reader.readAsText(file);
        }
    };

    const parseFileContent = (content) => {
        const lines = content.split('\n');
        const matchedLines = lines.filter((line) => line.toLowerCase().includes('genre'));
        setResults(matchedLines);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Upload a File</h1>
            <input type="file" accept=".txt" onChange={handleFileUpload} />
            {results.length > 0 && (
                <div>
                    <h2>Lines containing the word 'genre':</h2>
                    <ul>
                        {results.map((line, index) => (
                            <li key={index}>{line}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUploader;
