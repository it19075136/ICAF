let Submission = require('../models/submissionModel');

function createSubmission(body) {

  return new Promise((resolve, reject) => {
    const newSub = new Submission(body);

    newSub
      .save()
      .then((sub) => {
        resolve(sub);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getAllSubmission() {
    return new Promise((resolve,reject) => {
        Submission.find((err,docs) => {
            err ? reject(err) : resolve(docs);
        })
    })
}

function getSubmissionById(id) {
    return new Promise((resolve,reject) => {
        Submission.findById(id)
        .then((submission) => {
            resolve(submission);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

function deleteSubmissionById(id) {
    return new Promise((resolve,reject) => {
        Submission.findByIdAndDelete(id).then((sub) => {
            resolve(sub)
        }).catch((err) => {
            reject(err)
        })
    })
}

function updateSubmissionById(body) {
    console.log("body: ", body);
 
    return new Promise((resolve, reject) => {
      Submission.findByIdAndUpdate(body._id,{$set: body}).then((sub) => {

          sub.topic = body.topic,
          sub.deadline = body.deadline,
          sub.description = body.description,
          sub.conferenceId = body.conferenceId
          
        sub
          .save()
          .then((sub) => {
            resolve(sub);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  }






module.exports = {
    createSubmission,
    getAllSubmission,
    updateSubmissionById,
    deleteSubmissionById,
    getSubmissionById
  };
