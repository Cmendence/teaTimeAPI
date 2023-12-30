const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Read data from db.json
const rawData = fs.readFileSync('db.json');
const data = JSON.parse(rawData);

// Example endpoint to get all data
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
