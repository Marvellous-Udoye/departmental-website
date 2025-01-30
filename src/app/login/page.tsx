"use client";

import { BASE_URL } from "@/utils/constants";
import { Dialog, Transition } from "@headlessui/react";
import { EyeIcon, EyeSlashIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";

interface SignInProps {
  username: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [state, setState] = useState<SignInProps>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<SignInProps>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const errorClass = "transition-opacity duration-500 ease-in-out";

  const validate = () => {
    const newErrors: Partial<SignInProps> = {};
    if (!state.username) newErrors.username = "Username is required";
    if (!state.password || state.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    setErrors(newErrors);
    setIsModalOpen(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setLoginError("");
  };

  const handleInputFocus = () => {
    setErrors({});
    setLoginError("");
    setIsModalOpen(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setLoginError("");

    try {
      const response = await fetch(`${BASE_URL}/api/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });

      const data = await response.json();

      if (response.ok && data.access) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        setState({ username: "", password: "" });
        router.push("/dashboard");
      } else {
        setLoginError(data.detail || "Invalid credentials. Please try again.");
      }
    } catch {
      setLoginError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) handleSignIn();
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="bg-gray-50 h-[100vh] grid place-items-center">
      <div className="bg-white w-full">
        <div className="flex justify-center h-screen">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Login
                </h2>
                <p className="max-w-xl mt-3 text-gray-300">
                  Welcome back! Log in to access your departmental resources and
                  manage your profile.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center max-w-xl w-full px-4 mx-auto">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <HomeIcon className="size-12 text-indigo-600" />
                </div>
                <p className="mt-3 text-lg font-medium text-gray-500">
                  Login to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Username <span className="text-[#F24822]">*</span>
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={state.username}
                      onChange={handleChange}
                      onFocus={handleInputFocus}
                      placeholder="John Doe"
                      className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between mb-2">
                      <label
                        htmlFor="password"
                        className="text-sm text-gray-600"
                      >
                        Password <span className="text-[#F24822]">*</span>
                      </label>
                      <a
                        href="#"
                        className="text-sm text-blue-400 hover:text-blue-500 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={state.password}
                        onChange={handleChange}
                        onFocus={handleInputFocus}
                        placeholder="Enter password"
                        className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 focus:outline-none"
                        aria-label="Toggle password visibility"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {loginError && (
                    <div className="mt-4">
                      <p
                        className={`text-sm text-[#F24822] text-center ${errorClass} opacity-100`}
                      >
                        {loginError}
                      </p>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-sm text-center text-gray-500">
                  Don&apos;t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="text-blue-500 hover:underline"
                  >
                    Sign up
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Requirements
                  </Dialog.Title>
                  <div className="mt-2">
                    {Object.values(errors).map((error, index) => (
                      <p key={index} className="text-sm text-red-500">
                        - {error}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
