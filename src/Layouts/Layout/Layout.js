import React from 'react';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <Header/>
            <main style={{paddingBottom: 50}}>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}

export default Layout;