import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Download, FileWord, XLg } from 'react-bootstrap-icons';
import {connect} from 'react-redux';
import {getAllDocuments} from '../../redux/actions/documentActions'
import './list.css'
import { TEMPLATE } from '../../redux/constants'

class templates extends Component {

    componentDidMount(){
        this.props.getAllDocuments();
    }

    render(){

        console.log(this.props.documents)

  return (
      <div className="main">
        {this.props.documents ? this.props.documents.map(document => {
            return     (<Card className='root'>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={document.type == "TEMPLATE_RESEARCH" ? "Research Template" : "Proposal Template"}
              subheader="September 14, 2016"
            />
            <FileWord size={XLg} />
            <CardActions disableSpacing>
              <IconButton aria-label="download" >
              <a download><Download /></a>
              </IconButton>
            </CardActions>
          </Card>)
        }):(<h1>Loading...</h1>)}

    </div>
  );
}

}

const mapStateToProps = (state) => ({
    documents: state.document.documents.filter(doc => doc.activityId == TEMPLATE)
})

export default connect(mapStateToProps,{getAllDocuments})(templates)