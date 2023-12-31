import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
   render() {
      return (
         <div>
            <Grid>
               <Cell col={2}>
                  <img src={this.props.image} style={{ padding:'0px 0px 0px 0px', height: '100px', border: '3px solid white', width: '100px', borderRadius: '50%' }} />
               </Cell>
               <Cell col={8}>
                  <h4 style={{ marginTop: '0px', fontFamily: 'Ubuntu' }}>{this.props.degree}</h4>
                  <p>{this.props.university}</p>
                  <p>{this.props.school}</p>
                  <p>Percentage:{this.props.per}</p>
                  <hr style={{ borderTop: '3px solid blue' }}></hr>
               </Cell>
               <Cell col={2}>
                  <p style={{ marginTop: '0px', fontFamily: 'Ubuntu' }}>{this.props.startYear}-{this.props.endYear}</p>
               </Cell>
            </Grid>
         </div>
      );
   }
}

export default Education;