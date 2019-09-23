import {NekoResponse} from "./NekoResponse";

export default class Url {
    key: string;
    url: string;

    constructor(response: NekoResponse) {
        this.key = response.id;
        this.url = response.url;
    }
}
