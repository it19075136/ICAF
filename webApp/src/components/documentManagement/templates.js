import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Download } from 'react-bootstrap-icons';
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
            <CardMedia
              className='media'
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="download" >
                <Download />
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