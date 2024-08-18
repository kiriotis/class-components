
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../../../services/store/Store';
import { validationSchema } from './../../../services/validation/validation';

interface FormValues {
    name: string;
    age: number | '';
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    acceptTerms: boolean;
    picture: File | null;
    country: string;
}

const DefaultFormComponent: React.FC = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state: RootState) => state.formSlice.countries);

    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        acceptTerms: false,
        picture: null,
        country: '',
    });

    const [errors, setErrors] = useState<Partial<FormValues>>({});

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked, files } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files![0] : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formValues, { abortEarly: false });
            const reader = new FileReader();
            reader.onloadend = () => {
                dispatch({ type: 'SET_PICTURE', payload: reader.result });
                console.log(formValues);
            };
            if (formValues.picture) {
                reader.readAsDataURL(formValues.picture);
            }
        } catch (validationErrors: any) {
            const formattedErrors: Partial<FormValues> = validationErrors.inner.reduce((acc: any, current: any) => {
                acc[current.path] = current.message;
                return acc;
            }, {});
            setErrors(formattedErrors);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={formValues.name} onChange={handleInputChange} />
                <p>{errors.name}</p>
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <input id="age" name="age" type="number" value={formValues.age} onChange={handleInputChange} />
                <p>{errors.age}</p>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={formValues.email} onChange={handleInputChange} />
                <p>{errors.email}</p>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
                <p>{errors.password}</p>
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formValues.confirmPassword}
                    onChange={handleInputChange}
                />
                <p>{errors.confirmPassword}</p>
            </div>

            <div>
                <label>Gender</label>
                <div>
                    <input type="radio" id="male" name="gender" value="male" onChange={handleInputChange} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" onChange={handleInputChange} />
                    <label htmlFor="female">Female</label>
                </div>
                <p>{errors.gender}</p>
            </div>

            <div>
                <label htmlFor="acceptTerms">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formValues.acceptTerms}
                        onChange={handleInputChange}
                    />
                    Accept Terms and Conditions
                </label>
                <p>{errors.acceptTerms}</p>
            </div>

            <div>
                <label htmlFor="picture">Upload Picture</label>
                <input id="picture" name="picture" type="file" onChange={handleInputChange} />
            </div>

            <div>
                <label htmlFor="country">Country</label>
                <select id="country" name="country" value={formValues.country} onChange={()=>{}}>
                    <option value="" disabled>
                        Select Country
                    </option>
                    {countries.map((country, index) => (
                        <option className='text-black' key={index} value={country.code}></option>
                    ))}
                </select>
                <p>{errors.country}</p>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default DefaultFormComponent;
