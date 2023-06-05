import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, useContext, Component} from 'react';
import {
    Routes, Route, Link, NavLink, useParams, Outlet, Navigate
} from "react-router-dom";
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import PlayerContext from './Context/PlayerContext';

//page imports
import LoginPage from './Pages/LoginPage';
//import LogoutPage from "./Pages/LogoutPage";
//import RegisterPage from "./Pages/RegisterPage";



const Error = () =>
    <div>404: Unknown Path</div>;

const AppRouting = () => {
    let [player, setPlayer] = useState(null);
    return (    
        <>
            <PlayerContext.Provider value={player}>
                <Routes>
                    {/* Routing for startpage */}           
                    <Route path="/casino/login" element={<LoginPage playerSetter={setPlayer}/>} />
                    <Route path="/" element={<Navigate replace to="/casino/login" />} />
                    <Route path="/casino/game" element={"test"}/>
                    


                    {/* Routing for errors*/}
                    <Route path="*" element={<Error />} />

                </Routes>

            </PlayerContext.Provider>


        </>
    );
}
export default AppRouting;