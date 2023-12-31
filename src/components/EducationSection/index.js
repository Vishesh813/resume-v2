import { Cell, Grid } from "react-mdl";
import Education from "./education";
import knitLogo from "../../img/knit-logo.jpg";
import csjmLogo from "../../img/csjm-logo.png";
import nlkLogo from "../../img/up-bord-logo.png";

const EducationSection = () => {
    return (
        <div className="about-me-rightcol">
        <Grid>
            <Cell  col={12}>    
            <Education startYear='2016' endYear='2019'
               degree='Master of Computer Application'
               school='Kamla Nehru Institute of Technology'
               university='Dr. A.P.J. Abdul Kalam Technical University Uttar Pradesh, Lucknow'
               per='77.67'
               image={knitLogo}
               />
              <Education startYear='2012' endYear='2016'
               degree='B.Sc(Mathematics/Chemistry)'
               school='V.S.S.D College,Kanpur'
               university='Chhatrapati Shahu Ji Maharaj University, Kanpur'
               per='62.67'
               image={csjmLogo}
               /> 
               <Education startYear='2010' endYear='2012'
               degree='Intermediate'
               school='N.L.K Inter College,Kanpur'
               university='U.P. Board Allahabad'
               per='79.88'
               image={nlkLogo}
               /> 
              <Education startYear='2009' endYear='2010'
               degree='High School(10th)'
               school='N.L.K Inter College,Kanpur'
               university='U.P. Board Allahabad'
               per='80.81'
               image={nlkLogo}
               />
            </Cell>
        </Grid>
          
        </div>
    )
}

export default EducationSection;