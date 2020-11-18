import { Provider,connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer';
// import { connect } from "react-redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


export default store;