import { Component } from 'react';
import { iPerson } from '../../../interfaces/start-wars.interface';
import { GetApi } from '../../../services/apiServices';
import { GetLocalStorage, SetLocalStorage } from '../../../services/localService';

export class SearchComponent extends Component<{
    changeState: (data: iPerson[]) => void;
    changeStateLoader: () => void;
    changeStateLoaderON: () => void;
}> {
    state = {
        value: GetLocalStorage(),
        error: false,
    };

    handleAgeChange = () => {
        SetLocalStorage('Search', this.state.value);
        this.props.changeStateLoaderON();
        GetApi(this.state.value).then((data) => {
            this.props.changeState(data);
            this.props.changeStateLoader();
        });
    };

    render() {
        if (this.state.error) {
            throw new Error('Big error');
        }
        return (
            <div className="flex flex-row gap-10 w-full justify-around ">
                <input
                    onChange={({ target }) => {
                        this.setState({
                            value: target.value,
                        });
                    }}
                    defaultValue={this.state.value}
                    placeholder="Enter search"
                    type="text"
                    className="w-2/4 rounded-xl p-2"
                ></input>
                <button className='p-3 bg-slate-400 rounded-xl text-white' onClick={this.handleAgeChange}>Search</button>
                <button className='p-3 bg-slate-400 rounded-xl text-white'
                    onClick={() => {
                        this.setState({ error: true });
                    }}
                >
                    Make error great again
                </button>
            </div>
        );
    }
}
