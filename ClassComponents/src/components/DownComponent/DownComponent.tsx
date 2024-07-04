import { Component } from 'react';
import { iPerson } from '../../interfaces/start-wars.interface';

export class DownComponent extends Component<{ searchData: iPerson[]; loader: boolean }> {
    render() {
        if (this.props.loader) {
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
        if (this.props.searchData.length > 0) {
            return (
                <div className="flex w-5/6 flex-col gap-3 justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl">
                    {this.props.searchData.map((el, index) => (
                        <div key={index} className="w-3/4 bg-slate-400 p-4 rounded-xl flex justify-center text-white">
                            {el.name}
                        </div>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="flex w-5/6 flex-col gap-3 justify-center items-center h-full mb-10 mt-10 bg-gray-500 rounded-xl">
                    <div className="w-3/4 bg-slate-400 p-4 rounded-xl flex justify-center text-white">NOT Found</div>
                </div>
            );
        }
    }
}
