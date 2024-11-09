"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignUpProps {
  firstName: string;
  lastName: string;
  matricNo: string;
  email: string;
  password: string;
  userType: string;
  phoneNumber: string;
}

export default function SignUp() {
  const router = useRouter();
  const [state, setState] = useState<SignUpProps>({
    firstName: '',
    lastName: '',
    email: '',
    matricNo: '',
    userType: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<SignUpProps>>({});

  const validate = () => {
    const newErrors: Partial<SignUpProps> = {};

    if (!state.firstName) newErrors.firstName = "First name is required";
    if (!state.lastName) newErrors.lastName = "Last name is required";
    if (state.userType === "student" && !state.matricNo) newErrors.matricNo = "Matriculation number is required";
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) newErrors.email = "Valid email is required";
    if (!state.password || state.password.length < 8) newErrors.password = "Password must be at least 6 characters";
    if (!state.userType) newErrors.userType = "User type is required";
    if (!state.phoneNumber || !/^\d+$/.test(state.phoneNumber)) newErrors.phoneNumber = "Valid phone number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUserTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setState((prevState) => ({
      ...prevState,
      userType: value,
      matricNo: value === "staff" ? "" : prevState.matricNo,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      matricNo: "",
    }));
  };

  const handleSignUp = () => {
    router.push('/dashboard');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      handleSignUp();
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          alt=""
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
          width={100}
          height={100}
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-medium text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={state.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-medium text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={state.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
              />
            </div>
          </div>

          <div className="flex gap-5">
            <div className="w-full">
              <label htmlFor="phoneNumber" className="block text-sm/6 font-medium text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  required
                  value={state.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
                />
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={state.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={state.password}
                autoComplete="current-password"
                onChange={handleChange}
                placeholder="Enter password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
              />
            </div>
          </div>

          {state.userType === "student" && (
            <div>
              <label htmlFor="matricNo" className="block text-sm/6 font-medium text-gray-900">
                Matric Number
              </label>
              <div className="mt-2">
                <input
                  id="matricNo"
                  name="matricNo"
                  type="text"
                  required={state.userType === "student"}
                  value={state.matricNo}
                  onChange={handleChange}
                  placeholder="Enter matric number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
                />
              </div>
            </div>
          )}


          <div className="flex gap-4 items-center justify-center">
            <div className="flex items-center w-full">
              <input
                id="student"
                name="userType"
                type="radio"
                value="student"
                required
                checked={state.userType === 'student'}
                onChange={handleUserTypeChange}
                className="cursor-pointer rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
              />
              <label htmlFor="student" className="ml-2 text-sm font-medium text-gray-900">
                Student
              </label>
            </div>
            <div className="flex items-center w-full">
              <input
                id="staff"
                name="userType"
                type="radio"
                value="staff"
                required
                checked={state.userType === 'staff'}
                onChange={handleUserTypeChange}
                className="cursor-pointer rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
              />
              <label htmlFor="staff" className="ml-2 text-sm font-medium text-gray-900">
                Staff
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already a member?{' '}
          <Link href={'/signin'} className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div >
    </div >
  )
}
