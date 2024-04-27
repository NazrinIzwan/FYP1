// Import required modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

// Initialize dotenv to load environment variables from .env file
require('dotenv').config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 5000;

// Apply middleware
app.use(cors());               // Enable CORS
app.use(express.json());       // Enable JSON body parsing for incoming requests

// Define a route for URL scanning using the VirusTotal API
app.post('/scan_url', async (req, res) => {
  const { urlToScan } = req.body;
  const virusTotalApiKey = process.env.VIRUSTOTAL_API_KEY; // Using the API key from environment variable
  const virusTotalUrl = 'https://www.virustotal.com/api/v3/urls';

  try {
    // Submit URL to VirusTotal for scanning
    const submitResponse = await axios.post(virusTotalUrl, { url: urlToScan }, {
      headers: { 'x-apikey': virusTotalApiKey }
    });
    const scanId = submitResponse.data.data.id;

    // Fetch the analysis report using the scan ID
    const reportResponse = await axios.get(`https://www.virustotal.com/api/v3/analyses/${scanId}`, {
      headers: { 'x-apikey': virusTotalApiKey }
    });

    // Send the report data back to the client
    res.json(reportResponse.data);
  } catch (error) {
    console.error('Error scanning URL:', error);
    res.status(500).json({ error: 'Failed to scan URL' });
  }
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});