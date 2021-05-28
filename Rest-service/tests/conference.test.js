const app = require('../app');
const request = require('supertest');
const Conference = require('../models/conferenceModel')

jest.setTimeout(10000);

const id = '';

beforeAll(async () => {
    await Conference.remove(); // delete already existing documents
});
  
test('should post insert a new conference', async () => {
    await request(app).post('/conference').send({
        conferenceName: "testName1",
        conferenceDescription: "testDesc1",
        conferenceVenue: "sliit",
        keynoteSpeaker: [{name:"keyNote1Name", designation:"keyNoteDes1"},{name:"keyNote2Name", designation:"keyNoteDes2"}] ,
        startDate: new Date("2021-12-25"),
        endDate: new Date("2021-12-30"),
        tracks: [{name:"Application Frameworks", description:"progamming languages"}],
        status: "pending approval",
        other: ""
    }).expect(200);
});

test('should get all conferences', async () => {
    await request(app).get('/conference').expect(200).then(response => {
        
        // var data = JSON.parse(response.body);
        // id = data[0]._id;
        // console.log(data, id);
        // assert(response.body.email, 'foo@bar.com')
        // done();
    })
    .catch(err => done(err));

});

// test('should update conference by id', async () => {
//     await request(app).put(`/conference/${id}`).send({
//         conferenceDescription: "testDescUpdate",
//         conferenceVenue: "testVenueUpdate",
//         status: "Approved"
//     }).expect(200);
// });

// test('should delete conference by id', async () => {
//     await request(app).delete(`/conference/${id}`).expect(200);
// });
