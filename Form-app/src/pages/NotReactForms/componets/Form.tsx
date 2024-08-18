import React, { ChangeEvent, FormEvent, useState } from 'react';

interface FormData {
    name: string;
    age: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
    terms: boolean;
    picture: File | null;
    country: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        age: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        terms: false,
        picture: null,
        country: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] || null : value,
        });
    };



    return (
        <form onSubmit={() => { }} className="flex flex-col  gap-5">
            <label className="flex justify-between  bg-slate-500 p-4  rounded-2xl">
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>

            {/* Age */}
            <label className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
            </label>

            {/* Email */}
            <label className="bg-slate-500 p-4 gap-5 rounded-2xl flex justify-between">
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>

            {/* Password */}
            <label className="bg-slate-500 p-4  rounded-2xl flex justify-between">
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>

            {/* Confirm Password */}
            <label className="bg-slate-500 p-4  rounded-2xl flex justify-between">
                Confirm Password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </label>

            {/* Gender */}
            <label className="bg-slate-500 p-4  rounded-2xl flex justify-between">
                Gender:
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                />{' '}
                Male
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                />{' '}
                Female
                <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                />{' '}
                Other
            </label>

            {/* Terms and Conditions */}
            <label className="bg-slate-500 p-4  rounded-2xl flex justify-between">
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />I accept the
                Terms and Conditions
            </label>

            {/* Upload Picture */}
            <label className="w-full bg-slate-500 p-4  rounded-2xl flex justify-between">
                Upload Picture:
                <input type="file" name="picture" onChange={handleChange} />
            </label>

            {/* Country */}
            <label className="w-full bg-slate-500 p-4  rounded-2xl flex justify-between">
                Country:
                <input list="countries" name="country" value={formData.country} onChange={handleChange} />
                <datalist id="countries">
                    <option value="United States" />
                    <option value="Canada" />
                    <option value="United Kingdom" />
                    <option value="Australia" />
                    <option value="Germany" />
                    {/* Add more countries as needed */}
                </datalist>
            </label>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-slate-300 p-4  rounded-2xl flex justify-between">
                Submit
            </button>
        </form>
    );
};

export default RegistrationForm;
