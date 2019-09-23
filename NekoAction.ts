import {NekoResponse} from "./NekoResponse";

export const FETCH_NEKO = 'FETCH_NEKO';

interface FetchNekoAction {
    type: typeof FETCH_NEKO,
    response: NekoResponse[],
}

export type NekoActionTypes = FetchNekoAction
