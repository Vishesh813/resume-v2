import React from 'react'
import { Grid, Cell, List, ListItem, Icon, ListItemContent } from 'react-mdl';
import Experience from '../WorkExperience/exp';


const Skill = ({ details,heading }) => {
    return (
        <div className="about-me-rightcol">
            <Grid><h4>{heading}</h4></Grid>
            {
                details.map((e)=>{
                    return(
                        <Experience key={e.t} progress={e.p}
                        skill={e.t}
                    />  
                    )
                })
            }
        </div>
    );
}

export default Skill;