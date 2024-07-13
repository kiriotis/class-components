import { Route, Routes } from 'react-router-dom';
import { ContainerComponent } from './components/ContainerCompanent/ContainerComponent';
import { Layout } from './pages/Layout/Layaout';
import { ErrorPage } from './pages/404/404';

// function App() {
//     return (
//         <div className="flex flex-col w-screen h-screen items-center gap-4">
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route index element={<ContainerComponent />} />
//                 </Route>
//                 <Route path="Friends" element={<ContainerComponent />} />
//             </Routes>
//         </div>
//     );
// }

// export default App;

function App() {
    return (
        <div className="flex flex-col w-screen h-screen items-center gap-4">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ContainerComponent />} />
                    <Route path="404" element={<ErrorPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
