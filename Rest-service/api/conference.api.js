const Conference = require('../models/conferenceModel');

function addConference(payload) {

    return new Promise((resolve,reject) => {

        const conf = new Conference(payload);

        conf.save().then((conference) => {
            resolve(conference);
        }).catch((err) => {
            reject(err);
        });
    });

}

module.exports = {addConference}

