const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const conferenceRouter = require('./routes/conferenceRoutes');
const userRouter = require('./routes/userRoutes');
const documentRouter = require('./routes/documentRoutes')

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

app.use('/user', userRouter);

app.use('/conference',conferenceRouter); // conference routes 

app.use('/document',documentRouter)

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

conference routes - { - avantha
    POST, GET, PUT, DELETE

    model - {
        con name,
        venue,
        keynoteSpeaker- [ {name,designation,bio} ],
        startDate,
        endDate,
        tracks,
        description,
        status,
        other Details
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

Payment routes - { - avantha
    POST, GET
    model - {
        userId,
        type,
        amount,
        date
    }
}

 *  */

module.exports = app;