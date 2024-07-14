import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { iPerson } from '../../interfaces/start-wars.interface';
import { GetApi } from '../../services/apiServices';

export function Detail() {
    const [Apidata, setApiData] = useState<iPerson>();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (searchParams.get('name')) {
            GetApi(searchParams.get('name') as string).then((data) => {
                setApiData(data.results[0]);
            });
        }
    }, [searchParams]);
    if (Apidata) {
        const dataArray = Object.entries(Apidata);
        return (
            <>
                <div className="flex w-3/5  flex-col gap-4  justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl text-white text-base overflow-hidden">
                    <Link to={'/'} className="p-3 bg-slate-400 rounded-xl text-white">
                        close
                    </Link>
                    <div className="w-full flex flex-col">
                        {dataArray.map(([name, value], index) => (
                            <div key={index} className="flex flex-row gap-4">
                                <p className="font-bold">{name}</p>
                                <p>{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    } else {
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
}
