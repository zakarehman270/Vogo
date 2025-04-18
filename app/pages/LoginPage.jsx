// src/pages/Login.jsx
import React from 'react';
import Input from 'app/Components/UI/Input';
import useForm from 'app/hooks/useForm';
import CardLayout from 'app/Components/layouts/CardLayout';

const LoginPage = () => {
    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email is invalid';
        }
        if (!values.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleLogin = async (values) => {
        try {
            //   const response = await loginUser(values);
            //   // Handle successful login
            //   console.log('Login successful', response);
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
        { email: '', password: '' },
        validate,
        handleLogin
    );

    return (
        <CardLayout>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="username"
                            className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                        >
                            Email Address
                        </label>
                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            error={errors.email}
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="username"
                            className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                        >
                            Password
                        </label>
                        <Input
                            label="Email"
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            error={errors.email}  // Change this to errors.password
                            required
                        />
                    </div>
                    <button className="bg-[#FF7F50] w-full cursor-pointer hover:bg-orange-600 text-white text-[14px] font-[200] px-4 py-2 rounded-md transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5 h-[35px]">
                        Continue
                    </button>
                </form>
            </div>

        </CardLayout>
    );
};

export default LoginPage;

