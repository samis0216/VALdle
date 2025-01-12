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
