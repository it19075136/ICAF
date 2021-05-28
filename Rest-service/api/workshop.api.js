const Workshop = require('../models/workshopModel');


function addWorkshop(payload) {
    return new Promise((resolve, reject) => {
        const workshop = new Workshop(payload);

        Workshop.findOne({workshopName: payload.workshopName }).then((docs) => {
            if(docs == null) {
                Workshop.save().then((workshop) => {
                    resolve(workshop);
                }).catch((err) => {
                    reject(err);
                });
            }
            else{
                reject("Workshop with same name exists")
            }
        });
    });
}

function getAllWorkshops() {
    return new Promise((resolve, reject) => {
        Workshop.find().then((docs) => {
            resolve(docs);
        }).catch((err) => {
            reject(err);
        });
    });
}

function getWorkshopById(id) {
    return new Promise((resolve, reject) => {
        Workshop.findById(id).then((docs) => {
            resolve(docs);
        }).catch((err) => {
            reject(err)
        });
    });
}

function updateWorkshopById(id){
    return new Promise((resolve, reject) => {
        const workshop = new Workshop(payload);

        Workshop.findOne({workshopName: payload.workshopName }).then((docs) => {
            if(docs == null){
                Workshop.findByIdAndUpdate(id, {$set: payload}).then((docs) => {
                    resolve(docs);
                }).catch((err) => {
                    reject(err);
                }) 
            }
            else{
                reject("Workshop with same name exists")
            }
        });
    });
}

function removeWorkshopById(id) {
    return new Promise((resolve, reject) => {
        Workshop.findByIdAndRemove(id).then(() => {
            resolve("Successfully deleted");
        }).catch((err) => {
            reject(err);
        })
    })
}


module.exports = {addWorkshop, getAllWorkshops, getWorkshopById, updateWorkshopById, removeWorkshopById}
