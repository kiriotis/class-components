import { iWarsResponse } from '../../interfaces/start-wars.interface';
import { SearchComponent } from './SubComponents/SearchComponent';

export const UpComponent = (props: {
    changeState: (data: iWarsResponse) => void;
    changeStateLoader: () => void;
    changeStateLoaderOn: () => void;
}) => {
    return (
        <div className="flex w-5/6 justify-center items-center h-24 mt-10 bg-gray-500 rounded-xl">
            <SearchComponent
                changeState={props.changeState}
                changeStateLoader={props.changeStateLoader}
                changeStateLoaderON={props.changeStateLoaderOn}
            />
        </div>
    );
};
