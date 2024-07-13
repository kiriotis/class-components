import { useState } from 'react';
import { iPerson, iWarsResponse } from '../../interfaces/start-wars.interface';
import { DownComponent } from '../DownComponent/DownComponent';
import { UpComponent } from '../UpComponent/UpComponent';

// export class ContainerComponent extends Component {
//     state = {
//         ApiData: [],
//         loader: false,
//         error: false,
//     };

//     ChangeState = (myData: iPerson[]) => {
//         this.setState({
//             ApiData: myData,
//         });
//     };

//     ChangeStateLoader = () => {
//         this.setState({
//             loader: false,
//         });
//     };
//     ChangeStateLoaderON = () => {
//         this.setState({
//             loader: true,
//         });
//     };

//     render() {

//         return (
//             <div className="flex flex-col w-full h-full justify-center items-center ">
//                 <UpComponent
//                     changeState={this.ChangeState.bind(this)}
//                     changeStateLoader={this.ChangeStateLoader.bind(this)}
//                     changeStateLoaderOn={this.ChangeStateLoaderON.bind(this)}
//                 />
//                 <DownComponent searchData={this.state.ApiData} loader={this.state.loader} />
//             </div>
//         );
//     }
// }

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
