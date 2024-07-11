import { Component } from 'react';
import { iPerson } from '../../interfaces/start-wars.interface';
import { SearchComponent } from './SubComponents/SearchComponent';

export class UpComponent extends Component<{
    changeState: (data: iPerson[]) => void;
    changeStateLoader: () => void;
    changeStateLoaderOn: () => void;
}> {
    render() {
        return (
            <div className="flex w-5/6 justify-center items-center h-24 mt-10 bg-gray-500 rounded-xl">
                <SearchComponent
                    changeState={this.props.changeState.bind(this)}
                    changeStateLoader={this.props.changeStateLoader.bind(this)}
                    changeStateLoaderON={this.props.changeStateLoaderOn.bind(this)}
                />
            </div>
        );
    }
}
