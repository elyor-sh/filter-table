import React from 'react'
import {Outlet} from 'react-router-dom'
import classes from './style.module.scss'
import Header from "./header"
import Footer from "./footer"

const Layout = () => {
    return (
        <>
            <Header/>
            <main className={classes.main}>
                <div className={classes.container}>
                    <Outlet/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default Layout
