const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Read data from db.json
const rawData = fs.readFileSync('db.json');
const data = JSON.parse(rawData);

// Example endpoint to get all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Route for the root path
app.get('/', (req, res) => {
  res.send('TeaTime API is live!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
