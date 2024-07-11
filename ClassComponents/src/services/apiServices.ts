import { iWarsResponse } from '../interfaces/start-wars.interface';

export function GetApi(Search: string) {
    return fetch('https://swapi.dev/api/people/?search=' + Search.toLowerCase())
        .then((res) => res.json())
        .then((res) => {
            return res as iWarsResponse;
        })
        .then((res) => {
            return res.results;
        });
}
