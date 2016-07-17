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

function getTextForBox(boxId, state) {
    for (let n of state.playerOne) {
        if (n == boxId)
            return "X";
    }

    for (let n of state.playerTwo) {
        if (n == boxId)
            return "O";
    }

    return "--";
}

const TicTacToe = ({ state, onBoxClick }) => (
    <Grid>
        <Row>
            <Col md={12}>
                <Jumbotron>
                    <h1>Tic-Tac-Toe</h1>
                    <p>This is a simple tic-tac-toe game created with React and Bootstrap.</p>
                </Jumbotron>
            </Col>
        </Row>
        <Row>
            <Col md={12} mdOffset={5}>
                <ButtonGroup>
                    <Box boxId={0} onClick={onBoxClick} text={getTextForBox(0, state)} />
                    <Box boxId={1} onClick={onBoxClick} text={getTextForBox(1, state)} />
                    <Box boxId={2} onClick={onBoxClick} text={getTextForBox(2, state)} />
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={12} mdOffset={5}>
                <ButtonGroup>
                    <Box boxId={3} onClick={onBoxClick} text={getTextForBox(3, state)} />
                    <Box boxId={4} onClick={onBoxClick} text={getTextForBox(4, state)} />
                    <Box boxId={5} onClick={onBoxClick} text={getTextForBox(5, state)} />
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            <Col md={12} mdOffset={5}>
                <ButtonGroup>
                    <Box boxId={6} onClick={onBoxClick} text={getTextForBox(6, state)} />
                    <Box boxId={7} onClick={onBoxClick} text={getTextForBox(7, state)} />
                    <Box boxId={8} onClick={onBoxClick} text={getTextForBox(8, state)} />
                </ButtonGroup>
            </Col>
        </Row>
        <Row className="row-margin-top">
            <Col md={12}>
                <Alert>{getAlertMessage(state)}</Alert>
            </Col>
        </Row>
    </Grid>
);

export default TicTacToe;