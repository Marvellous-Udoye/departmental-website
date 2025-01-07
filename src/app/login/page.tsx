"use client";

import { EyeIcon, EyeSlashIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface SignInProps {
  matricno: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [state, setState] = useState<SignInProps>({
    matricno: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignInProps>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Partial<SignInProps> = {};

    if (!state.matricno)
      newErrors.matricno = "Matriculation number is required";
    if (!state.password || state.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

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

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://departmental-website-api.onrender.com/token/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        setErrors({ password: errorData.message || "Login failed" });
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSignIn();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

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
                  manage your profile. Securely verify your account and start
                  exploring the latest updates, materials, and more within your
                  department.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center max-w-xl w-full px-4 mx-auto">
            <div className="flex-1">
              <div className="text-center">
                <div className="flex justify-center mx-auto">
                  <HomeIcon className="size-10 text-indigo-600" />
                </div>

                <p className="mt-3 text-lg font-medium text-gray-500">
                  Login to access your account
                </p>
              </div>

              <div className="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="matricno"
                      className="block mb-2 text-sm text-gray-600"
                    >
                      Matric. Number <span className="text-[#F24822]">*</span>
                    </label>
                    <input
                      type="text"
                      id="matricno"
                      name="matricno"
                      value={state.matricno}
                      onChange={handleChange}
                      placeholder="20 ▪ ▪ / ▪ ▪ ▪ ▪ ▪"
                      className="block w-full px-4 py-2 mt-2 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    {errors.matricno && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.matricno}
                      </p>
                    )}
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
                        className="text-sm text-blue-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
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
                    {errors.password && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
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
                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
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
    </div>
  );
}
