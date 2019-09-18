import React from 'react';
import Main from "./Main";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./NekoReducer";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";

const MainNavigator = createStackNavigator({
    Main: {screen: Main},
});

const Navigation = createAppContainer(MainNavigator);

const store = createStore(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
