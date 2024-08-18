import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/404/404';
import { MainComponent } from './pages/main/Main';
import { NotReactForms } from './pages/NotReactForms/NotReactForms';
import { ReactForms } from './pages/Reactforms/ReactForm';

function App() {
    return (
        <div className="flex flex-col w-screen h-screen items-center gap-4">
            <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="*" element={<NotFound />} />
                <Route path="ReactForm" element={<ReactForms />} />
                <Route path="NotReactForm" element={<NotReactForms />} />
            </Routes>
        </div>
    );
}

export default App;
