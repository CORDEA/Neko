import {NekoState} from "./NekoState";
import {FETCH_NEKO, NekoActionTypes} from "./NekoAction";
import {combineReducers} from "redux";
import Url from "./Url";

const initialState: NekoState = {
    urls: []
};

function nekoReducer(state = initialState, action: NekoActionTypes): NekoState {
    switch (action.type) {
        case FETCH_NEKO:
            const urls = action.response.map(value => new Url(value));
            return {...state, urls};
        default:
            return state;
    }
}

const reducer = combineReducers({
    neko: nekoReducer
});

export default reducer
