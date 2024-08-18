import { useNavigate } from 'react-router';
import MyForm from './component/Form';

export function ReactForms() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-10 w-screen h-screen items-center justify-center">
            <div
                onClick={() => {
                    navigate('/');
                }}
                className="flex flex-col  p-8 bg-slate-600 text-white rounded-2xl"
            >
                ReactForms
            </div>
            <MyForm />
        </div>
    );
}
