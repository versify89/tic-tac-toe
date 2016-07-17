import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import applicationReducer from './reducers';

let store = createStore(applicationReducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>
    , document.getElementById("app")
);