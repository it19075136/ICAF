const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const conferenceRouter = require('./routes/conferenceRoutes');
const userRouter = require('./routes/userRoutes');
const workshopRouter = require('./routes/workshopRoutes');
const documentRouter = require('./routes/documentRoutes');
const paymentRouter = require('./routes/paymentRoutes');

mongoose.connect(process.env.DB_KEY||'&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Connected to database");
});

let app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/user', userRouter);//user routes

app.use('/conference',conferenceRouter); // conference routes 

app.use('/workshop', workshopRouter); //workshop routes

app.use('/document',documentRouter); //document routes

app.use('/payment', paymentRouter); //payment routes

/**
 * 
 user routes - { - dilmika
    POST, GET - byId, PUT -updateById, DELETE - byId

    model - {
        name,
        email,
        password,
        gender,
        type,
        phoneNumber
    }
}

documents routes - { - pasindu
    POST,GET,PUT, DELETE
    model - {
        userId,
        type ( research paper/ workshop proposals),
        status,
        FileUrl,
        activityId (submission or workshop)
    }
}

submission routes = {
    POST,GET,PUT, DELETE
    model - {
    topic,
    deadline,
    description,
    conferenceId
    }
}

Workshops routes - { - thisara
    POST, PUT, GET, DELETE
    model - {
        workshop name,
        workshop description,
        flyerURL,
        resource Persons,
        conferenceId
    }
}

 *  */

module.exports = app;