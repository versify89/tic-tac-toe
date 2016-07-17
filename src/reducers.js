import { BOX_CLICKED } from './actions';

const winBoxes = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

const initialState = {
    playersTurn: 1,
    playerOne: [],
    playerTwo: [],
    winner: 0
};

function isBoxOwned(boxId, state) {
    for (let n of state.playerOne) {
        if (n == boxId)
            return true;
    }

    for (let n of state.playerTwo) {
        if (n == boxId)
            return true;
    }

    return false;
}

function applicationReducer(state = initialState, action) {
    switch (action.type) {
        case BOX_CLICKED:
            if (isBoxOwned(action.boxId, state) == false && state.winner == 0) {
                let newPlayerOne = state.playerOne.slice();
                let newPlayerTwo = state.playerTwo.slice();

                if (state.playersTurn == 1) {
                    newPlayerOne.push(action.boxId);
                }
                else {
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
                let newWinner = getWinner({playerOne: newPlayerOne, playerTwo: newPlayerTwo});

                return Object.assign({}, state, {
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

        if (winningComboPlayerOne == true)
            return 1;
        else if (winningComboPlayerTwo == true)
            return 2;
    }

    // Check if there is no winner
    let noMoreTurns = state.playerOne.length + state.playerTwo.length >= 9;
    if (noMoreTurns == true)
        return -1; // No winner, and no more empty boxes
    else
        return 0; // Game is still ongoing
}

export default applicationReducer;