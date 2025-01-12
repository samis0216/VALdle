// React Component to Parse Uploaded File for the Word 'Genre'
import React, { useState } from 'react';

const FileUploader = () => {
  const [fileContent, setFileContent] = useState(null);
  const [results, setResults] = useState([]);
