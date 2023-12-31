import React, { Component } from 'react';
import Education from './EducationSection/education'
import Experience from  './exp'
import { Grid,Cell } from 'react-mdl';
class About extends Component {
  render() {
    return (
     <div className="about-me">
          <Grid>
            <Cell className="about-me-leftcol" col={4}>
                <div style={{textAlign:'center'}}>
                 <img  style = {{height:'200px'}}
                 src='https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-512.png' alt='avatar' />
                </div>
                <h3 style={{paddingTop:'2em'}}>Vishesh Tiwari</h3>
                <h4 style={{color:'gray'}}>Student,Fresher,Explorer</h4>
                <hr style={{borderTop:'3px solid blue',width:'70%'}}></hr>
                <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset </p>

                <h5>Contact No:</h5>
                <p>9807522813</p>
                <h5>Email:</h5>
                <p>vishesh.tiwari2427@gmail.com</p>
                <h5>Blogs,Websites:</h5>
                <p>angleforangularandreact.blogspot.com
                  skiptoread.blogspot.com</p>  
                <hr style={{borderTop:'3px solid blue',width:'70%'}}></hr>
            </Cell>
            <Cell className="about-me-rightcol"  col={8}>
             <h2 style={{fontFamily:'Ubuntu'}}>Education:</h2>
              <Education startYear='2016' endYear='2019'
              degree='Master of Computer Application'
              school='Kamla Nehru Institute of Technology'
              university='Dr. A.P.J. Abdul Kalam Technical University Uttar Pradesh, Lucknow'
              per='77.67'
              />
             <Education startYear='2012' endYear='2016'
              degree='B.Sc(Mathematics/Chemistry)'
              school='V.S.S.D College,Kanpur'
              university='Chhatrapati Shahu Ji Maharaj University, Kanpurr'
              per='62.67'
              /> 
              <Education startYear='2010' endYear='2012'
              degree='Intermediate'
              school='N.L.K Inter College,Kanpur'
              university='U.P. Board Allahabad'
              per='79.88'
              /> 
             <Education startYear='2009' endYear='2010'
              degree='High School(10th)'
              school='N.L.K Inter College,Kanpur'
              university='U.P. Board Allahabad'
              per='80.81'
              />
              <hr style={{borderTop:'3px solid red',width:'100%'}}></hr>
              <h2>Skills:</h2>
              <Experience progress={30}
               skill='React'
              />
              <Experience progress={60}
               skill='Java/C'
              />
              <Experience progress={30}
               skill='Nodejs'
              />
              <Experience progress={65}
               skill='PHP'
              />
            </Cell>
            
          </Grid> 
        
     </div>
      
    );
  }
}

export default About;
