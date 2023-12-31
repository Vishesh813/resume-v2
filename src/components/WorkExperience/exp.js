 import React , { Component } from 'react';
 import {ProgressBar,Grid,Cell } from 'react-mdl';

 class Experience extends Component{
       render(){
           return(
            <Grid>
                <Cell col={12}>
                <div style={{display:'flex'}} >
                {this.props.skill} <ProgressBar style={{margin:'auto',width:'75%',color:'green'}} progress={this.props.progress} />
                </div>
                </Cell>
            </Grid>
   
           );
       }
 }

export default Experience;