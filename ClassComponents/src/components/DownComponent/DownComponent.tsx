import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { iWarsResponse } from '../../interfaces/start-wars.interface';
import { Checkbox } from '../ChekedComponent/ChekedComponent copy';
import { DownLoadComponent } from '../DownloadComponent/DownloadComponent';

interface DownComponentProps {
    searchData: iWarsResponse | undefined;
    loader: boolean;
    getData: (value: string) => void;
    changeStateLoaderOn: () => void;
    changeStateLoader: () => void;
}

export const DownComponent = ({
    searchData,
    loader,
    getData,
    changeStateLoaderOn,
    changeStateLoader,
}: DownComponentProps) => {
    const [SearchParams, setSearchParams] = useSearchParams({ page: '1', name: 'null' });

    function SetParams(page: string) {
        setSearchParams({ page: page });
    }

    if (searchData) {
        if (loader) {
            return (
                <div className="flex w-5/6 flex-col gap-3 justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl">
                    <svg
                        className="animate-spin w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                </div>
            );
        }

        if (searchData.results.length > 0) {
            return (
                <div className=" relative flex w-5/6 flex-col  justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl gap-4">
                    <DownLoadComponent></DownLoadComponent>
                    <div className="flex w-full flex-row justify-center items-center ">
                        <button
                            onClick={() => {
                                if (searchData.previous) {
                                    PreviousPagination(searchData.previous, getData, changeStateLoaderOn, SetParams);
                                }
                            }}
                            className="w-10 bg-slate-300 rounded-full p-2 m-2 text-white"
                        >
                            ←
                        </button>

                        <div className="flex flex-row w-full">
                            <div className="flex flex-col  w-full items-center  gap-2">
                                {searchData.results.map((el, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row w-2/4 justify-center gap-5 rounded-xl  bg-slate-400"
                                    >
                                        <Link
                                            key={index}
                                            to={'detail?name=' + el.name}
                                            className=" p-3  flex justify-end  gap-10 text-white"
                                        >
                                            {el.name}
                                        </Link>
                                        <Checkbox el={el} />
                                    </div>
                                ))}
                            </div>
                            <Outlet />
                        </div>

                        <button
                            onClick={() => {
                                if (searchData.next) {
                                    NextPagination(searchData.next, getData, changeStateLoaderOn, SetParams);
                                }
                            }}
                            className=" w-10 bg-slate-300 rounded-full p-2 m-2 text-white"
                        >
                            →
                        </button>
                    </div>
                    <div className="flex flex-row text-white text-xl">Page : {SearchParams.get('page')}</div>
                </div>
            );
        } else {
            return (
                <div className="flex w-5/6 flex-col gap-3 justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl">
                    <div className="w-3/4 bg-slate-400 p-4 rounded-xl flex justify-center text-white">NOT Found</div>
                </div>
            );
        }
    } else {
        if (loader) {
            return (
                <div className="flex w-5/6 flex-col gap-3 justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl">
                    <svg
                        className="animate-spin w-10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                </div>
            );
        } else {
            return (
                <div className="flex w-5/6 flex-col gap-3 justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl text-white text-5xl">
                    Enter Your Request
                </div>
            );
        }
    }
};

function NextPagination(
    searchData: string | null,
    getData: (value: string) => void,
    changeStateLoaderOn: () => void,
    SetParams: (page: string) => void
) {
    if (searchData) {
        const page = searchData.split('&')[1];
        SetParams(page.split('=')[1]);
        changeStateLoaderOn();
        getData('&' + page);
    }
}
function PreviousPagination(
    searchData: string | null,
    getData: (value: string) => void,
    changeStateLoaderOn: () => void,
    SetParams: (page: string) => void
) {
    if (searchData) {
        const page = searchData.split('&')[1];
        SetParams(page.split('=')[1]);
        changeStateLoaderOn();
        getData('&' + page);
    }
}
