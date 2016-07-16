import { connect } from 'react-redux';
import { nextTurn, boxClicked } from './actions';
import TicTacToe from './TicTacToe';

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onBoxClick: (boxId) => {
            dispatch(boxClicked(boxId))
        }
    }
}

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(TicTacToe)

export default Container;