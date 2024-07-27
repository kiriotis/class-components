import { useContext } from 'react';
import { ThemeContext } from '../../thems/ThemeContex';
import { SearchComponent } from './SubComponents/SearchComponent';

export const UpComponent = (props: {
    getData: (value: string) => void;

    changeStateLoader: () => void;
    changeStateLoaderOn: () => void;
}) => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div
            className={
                (theme === 'light' ? ' bg-gray-300 ' : ' bg-gray-500 ') +
                'flex w-5/6 justify-center items-center h-24 mt-10  rounded-xl'
            }
        >
            <SearchComponent
                getData={props.getData}
                changeStateLoader={props.changeStateLoader}
                changeStateLoaderON={props.changeStateLoaderOn}
            />
        </div>
    );
};
