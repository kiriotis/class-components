import { useContext, useEffect, useState } from 'react';
import { GetLocalStorage, SetLocalStorage } from '../../../services/localService';
import { ThemeContext } from '../../../thems/ThemeContex';

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
    const { theme, setTheme } = useContext(ThemeContext);
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
            <button
                className={(theme === 'light' ? ' bg-slate-500 ' : ' bg-slate-800 ') + 'p-3 rounded-xl text-white'}
                onClick={startSearch}
            >
                Search
            </button>
            <button
                className={(theme === 'light' ? ' bg-slate-500 ' : ' bg-slate-800 ') + 'p-3  rounded-xl text-white'}
                onClick={() => {
                    setError(true);
                }}
            >
                Make error great again
            </button>
            <button
                className={(theme === 'light' ? ' bg-slate-500 ' : ' bg-slate-800 ') + 'p-3  rounded-xl text-white'}
                onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                }}
            >
                Theme : {theme}
            </button>
            {error && (
                <h1 className="m-4 flex flex-col justify-center items-center bg-slate-400 rounded-xl text-white p-4">
                    Sorry.. there was an error
                </h1>
            )}
        </div>
    );
};
