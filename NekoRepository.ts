import {NekoResponse} from "./NekoResponse";

export default class NekoRepository {
    static readonly URL = "https://api.thecatapi.com/v1/images/search?limit=";

    getAll(limit: number): Promise<NekoResponse[]> {
        return fetch(NekoRepository.URL + limit.toString())
            .then(response => response.json())
    }
}
