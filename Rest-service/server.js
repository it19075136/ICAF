const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

let app = express();

app.use(cors());

app.listen(PORT,() => {
    console.log("Listening on port: ",PORT);
});