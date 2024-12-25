"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignUpProps {
  fullName: string;
  matricNo: string;
  email: string;
  password: string;
  department: string;
  phoneNumber: string;
}

export default function SignUp() {
  const router = useRouter();
  const [state, setState] = useState<SignUpProps>({
    fullName: '',
    email: '',
    matricNo: '',
    department: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<SignUpProps>>({});

  const validate = () => {
    const newErrors: Partial<SignUpProps> = {};

    if (!state.fullName) newErrors.fullName = "First name is required";
    if (!state.matricNo) newErrors.matricNo = "Matriculation number is required";
    if (!state.department) newErrors.department = "Department is required";
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email)) newErrors.email = "Valid email is required";
    if (!state.password || state.password.length < 8) newErrors.password = "Password must be at least 6 characters";
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
    <div className="bg-gray-50 px-4 py-6 md:py-10">
      <div className="bg-white rounded-2xl shadow-2xl max-w-xl mx-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                href="/signin"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* First Name */}
                <div className="relative mb-6 w-full">
                  <label htmlFor="fullname" className="block text-sm mb-2">
                    Full Name <span className="text-[#F24822]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={state.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="py-2 md:py-3 px-2 md:px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.fullName && <p className="absolute text-xs text-red-600 mt-1">{errors.fullName}</p>}
                </div>


                <div className="flex flex-col md:flex-row sm:gap-4">
                  {/* Matriculation Number */}
                  <div className="relative mb-6 w-full">
                    <label htmlFor="matricNo" className="block text-sm mb-2">
                      Matriculation Number <span className="text-[#F24822]">*</span>
                    </label>
                    <input
                      type="text"
                      id="matricNo"
                      name="matricNo"
                      value={state.matricNo}
                      onChange={handleChange}
                      placeholder="Enter matric. no."
                      className="py-2 md:py-3 px-2 md:px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.matricNo && <p className="absolute text-xs text-red-600 mt-1">{errors.matricNo}</p>}
                  </div>

                  {/* Email */}
                  <div className="relative mb-6 w-full">
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email Address <span className="text-[#F24822]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="py-2 md:py-3 px-2 md:px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.email && <p className="absolute text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone Number */}
                <div className="relative mb-6 w-full">
                  <label htmlFor="phoneNumber" className="block text-sm mb-2">
                    Phone Number <span className="text-[#F24822]">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                      <p className="text-sm">+234 </p>
                    </div>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      value={state.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter 10-digit phone number"
                      className="w-full pl-[4rem] pr-2 md:pr-3 py-2 md:py-3 border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  {errors.phoneNumber && <span className="absolute text-xs text-red-600 mt-1">{errors.phoneNumber}</span>}
                </div>

                {/* Department */}
                <div className="relative mb-6 w-full">
                  <label htmlFor="department" className="block text-sm mb-2">
                    Department <span className="text-[#F24822]">*</span>
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={state.department}
                    onChange={handleChange}
                    placeholder="Select Department"
                    className="py-2 md:py-3 px-2 md:px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.department && <p className="absolute text-xs text-red-600 mt-1">{errors.department}</p>}
                </div>

                {/* Password */}
                <div className="relative mb-6">
                  <label htmlFor="password" className="block text-sm mb-2">
                    Password <span className="text-[#F24822]">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Enter at least 6 characters"
                    className="py-2 md:py-3 px-2 md:px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.password && <p className="absolute text-xs text-red-600 mt-1">{errors.password}</p>}
                </div>

                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 border-gray-400 rounded text-blue-600 focus:ring-blue-500 "
                    />
                  </div>
                  <div className="ml-2">
                    <label htmlFor="remember-me" className="text-sm">
                      I accept the <Link className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium" href="#">Terms and Conditions</Link>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm font-medium rounded-lg border border-gray-200 bg-blue-500 text-white"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
