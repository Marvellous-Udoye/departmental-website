"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignInProps {
  matricNo: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [state, setState] = useState<SignInProps>({
    matricNo: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignInProps>>({});

  const validate = () => {
    const newErrors: Partial<SignInProps> = {};

    if (!state.matricNo)
      newErrors.matricNo = "Matriculation number is required";
    if (!state.password || state.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

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
    router.push("/dashboard");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSignIn();
    }
  };

  return (
    <div className="bg-gray-50 h-[100vh] grid place-items-center px-4">
      <div className="bg-white">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-2/3"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Meraki UI
                </h2>

                <p className="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <Image
                    className="w-auto h-7 sm:h-8"
                    src="https://merakiui.com/images/logo.svg"
                    alt=""
                  />
                </div>

                <p className="mt-3 text-gray-500">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Matric. Number <span className="text-[#F24822]">*</span>
                    </label>
                    <input
                      type="text"
                      id="matricNo"
                      name="matricNo"
                      value={state.matricNo}
                      onChange={handleChange}
                      placeholder="Enter matriculation number"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.matricNo && (
                      <p className="absolute text-xs text-red-600 mt-1">
                        {errors.matricNo}
                      </p>
                    )}
                  </div>

                  <div className="relative mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600"
                      >
                        Password <span className="text-[#F24822]">*</span>
                      </label>
                      <a
                        href="#"
                        className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={state.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.password && (
                      <p className="absolute text-xs text-red-600 mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
