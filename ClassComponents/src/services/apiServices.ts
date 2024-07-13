import { iWarsResponse } from '../interfaces/start-wars.interface';

export function GetApi(Search: string) {
    console.log('https://swapi.dev/api/people/?search=' + Search.toLowerCase());
    return fetch('https://swapi.dev/api/people/?search=' + Search.toLowerCase())
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            return res as iWarsResponse;
        });
}
