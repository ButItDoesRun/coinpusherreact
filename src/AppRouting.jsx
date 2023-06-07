import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState} from 'react';
import {
    Routes, Route, Navigate
} from "react-router-dom";
import PlayerContext from './Context/PlayerContext';

//page imports
import LoginPage from './Pages/LoginPage';
import UnityGame from "./UnityGame";


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
                

                    <Route path="/casino/game" element={<UnityGame player = {player}></UnityGame>}/>
                   


                    {/* Routing for errors*/}
                    <Route path="*" element={<Error />} />

                </Routes>

            </PlayerContext.Provider>


        </>
    );
}
export default AppRouting;