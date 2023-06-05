import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext, Component} from 'react';
import {
    Routes, Route, Link, NavLink, useParams, Outlet, Navigate
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Error = () =>
    <div>404: Woops! I don't know that path</div>;



const AppRouting = () => {
    return (    
        <>
            <Routes>
                {/* Routing for startpage */}
                <Route path="/login" element={<WelcomePage></WelcomePage>} />   
                <Route path="/" element={<Navigate replace to="/home" />} />


                {/* Routing for errors*/}
                <Route path="*" element={<Error />} />

            </Routes>


        </>
    );
}
export default AppRouting;