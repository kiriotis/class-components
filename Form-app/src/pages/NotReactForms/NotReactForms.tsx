import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from './../../services/store/Store';
import RegistrationForm from './componets/Form';

export function NotReactForms() {
    const navigate = useNavigate();

    const kek = useSelector((state: RootState) => {
        return state.formSlice;
    });

    return (
        <div className="flex flex-col gap-10 w-screen h-screen items-center justify-center">
            <button
                onClick={() => {
                    navigate('/');
                }}
                className="flex flex-col  p-8 bg-slate-600 text-white rounded-2xl"
            >
                NotReactForms
            </button>
            <RegistrationForm />
        </div>
    );
}
