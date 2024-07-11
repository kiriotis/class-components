import { Component } from 'react';
import { DownComponent } from '../DownComponent/DownComponent';
import { UpComponent } from '../UpComponent/UpComponent';
import { iPerson } from '../../interfaces/start-wars.interface';

export class ContainerComponent extends Component {
    state = {
        ApiData: [],
        loader: false,
        error: false,
    };

    ChangeState = (myData: iPerson[]) => {
        this.setState({
            ApiData: myData,
        });
    };

    ChangeStateLoader = () => {
        this.setState({
            loader: false,
        });
    };
    ChangeStateLoaderON = () => {
        this.setState({
            loader: true,
        });
    };

    render() {

        return (
            <div className="flex flex-col w-full h-full justify-center items-center ">
                <UpComponent
                    changeState={this.ChangeState.bind(this)}
                    changeStateLoader={this.ChangeStateLoader.bind(this)}
                    changeStateLoaderOn={this.ChangeStateLoaderON.bind(this)}
                />
                <DownComponent searchData={this.state.ApiData} loader={this.state.loader} />
            </div>
        );
    }
}
