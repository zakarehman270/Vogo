// src/pages/Login.jsx
import React from 'react';
import Input from 'app/Components/UI/Input';
import PhoneInput from 'app/Components/UI/PhoneInput'; // Import the PhoneInput component
import useForm from 'app/hooks/useForm';
import CardLayout from 'app/Components/layouts/CardLayout';

const ComplateRegister = () => {
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
        if (!values.phone) {
            errors.phone = 'Phone number is required';
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
        { 
            firstName: '', 
            lastName: '', 
            username: '', 
            email: '', 
            phone: '', 
            password: '' 
        },
        validate,
        handleLogin
    );

    return (
        <CardLayout >
            <div className="w-full">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-2">
                            <label
                                htmlFor="firstName"
                                className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                            >
                                First Name
                            </label>
                            <Input
                                type="text"
                                name="firstName"
                                value={values.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label
                                htmlFor="lastName"
                                className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                            >
                                Last Name
                            </label>
                            <Input
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="username"
                            className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                        >
                            Username
                        </label>
                        <Input
                            type="text"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            error={errors.username}
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="email"
                            className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                        >
                            Email Address
                        </label>
                        <Input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            error={errors.email}
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="phone"
                            className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                        >
                            Phone Number
                        </label>
                        <PhoneInput
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            required
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label
                            htmlFor="password"
                            className="text-[14px] leading-[100%] tracking-[0%] font-normal"
                        >
                            Password
                        </label>
                        <Input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            error={errors.password}
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

export default ComplateRegister;