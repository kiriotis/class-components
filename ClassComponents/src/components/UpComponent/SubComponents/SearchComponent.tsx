import { useEffect, useState } from 'react';
import { iWarsResponse } from '../../../interfaces/start-wars.interface';
import { GetApi } from '../../../services/apiServices';
import { GetLocalStorage, SetLocalStorage } from '../../../services/localService';

export const SearchComponent = ({
    changeState,
    changeStateLoader,
    changeStateLoaderON,
}: {
    changeState: (data: iWarsResponse) => void;
    changeStateLoader: () => void;
    changeStateLoaderON: () => void;
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

    const handleAgeChange = () => {
        changeStateLoaderON();
        GetApi(value).then((data) => {
            changeState(data);
            changeStateLoader();
        });
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
            <button className="p-3 bg-slate-400 rounded-xl text-white" onClick={handleAgeChange}>
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
