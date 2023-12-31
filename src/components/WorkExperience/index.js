import { Cell, Grid } from "react-mdl";
import lowesLogo from "../../img/logo-lowes.png";
import principalLogo from "../../img/pricipal-logo.jpg";
import tcsLogo from "../../img/tcs-logo.png";
import WorkExperience from "./WorkExperience";

const principalDetails = [
    "Improved operation teams experience for tracking transaction and viewing the reports based on conditions on UI ",
    "Developed Spring Batch application for processing records in batch ",
    "Created Jira error notification component using AWS services like AWS SQS, AWS CloudWatch, AWS Lambda and email notification module using AWS services like AWS SES,Lambda",
    "Migrated spring web application components written in event-driven architecture using AWS services.",
    "Performed proof of concepts for creating approval requests for executing AWS stack steps using Github action",
    "Experienced in infrastructure as Code to deliver a stable environment rapidly and scale using AWS CDK",
    "Fixing issues/bugs in disbursement payment related products ",
    "Developing ,maintaining phases of Java application",
    "Trained new joiners on domain knowledge as well agile practices,Git and other framework"
]

const tcsDetails = [
    " Developed a web-based application which helps to find active mainframe jobs script based on a search condition using Spring boot for backend and Bootstrap for frontend development",
    "Design and developed web applications using  Java EE 8 technologies like Servlets,JSP,JDBC follows MVC.",
    "Developing Java REST Web services and improving front-end using jQuery,HTML,CSS,AJAX. ",
    "Automated different manual test cases using. Tools used by HP LeanFT similar to Selenium. Worked on Integration Java with the LeanFT tool."
]

const WorkExperienceSection = () => {
    return (
        <div className="about-me-rightcol">
            <Grid>
                <Cell col={12}>
                    <WorkExperience startYear='February 2023' endYear='present'
                        orgName='Lowes'
                        position='Software Engineer'
                        city='Banglore'
                        image={lowesLogo}
                        details={''}
                        points={[]}
                    />
                    <WorkExperience startYear='January 2022' endYear='February 2023'
                        orgName='Principal Global Services'
                        position='Software Engineer'
                        city='Pune'
                        image={principalLogo}
                        details={''}
                        points={principalDetails}
                    />
                    <WorkExperience startYear='June 2019' endYear='January 2022'
                        orgName='Tata Consultancy Searvice'
                        position='System Engineer'
                        city='Pune'
                        image={tcsLogo}
                        details={''}
                        points={tcsDetails}
                    />
                </Cell>
            </Grid>
        </div>
    )
}

export default WorkExperienceSection;