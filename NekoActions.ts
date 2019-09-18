import {FETCH_NEKO, NekoActionTypes} from "./NekoAction";

export function fetchNeko(): NekoActionTypes {
    return {
        type: FETCH_NEKO,
    }
}
