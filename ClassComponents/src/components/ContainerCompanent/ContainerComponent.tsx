import { useState } from 'react';
import { GetApi, useSearchMutation } from '../../services/apiServices';
import { DownComponent } from '../DownComponent/DownComponent';
import { UpComponent } from '../UpComponent/UpComponent';

export function ContainerComponent() {
    const [loader, setLoader] = useState(false);
    const [getdata, { data }] = useSearchMutation();

    const GetData = (value: string) => {
        getdata(value).then(() => {
            setLoader(false);
        });
    };
    const ChangeStateLoader = () => {
        setLoader(false);
    };
    const ChangeStateLoaderON = () => {
        setLoader(true);
    };

    return (
        <div className="flex flex-col w-full h-full justify-center items-center ">
            <UpComponent
                getData={GetData}
                changeStateLoader={ChangeStateLoader}
                changeStateLoaderOn={ChangeStateLoaderON}
            />
            <DownComponent
                searchData={data}
                loader={loader}
                getData={GetData}
                changeStateLoaderOn={ChangeStateLoaderON}
                changeStateLoader={ChangeStateLoader}
            />
        </div>
    );
}
