import { useEffect, useState } from 'react';
import { iWarsResponse } from '../../../interfaces/start-wars.interface';
import { GetApi, useSearchMutation } from '../../../services/apiServices';
import { GetLocalStorage, SetLocalStorage } from '../../../services/localService';

export const SearchComponent = ({

    changeStateLoader,
    changeStateLoaderON,
    getData,
}: {

    changeStateLoader: () => void;
    changeStateLoaderON: () => void;
    getData: (value: string) => void;
}) => {
    const [value, setValue] = useState(useLocalHook());
    const [error, setError] = useState(false);

    function useLocalHook() {
        useEffect(() => {
            return () => {
                SetLocalStorage('Search', value);
            };
        });
        return GetLocalStorage();
    }

    const startSearch = () => {
        changeStateLoaderON();
        getData(value);
    };

    return (
        <div className="flex flex-row gap-10 w-full justify-around ">
            <input
                onChange={({ target }) => {
                    setValue(target.value);
                }}
                defaultValue={useLocalHook()}
                placeholder="Enter search"
                type="text"
                className="w-2/4 rounded-xl p-2"
            ></input>
            <button className="p-3 bg-slate-400 rounded-xl text-white" onClick={startSearch}>
                Search
            </button>
            <button
                className="p-3 bg-slate-400 rounded-xl text-white"
                onClick={() => {
                    setError(true);
                }}
            >
                Make error great again
            </button>
            {error && (
                <h1 className="m-4 flex flex-col justify-center items-center bg-slate-400 rounded-xl text-white p-4">
                    Sorry.. there was an error
                </h1>
            )}
        </div>
    );
};
