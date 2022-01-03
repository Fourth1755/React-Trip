const express = require('express'); 
const app = express(); //Line 2
const port = process.env.PORT || 5000; 
const axios =require('axios');
const data =require('./db.json')


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); 

// create a GET route
app.get('/api', (req, res) => { 
  console.log(data);
  res.json(data);
});
