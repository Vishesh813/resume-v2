import React from 'react';
import { Grid, Cell } from 'react-mdl';
import profilePic from '../../img/profile-pic.png';


const AboutSection = () => {
    return (
        <>
            <div className="about-me-rightcol">
                <Grid>
                    <Cell className="about-me-leftcol" col={6}>
                        <div style={{ textAlign: 'center',padding:'60px 20px 20px 20px' }}>
                            <img style={{ width: "100%",maxWidth: '"1363px "'}}
                                src={profilePic}
                                alt='avatar' />
                        </div>
                    </Cell>
                    <Cell col={6}>
                    <h3 style={{ paddingTop: '0.5em', textAlign: 'center' }}>Vishesh Tiwari</h3>
                        <h4 style={{ color: 'gray', textAlign: 'center' }}>Full Stack Java Developer</h4>
                        <hr style={{ borderTop: '3px solid blue', width: '100%' }}></hr>
                        <p>
                        Experienced IT professional with 4.5+ years of work experience seeking a position as Full stack developer. 
                        Offering expertise in Java, Spring Boot/MVC and AWS.
                        </p>

                        <div>
                        <hr style={{ borderTop: '3px solid blue', width: '100%' }}></hr>  
                        <h5>Contact No:</h5>
                            <p>9807522813</p>
                            <h5>Email:</h5>
                            <p>vishesh.tiwari2427@gmail.com</p>
                            <h5>Blogs,Websites:</h5>
                            <p>angleforangularandreact.blogspot.com
                                skiptoread.blogspot.com</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        </>
    )
}

export default AboutSection;