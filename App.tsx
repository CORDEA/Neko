import React from 'react';
import Main from "./Main";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from "./NekoReducer";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import thunk from "redux-thunk";

const MainNavigator = createStackNavigator({
    Main: {screen: Main},
});

const Navigation = createAppContainer(MainNavigator);

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
