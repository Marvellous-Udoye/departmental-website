"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignInProps {
  matricNo: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();
  const [state, setState] = useState<SignInProps>({
    matricNo: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignInProps>>({});

  const validate = () => {
    const newErrors: Partial<SignInProps> = {};

    if (!state.matricNo) newErrors.matricNo = "Matriculation number is required";
    if (!state.password || state.password.length < 6) newErrors.password = "Password must be at least 6 characters";

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

  const handleSignIn = () => {
    router.push('/dashboard');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSignIn();
    }
  };

  return (
    <div className="bg-gray-50 h-[100vh] grid place-items-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign in</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                href="/signup"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Matric No Input */}
                <div className="relative mb-6">
                  <label htmlFor="matricNo" className="block text-sm mb-2">
                    Matric. Number <span className="text-[#F24822]">*</span>
                  </label>
                  <input
                    type="text"
                    id="matricNo"
                    name="matricNo"
                    value={state.matricNo}
                    onChange={handleChange}
                    placeholder="Enter matriculation number"
                    className="py-2 md:py-3 px-2 md:px-4 block w-full border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.matricNo && <p className="absolute text-xs text-red-600 mt-1">{errors.matricNo}</p>}
                </div>

                {/* Password Input */}
                <div className="relative mb-6">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2">
                      Password <span className="text-[#F24822]">*</span>
                    </label>
                    <Link
                      className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium"
                      href="#"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                    placeholder="Enter password"
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
                      className="shrink-0 border-gray-400 rounded text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-2">
                    <label htmlFor="remember-me" className="text-sm">
                      Remember me
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
