import React, { Component } from 'react'
import './ConferenceList.css'
import { connect } from 'react-redux'
import { getAllConference } from '../redux/actions/conferenceActions'

class ConferenceList extends Component {

    constructor(props) {
        super(props);
        this.props.getAllConference();
    }

    render() {
        console.log(this.props.conferences)
        return (


            <section className="main">

                <section className="black">
                    <header className="">
                        <h1>All Conferences</h1>
                    </header>
                </section>
                {this.props.conferences != 0 ? this.props.conferences.filter(conf => conf.status == "Approved").map(conference => {
                    return(
                        <div>
                        <section className="black">
                            <div className="wrap">
                                <h3>{conference.conferenceName}</h3>
                                <p>{conference.conferenceDescription}</p> 
                                <div className="separator01"></div>
                                <p>Start Date: {conference.startDate.split('T')[0]} | End Date: {conference.endDate.split('T')[0]} | Location: {conference.conferenceVenue}</p>
                                <h4>Speakers</h4>
                                {conference.keynoteSpeaker.map(speaker => {
                                    return(
                                        <p><i class="fas fa-star-of-life"></i> {speaker.speakerName} - {speaker.speakerDesignation}</p>
                                    )
                                })}
                                <h4>Tracks</h4>
                                {conference.tracks.map(track => {
                                    return(
                                        <p><i class="fas fa-star-of-life"></i> {track.trackName} -{track.trackDescription}</p>
                                    )
                                })}
                            </div>
                        </section>

                        <section className="white">
                            <div className="wrap">
                                <p>“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney</p>
                                <div className="separator02"></div>
                                <br/>
                                <p>“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson</p>
                            </div>
                        </section>
                    </div>
                    )

                }) : null}
                {/* <section className="black">
                        <div className="wrap">
                            <h3></h3>
                            <div className="separator01"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida imperdiet magna in vehicula. Sed egestas orci non nunc rutrum, sit amet scelerisque ligula scelerisque. Curabitur mauris ipsum, cursus quis.</p>
                        </div>
                    </section>

                    <section className="white">
                        <div className="wrap">
                            <p>“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney</p>
                            <div className="separator02"></div>
                            <p>“It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. —Walter Anderson</p>
                        </div>
                    </section> */}



            </section>

        )
    }
}

const mapStateToProps = (state) => ({
    conferences: state.conference.conferences
})
export default connect(mapStateToProps, { getAllConference })(ConferenceList);