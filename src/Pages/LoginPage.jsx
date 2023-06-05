import React, { useEffect, useContext, useState } from 'react';
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Player from '../Dataservice/Player';

import LoginForm from '../Components/LoginForm';

async function LoginPlayer(playername, password) {
    const player = new Player(playername, password);
    const result = await player.LoginPlayer();
    return (result);
};

const LoginPage = ({ playerSetter }) => {
    let [playername, setPlayername] = useState("");
    let [password, setPassword] = useState("");
    let [loggedIn, setLoggedIn] = useState(null);

    useEffect(() => {
        if (loggedIn === false) {
            alert("Login failed. Please check that the input is correct");
            setLoggedIn(null);
        }
    }, [loggedIn]);


    if (!loggedIn || loggedIn === null) {
        return (
            <Container fluid>
                <h3 className="text-white">Login</h3>
                <LoginForm
                    player={playername} setPlayername={setPlayername}
                    password={password} setPassword={setPassword} />
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="primary" onClick={async () => {
                            const result = await LoginPlayer(playername, password); 
                            const player = result.playerName;                                            
                            playerSetter(player);
                            
                            if (player !== null) {
                                setLoggedIn(true);                                                      
                            } else {
                                setLoggedIn(false);
                            }
                        }}>
                            Login
                        </Button>
                    </Col>
                    <Col md="auto">
                        <Button variant="primary" as={Link} to="/casino/register">
                            Register
                        </Button>
                    </Col>
                </Row>

            </Container >
        );
    } else {
        return (
            <Container fluid>
                <p className="text-white">Sucessfully logged in</p>
                <Button variant="danger" as={Link} to={"/casino/game"}>Click here to start game!</Button>
                
            </Container>
            
        );

    }

};

export default LoginPage;