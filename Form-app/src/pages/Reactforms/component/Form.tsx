import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setPicture } from '../../../services/slice/NewSliser';
import { RootState } from './../../../services/store/Store';

const MyForm = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.formSlice);
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm();


    return (
      <form onSubmit={() => { }} className="flex flex-col gap-5 flex justify-between">
            <div className="bg-slate-500 p-4 gap-5 rounded-2xl">
                <label htmlFor="name">Name</label>
                <input id="name" {...register('name', { required: true })} />
                {errors.name && <p>Name is required</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="age">Age</label>
                <input id="age" type="number" {...register('age', { required: true, min: 0 })} />
                {errors.age && <p>Valid age is required</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register('email', { required: true })} />
                {errors.email && <p>Valid email is required</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...register('password', { required: true })} />
                {errors.password && <p>Password is required</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" {...register('confirmPassword', { required: true })} />
                {errors.confirmPassword && <p>Please confirm your password</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="gender">Gender</label>
                <select id="gender" {...register('gender', { required: true })}>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p>Gender is required</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="terms">Accept Terms and Conditions</label>
                <input id="terms" type="checkbox" {...register('terms', { required: true })} />
                {errors.terms && <p>You must accept the terms</p>}
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="picture">Upload Picture</label>
                <input id="picture" type="file" accept=".png, .jpeg, .jpg" onChange={() => { }} />
            </div>

            <div className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                <label htmlFor="country">Country</label>
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <input {...field} list="country-list" placeholder="Select or type your country" />
                    )}
                />
                <datalist id="country-list flex justify-between">
                    {countries.countries.map((country, index) => (
                        <option key={index} value={country.name} />
                    ))}
                </datalist>
                {errors.country && <p>Country is required</p>}
            </div>

            <button type="submit" className="bg-slate-300 p-4 gap-5 rounded-2xl">
                Submit
            </button>
        </form>
    );
};

export default MyForm;


