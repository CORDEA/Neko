import React from 'react';
import Main from "./Main";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./NekoReducer";

const store = createStore(reducer);

export default function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}
