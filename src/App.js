import React from 'react';
import './App.css';
import Main from './components/Main';
import { Footer, Layout, Header, Content, Navigation, Drawer } from 'react-mdl';
import CustomFooter from './components/Footer';
import CustomDrawer from './components/Header/Drawer';
import Routers from './components/router';
import CustomHeader from './components/Header';

const App = () => {
    return (
    <>
        <Layout fixedDrawer>
            <CustomDrawer />
            <Content><Routers/></Content>
        </Layout>
    </>
    )
}

export default App;
