import React, { Component } from 'react';
import { Grid,Cell } from 'react-mdl';
import photo from '../img/1.gif';
class Contact extends Component {
  render() {
    return (
     <div className="contact">
          <Grid>
            <Cell col={6} >
              Photo
            </Cell>
            <Cell col={6} >
             right<img src={photo}style = {{height:'300px',border:'3px solid white',width:'300px',borderRadius:'50%'}}/>
            </Cell>
          </Grid> 
     </div>
      
    );
  }
}

export default Contact;
