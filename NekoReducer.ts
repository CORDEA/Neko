import {NekoState} from "./NekoState";
import {FETCH_NEKO, NekoActionTypes} from "./NekoAction";

const initialState: NekoState = {
    urls: []
};

export function nekoReducer(state = initialState, action: NekoActionTypes): NekoState {
    switch (action.type) {
        case FETCH_NEKO:
            return state;
        default:
            return state;
    }
}
