"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignInProps {
  matricNo: string;
  email: string;
  password: string;
  userType: string;
}

export default function SignIn() {
  const router = useRouter();
  const [state, setState] = useState<SignInProps>({
    matricNo: "",
    email: "",
    password: "",
    userType: "",
  });

  const [errors, setErrors] = useState<Partial<SignInProps>>({});

  const validate = () => {
    const newErrors: Partial<SignInProps> = {};

    if (state.userType === "Student" && !state.matricNo) newErrors.matricNo = "Matriculation number is required";
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) newErrors.email = "Valid email is required";
    if (!state.password || state.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (!state.userType) newErrors.userType = "User type is required";

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

  const handleUserType = (userType: "Staff" | "Student") => {
    setState((prevState) => ({
      ...prevState,
      userType,
      matricNo: userType === "Staff" ? "" : prevState.matricNo,
      password: ""
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      matricNo: "",
      password: ""
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
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {state.userType === "Staff" ? (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email Address
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                />
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="matricNo" className="block text-sm font-medium text-gray-900">
                Matric Number
              </label>
              <div className="mt-2">
                <input
                  id="matricNo"
                  name="matricNo"
                  type="text"
                  required
                  value={state.matricNo}
                  onChange={handleChange}
                  placeholder="Enter matric number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
                />
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={state.password}
                onChange={handleChange}
                placeholder="Enter password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[12px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                type="button"
                onClick={() => handleUserType("Staff")}
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-gray-500 border border-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in as Staff
              </button>
              <button
                type="button"
                onClick={() => handleUserType("Student")}
                className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold text-gray-500 border border-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in as Student
              </button>
            </div>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link href="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
