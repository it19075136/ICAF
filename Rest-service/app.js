const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const conferenceRouter = require('./routes/conferenceRoutes')

mongoose.connect(process.env.DB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to database");
});

let app = express();

app.use(cors());

app.use('/conference',conferenceRouter); // conference routes 

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