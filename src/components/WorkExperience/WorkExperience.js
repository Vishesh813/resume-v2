import React from 'react'
import { Grid, Cell } from 'react-mdl';


const WorkExperience = ({ image, orgName, position, city, startYear, endYear, details, points }) => {
    return (
        <div>
            <Grid>
                <Cell col={2}>
                    <img src={image} style={{ height: '100px', border: '3px solid white', width: '100px', borderRadius: '50%' }} />
                </Cell>
                <Cell col={10}>
                    <h4 style={{ marginTop: '0px', fontFamily: 'Ubuntu' }}>{position}</h4>
                    <p>{orgName} {" | "}{city} {" | "}{startYear}{" - "}{endYear}</p>
                    <div>
                        <h5>Duties And Responsibility</h5>
                        <ul>
                            {
                                points.map((e) => {
                                    return (
                                        <>
                                            <div key={e}>
                                                <li>{e}</li>
                                            </div>

                                        </>

                                    )
                                })
                            }
                        </ul>
                    </div>
                    <hr style={{ borderTop: '3px solid blue' }}></hr>
                </Cell>
            </Grid>
        </div>
    );
}

export default WorkExperience;