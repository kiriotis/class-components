import { iWarsResponse } from '../../interfaces/start-wars.interface';
import { useSearchMutation } from '../../services/apiServices';
import { SearchComponent } from './SubComponents/SearchComponent';

export const UpComponent = (props: {
    getData: (value: string) => void;

    changeStateLoader: () => void;
    changeStateLoaderOn: () => void;
}) => {
    return (
        <div className="flex w-5/6 justify-center items-center h-24 mt-10 bg-gray-500 rounded-xl">
            <SearchComponent
                getData={props.getData}

                changeStateLoader={props.changeStateLoader}
                changeStateLoaderON={props.changeStateLoaderOn}
            />
        </div>
    );
};
