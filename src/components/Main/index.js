import React, { Component, useState } from 'react';
import { Grid, Cell, Tabs, Tab, Card, CardTitle, Button, CardText, CardMenu, IconButton, CardActions, Content } from 'react-mdl';
import Resume from '../resume';
import Education from '../EducationSection/education';
import Routers from '../router';
import { useNavigate } from 'react-router-dom';


const Main = () => {

    const [selectedTab, setSelectedTab] = useState({ activetab: 0 });
    const navigate = useNavigate();

    const handleToggletab = (tabId) => {
        setSelectedTab({ ...selectedTab, activetab: tabId });
        if(tabId === 0){
            navigate('/resume');
        }
        if(tabId === 1){
            navigate('/education');
        }
       
    }


    const renderTab = () => {
        if (selectedTab.activetab === 0) {
            return (<Resume />)
        }

        if (selectedTab.activetab === 3) {
            return (<div className="about-me-rightcol" >    <Education startYear='2012' endYear='2016'
                degree='B.Sc(Mathematics/Chemistry)'
                school='V.S.S.D College,Kanpur'
                university='Chhatrapati Shahu Ji Maharaj University, Kanpurr'
                per='62.67'
            />     <Education startYear='2012' endYear='2016'
                degree='B.Sc(Mathematics/Chemistry)'
                school='V.S.S.D College,Kanpur'
                university='Chhatrapati Shahu Ji Maharaj University, Kanpurr'
                per='62.67'
                /> </div>)
        }

    }

    return (
        <div className="catogory-tab">
            <Tabs activetab={selectedTab.activetab} onChange={(tabId) => handleToggletab(tabId)} ripple>
                <Tab>About</Tab>
                <Tab>Education</Tab>
                <Tab>Experience</Tab>
                <Tab>Organization</Tab>
                <Tab>Skills</Tab>
                <Tab>Contant</Tab>
            </Tabs>

            <Grid>
                <Cell col={12}>
                    <Content><Routers/></Content>
                </Cell>
            </Grid>
        </div>

    );
}


export default Main;









