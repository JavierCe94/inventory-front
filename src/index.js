import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {loadState, saveState} from './components/localStorage';
import {
    VisibleMenu,
    setVisibleMenu,
    setToken
} from './components/actions/actions';
import todoApp from './components/reducers/reducers';

/*
const store = createStore(todoApp, {})

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)
*/

const persistedState = loadState();
const store = createStore(
    todoApp,
    persistedState
);
store.subscribe(() => {
    saveState(store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


/*
const store = createStore(myReducer);

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            clickSumar={() => store.dispatch({ type: 'sumar' })}
            clickRestar={() => store.dispatch({ type: 'restar' })}
        />,
        document.getElementById("ejRedux")
    );
};

store.subscribe(render);
render();
*/



