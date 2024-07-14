import { Route, Routes } from 'react-router-dom';
import { ContainerComponent } from './components/ContainerCompanent/ContainerComponent';
import { ErrorPage } from './pages/404/404';


import { Detail } from './pages/detail/detail';

function App() {
    return (
        <div className="flex flex-col w-screen h-screen items-center gap-4">
            <Routes>
                <Route path="/" element={<ContainerComponent />}>
                    <Route path="detail" element={<Detail />} />
                </Route>
                <Route path="404" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
