import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BOX_CLICKED } from './actions';

const winBoxes = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const initialState = {
    playersTurn: 1,
    boxText: ["--","--","--","--","--","--","--","--","--"],
    playerOne: [],
    playerTwo: [],
    winner: 0
};

function getWinner(state) {
    // Check if a player won
    for (let winBox of winBoxes) {
        let winningComboPlayerOne = true;
        let winningComboPlayerTwo = true;

        winningComboPlayerOne = winBox.every((boxId) => {
            return state.playerOne.indexOf(boxId) != -1;
        });

        winningComboPlayerTwo = winBox.every((boxId) => {
            return state.playerTwo.indexOf(boxId) != -1;
        });

/*        for (let box of winBox) {
            if (state.playerOne.indexOf(box) == -1)
                winningComboPlayerOne = false;

            if (state.playerTwo.indexOf(box) == -1)
                winningComboPlayerTwo = false;
        }*/

        if (winningComboPlayerOne == true)
            return 1;
        else if (winningComboPlayerTwo == true)
            return 2;
    }

    // Check if there is no winner
    let noMoreTurns = state.boxText.every((box) => {
        return box != "--";
    });
    if (noMoreTurns == true)
        return -1; // No winner, and no more empty boxes
    else
        return 0; // Game is still ongoing
}

function globalReducer(state = initialState, action) {
    switch (action.type) {
        case BOX_CLICKED:
            if (state.boxText[action.boxId] == "--" && state.winner == 0) {
                // Set box state
                let newBoxText = state.boxText.slice();
                let newPlayerOne = state.playerOne.slice();
                let newPlayerTwo = state.playerTwo.slice();

                if (state.playersTurn == 1) {
                    newBoxText[action.boxId] = "X";
                    newPlayerOne.push(action.boxId);
                }
                else {
                    newBoxText[action.boxId] = "O";
                    newPlayerTwo.push(action.boxId);
                }

                // Set next players turn
                let newPlayersTurn = 0;
                if (state.playersTurn == 1) {
                    newPlayersTurn = 2;
                }
                else {
                    newPlayersTurn = 1;
                }

                // Check for winner
                let newWinner = getWinner({boxText: newBoxText, playerOne: newPlayerOne, playerTwo: newPlayerTwo});

                return Object.assign({}, state, {
                    boxText: newBoxText,
                    playersTurn: newPlayersTurn,
                    playerOne: newPlayerOne,
                    playerTwo: newPlayerTwo,
                    winner: newWinner
                });
            }
            else
                return state;
        default:
            return state;
    }
}

let store = createStore(globalReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("app")
);