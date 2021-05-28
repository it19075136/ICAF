const Conference = require('../models/conferenceModel');

const addConference = (payload) => {

    return new Promise((resolve,reject) => {
        const conf = new Conference(payload);
        console.log(conf);
        conf.save().then((conference) => {
            resolve(conference);
        }).catch((err) => {
            reject(err);
        });
    })

}

module.exports = {addConference}

