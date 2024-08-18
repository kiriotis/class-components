import { useNavigate } from 'react-router';

export function MainComponent() {
    const navigate = useNavigate();
    return (
        <div className="flex w-screen h-screen gap-10 flex-row items-center justify-center">
            <button
                onClick={() => {
                    navigate('/NotReactForm');
                }}
                className="flex  p-8 bg-slate-600 text-white rounded-2xl"
            >
                Not React Form
            </button>
            <button
                onClick={() => {
                    navigate('/ReactForm');
                }}
                className="flex   p-8 bg-slate-600 text-white rounded-2xl"
            >
                React Form
            </button>
        </div>
    );
}
