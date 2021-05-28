const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const dbKey = require('./dbConfig/key');
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRoutes');

mongoose.connect(dbKey, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to database");
});

let app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/user', userRouter);

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



app.listen(PORT, () => {
    console.log("Listening on port: ", PORT);
});