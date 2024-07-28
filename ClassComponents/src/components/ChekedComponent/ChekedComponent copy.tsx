import { useDispatch, useSelector } from 'react-redux';
import { iPerson } from '../../interfaces/start-wars.interface';
import { RootState } from '../../store/Store';
import { AddChekes, AddObject } from '../../store/chekedSlice';

export function Checkbox(props: { el: iPerson }) {
    const count = useSelector((state: RootState) => state.chekedSlice.value);
    const dispatch = useDispatch();
    function cheker(el: string) {
        return count.includes(el);
    }
    return (
        <input
            type="checkbox"
            checked={cheker(props.el.name)}
            onChange={(e) => {
                dispatch(AddChekes(props.el.name));
                dispatch(AddObject(props.el));
            }}
        />
    );
}
