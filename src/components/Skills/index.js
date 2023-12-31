import React, { useState } from 'react';
import { Grid, Cell, Tabs, Tab, Content } from 'react-mdl';
import Skill from './Skill';

const frontEndSkills = [{ t: 'HTML', p: 70 }, { t: 'CSS', p: 60 }, { t: 'JQuery', p: 50 }, { t: 'React', p: 65 },
{ t: 'JavaScript', p: 55 }, { t: 'TypeScript', p: 60 }]

const backEndSkill = [{ t: 'Java/J2EE platform preferably Java 8 or above', p: 70 },
{ t: 'Spring MVC', p: 60 },
{ t: 'Spring Boot', p: 70 }, { t: 'Rest APIs', p: 65 },
{ t: 'Unit test framework - JUNIT and Mockito', p: 70 }, { t: 'VCS tools - Git,BitBucket, build tool Maven', p: 60 },
{ t: 'CI/CD pipeline tool - Bamboo,Github actions and Jenkins', p: 70 }]

const Skills = () => {
    const [selectedTab, setSelectedTab] = useState({ activetab: 0 });
    const handleToggletab = (tabId) => {
        setSelectedTab({ ...selectedTab, activetab: tabId });
    }


    const renderTab = () => {
        if (selectedTab.activetab === 1) {
            return (<Skill heading={"Front End"} details={frontEndSkills} />)
        }

        if (selectedTab.activetab === 2) {
            return (<Skill heading={"Back End"} details={backEndSkill} />)
        }

        if (selectedTab.activetab === 0) {
            return (<>{mySkill()}</>)
        }

    }

    return (
        <div className="catogory-tab">
            <Grid >
                <Tabs activetab={selectedTab.activetab} onChange={(tabId) => handleToggletab(tabId)} ripple>
                    <Tab>Skill</Tab>
                    <Tab>Front End</Tab>
                    <Tab>BackEnd</Tab>
                </Tabs>
                <Content>{renderTab()}</Content>
            </Grid>
        </div>

    );
}

const mySkill = () => {
    const points = [
        "Java/J2EE platform preferably Java 8 or above",
        "Spring MVC,Spring Boot,Spring Batch,Microservices",
        "Rest APIs",
        "XML,JSON",
        "Unit test framework - JUNIT and Mockito",
        "VCS tools - Git,BitBucket", "Build tool Maven",
        "CI/CD pipeline tool - Bamboo,Github actions and Jenkins.",
        "AWS services - SNS,SQS,API gateway,IAM,S3,Cloudwatch,SES,Lambda ",
        "Understanding of ORM tools - Hibernate", "Database concept ,MYSQL and SQL",
        "Web servers and application servers like Tomcat,Websphere and JBoss",
        "Oauth, OpenID",
        "Apigee,Kibana",
        "CSS,HTML,Javascript,Jquery,React,Typescript",
        "Dev Ops - Graphana ,Kubernetes, Docker, Kafka"
    ]
    return (
        <div className="about-me-rightcol">
            <Grid>
                <ul>
                {points.map((e) => {
                    return (
                        <>
                            <li><p>{e}</p></li>
                        </>
                    )
                })}
                </ul>
            </Grid>
        </div>
    )
}

export default Skills;