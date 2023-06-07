import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';

const LoginForm = ({ playername, setPlayername, password, setPassword }) => {
        return (
            <Container fluid>
                <Form>
                    <Row>
                        <Form.Group className="mb-3" controlId="playername">
                            <Form.Label>Playername</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Playername"
                                value={playername}
                                onChange={e => setPlayername(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        );

};

export default LoginForm;