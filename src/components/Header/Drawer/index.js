import React from 'react';
import { Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';

const CustomDrawer = () => {
    return (
        <>
            <Drawer title="Vishesh Tiwari">
                <Navigation>
                    <Link to="/about">About</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/work-experience">Work Experience</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/awards">Acheivement And Award</Link>
                </Navigation>
            </Drawer>
        </>
    )
}

export default CustomDrawer;