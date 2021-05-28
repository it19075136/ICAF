const app = require('../app');
const supertest = require('supertest');

jest.setTimeout(10000);

test('should post insert a new conference', async () => {
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
    }).expect(200);
});
