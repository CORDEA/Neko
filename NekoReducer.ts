import {NekoState} from "./NekoState";
import {FETCH_NEKO, NekoActionTypes} from "./NekoAction";
import {combineReducers} from "redux";

const initialState: NekoState = {
    urls: []
};

function nekoReducer(state = initialState, action: NekoActionTypes): NekoState {
    switch (action.type) {
        case FETCH_NEKO:
            return state;
        default:
            return state;
    }
}

const reducer = combineReducers({
    neko: nekoReducer
});

export default reducer
