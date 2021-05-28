const app = require('../app');
const supertest = require('supertest');

test('should work', async () => {
    await supertest(app).post('/conference').send({
        conferenceName: "testName1",
        conferenceDescription: "testDesc1",
        conferenceVenue: "sliit",
        keynoteSpeaker: [{name:"keyNote1Name", designation:"keyNoteDes1"},{name:"keyNote2Name", designation:"keyNoteDes2"}] ,
        startDate: new Date("2021-12-25"),
        endDate: new Date("2021-12-30"),
        tracks: [{name:"Application Frameworks", description:"progamming languages"}],
        status: "pending approval",
        other: ""
    }).expect(201);
    console.log("test works");
});
