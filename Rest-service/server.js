const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const dbKey = require('./dbConfig/key');

mongoose.connect(dbKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to database");
});

let app = express();

app.use(cors());

/**
 * 
 user routes - {
    POST, GET - byId, PUT -updateById, DELETE - byId
}

conference routes - {
    POST, GET, PUT, DELETE
}

Submission routes - {
    POST,GET,PUT, DELETE
}

Workshops routes - {
    POST, PUT, GET, DELETE
}

Payment routes - {
    POST, GET
}

 *  */



app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});