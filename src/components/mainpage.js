import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import photo from '../img/vispro.jpg';
class Mainpage extends Component {
  render() {
    return (
      <div style={{
        width: '100%', margin: 'auto'
      }} className="landing-grid">
        <Grid>
          <Cell col={12}>
            {/* <img className="avatar-img"
              src="https://kylenmelton.com/media/avatar.png" alt="avatar"
             /> */}
            <img src={photo} style={{ height: '300px', border: '3px solid blue', width: '300px', borderRadius: '50%' }} />
            <div className="text-banner">
              <h1 style={{ fontFamily: 'Ubuntu' }}>Welcome to MyPortfolio</h1>
              <hr></hr>
              <p> HTML|CSS|React|Angular|PHP</p>
              <div className="social-links" >
                <a href="http:/www.linkedin.com" ><i className="fa fa-linkedin-square" area-hidden="true" ></i></a>
                <a href="http:/www.github.io" ><i className="fa fa-github-square" area-hidden="true" ></i></a>
                <a href="http:/www.facebook.com" ><i className="fa fa-facebook-square" area-hidden="true" ></i></a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>

    );
  }
}

export default Mainpage;
