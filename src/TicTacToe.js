import React from 'react';
import Box from './Box';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Alert from 'react-bootstrap/lib/Alert';

function getAlertMessage(state) {
    if (state.winner == 0) // Game is still running
        return `Player ${state.playersTurn}'s turn.`;
    else if (state.winner == -1) // Game ended with no winner
        return "Game over, no winner.";
    else // Game ended with a winner
        return `Player ${state.winner} won!`;
}

const TicTacToe = ({ state, onBoxClick }) => (
    <Grid>
        <Row>
            <Col md="12">
                <Jumbotron>
                    <h1>Tic-Tac-Toe</h1>
                    <p>This is a simple tic-tac-toe game created with React and Bootstrap.</p>
                </Jumbotron>
            </Col>
        </Row>
        <Row>
            <Col md="12" mdOffset="5">
                <ButtonGroup>
                    <Box onClick={() => onBoxClick(0)} text={state.boxText[0]}/>
                    <Box onClick={() => onBoxClick(1)} text={state.boxText[1]} />
                    <Box onClick={() => onBoxClick(2)} text={state.boxText[2]} />
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md="12" mdOffset="5">
                <ButtonGroup>
                    <Box onClick={() => onBoxClick(3)} text={state.boxText[3]} />
                    <Box onClick={() => onBoxClick(4)} text={state.boxText[4]} />
                    <Box onClick={() => onBoxClick(5)} text={state.boxText[5]} />
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md="12" mdOffset="5">
                <ButtonGroup>
                    <Box onClick={() => onBoxClick(6)} text={state.boxText[6]} />
                    <Box onClick={() => onBoxClick(7)} text={state.boxText[7]} />
                    <Box onClick={() => onBoxClick(8)} text={state.boxText[8]} />
                </ButtonGroup>
            </Col>
        </Row>
        <Row className="row-margin-top">
            <Col md="12">
                <p><Alert>{getAlertMessage(state)}</Alert></p>
            </Col>
        </Row>
    </Grid>
);

export default TicTacToe;