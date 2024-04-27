import React, { useState } from 'react';
import styles from './URLScanner.module.css';

function URLScanner() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleScan = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/scan_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urlToScan: url }),
      });
      const data = await response.json();
      setResult(`Scanning complete. Threats found: ${data.threats}`);
    } catch (error) {
      setResult('Failed to scan URL.');
    }
    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>URL Security Scanner</h1>
      <input
        type="text"
        className={styles.inputField}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to scan"
      />
      <button className={styles.button} onClick={handleScan} disabled={isLoading}>
        {isLoading ? 'Scanning...' : 'Scan URL'}
      </button>
      {result && <p className={styles.result}>{result}</p>}
    </div>
  );
}

export default URLScanner;