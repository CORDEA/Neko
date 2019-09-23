import {FETCH_NEKO, NekoActionTypes} from "./NekoAction";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {NekoState} from "./NekoState";
import NekoRepository from "./NekoRepository";
import {NekoResponse} from "./NekoResponse";

const repository = new NekoRepository();

function _fetchNeko(response: NekoResponse[]): NekoActionTypes {
    return {
        type: FETCH_NEKO,
        response: response,
    }
}

export function fetchNeko(): ThunkAction<void, NekoState, null, NekoActionTypes> {
    return async (dispatch: Dispatch<NekoActionTypes>) => {
        const response = await repository.getAll(10);
        dispatch(_fetchNeko(response))
    }
}
