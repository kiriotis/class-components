import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { iPerson } from '../../interfaces/start-wars.interface';
import { DelItems } from '../../store/chekedSlice';
import { RootState } from '../../store/Store';
import DelIcon from './DelIcon';
import DownloadIcon from './DownloadIcon';
import File from './file';

export function DownLoadComponent() {
    const count = useSelector((state: RootState) => state.chekedSlice.value);
    const count2 = useSelector((state: RootState) => state.chekedSlice.objectValue);
    const dispatch = useDispatch();
    if (count.length > 0) {
        return (
            <div className="absolute gap-3 flex flex-row justify-center items-center p-2 top-2 right-2  text-white bg-slate-400 rounded-xl">
                <div
                    onClick={() => {
                        delItems(dispatch);
                    }}
                >
                    <DelIcon></DelIcon>
                </div>
                <div
                    onClick={() => {
                        DownLoadFile(count2);
                    }}
                >
                    <DownloadIcon></DownloadIcon>
                </div>
                <div className="relative w-full p-4">
                    <File></File>
                    <div className="absolute top-1 right-4  text-2xl   ">{count.length}</div>
                </div>
            </div>
        );
    }
}
function delItems(count: Dispatch<UnknownAction>) {
    count(DelItems());
}

function DownLoadFile(data: iPerson[]) {
    const csvData = [
        'name,gender,height,mass,homeworld,films',
        ...data.map((item) => {
            const { name, gender, height, mass, homeworld, films } = item;
            return `${name},${gender},${height},${mass},${homeworld},${films.join('; ')}`;
        }),
    ].join('\n');
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${data.length}-characters.csv`);
}

function saveAs(blob: Blob, fileName: string) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
