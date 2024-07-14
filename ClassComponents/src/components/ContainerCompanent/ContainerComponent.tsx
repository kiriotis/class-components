import { useState } from 'react';
import { iWarsResponse } from '../../interfaces/start-wars.interface';
import { DownComponent } from '../DownComponent/DownComponent';
import { UpComponent } from '../UpComponent/UpComponent';

export function ContainerComponent() {
    const [ApiData, setApiData] = useState<iWarsResponse>();
    const [loader, setLoader] = useState(false);

    const ChangeState = (myData: iWarsResponse) => {
        setApiData(myData);
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
                changeState={ChangeState}
                changeStateLoader={ChangeStateLoader}
                changeStateLoaderOn={ChangeStateLoaderON}
            />
            <DownComponent
                searchData={ApiData}
                loader={loader}
                changeState={ChangeState}
                changeStateLoaderOn={ChangeStateLoaderON}
                changeStateLoader={ChangeStateLoader}
            />
        </div>
    );
}
