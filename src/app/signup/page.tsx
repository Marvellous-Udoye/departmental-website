"use client";

import { BASE_URL } from "@/utils/constants";
import { EyeIcon, EyeSlashIcon, HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Select from "react-select";

interface SignUpProps {
  username: string;
  email: string;
  matricno: string;
  department: string;
  password: string;
  level: string;
}

const levelOptions = [
  { value: "100", label: "100 Level" },
  { value: "200", label: "200 Level" },
  { value: "300", label: "300 Level" },
  { value: "400", label: "400 Level" },
  { value: "500", label: "500 Level" },
];

const departmentOptions = [
  { value: "Biomedical Engineering", label: "Biomedical Engineering" },
  { value: "Civil Engineering", label: "Civil Engineering" },
  { value: "Computer Engineering", label: "Computer Engineering" },
  { value: "Electrical Engineering", label: "Electrical Engineering" },
  { value: "Mechanical Engineering", label: "Mechanical Engineering" },
  { value: "Mechatronics Engineering", label: "Mechatronics Engineering" },
];

export default function SignUp() {
  const [state, setState] = useState<SignUpProps>({
    username: "",
    email: "",
    matricno: "",
    department: "",
    password: "",
    level: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpProps>>({});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [signupError, setSignupError] = useState<string>("");
  const router = useRouter();

  const validate = () => {
    const newErrors: Partial<SignUpProps> = {};

    if (!state.username) newErrors.username = "Full name is required";
    if (!state.matricno)
      newErrors.matricno = "Matriculation number is required";
    if (!state.department) newErrors.department = "Department is required";
    if (!state.level) newErrors.level = "Level is required";
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email))
      newErrors.email = "Valid email is required";
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

  const handleSelectChange = (
    selectedOption: { value: string; label: string } | null,
    actionMeta: { name?: string }
  ) => {
    const fieldName = actionMeta.name || "";
    setState((prevState) => ({
      ...prevState,
      [fieldName]: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSignUp = async () => {
    setLoading(true);
    setSignupError("");

    try {
      const response = await fetch(`${BASE_URL}/api/user/signup/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Signup successful:", data);
        setState({
          username: "",
          email: "",
          matricno: "",
          department: "",
          password: "",
          level: "",
        });
        router.push("/dashboard");
      } else {
        const errorData = await response.json();
        setSignupError(errorData.message || "Signup failed. Please try again.");
      }
    } catch {
      setSignupError(
        "An error occurred during signup. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      handleSignUp();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row justify-center max-lg:py-16 min-h-screen">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="flex items-center h-full px-8 md:px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-xl md:text-3xl font-bold text-white">
                Sign Up
              </h2>
              <p className="max-w-xl mt-3 text-gray-300 text-sm md:text-base">
                Join our departmental website today! Sign up to manage your
                personal profile, access exclusive resources, and stay updated
                with all departmental activities.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center max-w-xl w-full px-4 mx-auto">
          <div className="w-full">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <HomeIcon className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />
              </div>
              <p className="mt-3 text-lg font-medium text-gray-500">
                Sign up to create your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4 mt-6"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Full Name <span className="text-[#F24822]">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="John Doe"
                  value={state.username}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">{errors.username}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Matric. Number <span className="text-[#F24822]">*</span>
                </label>
                <input
                  type="text"
                  name="matricno"
                  placeholder="20 ▪ ▪ / ▪ ▪ ▪ ▪ ▪"
                  value={state.matricno}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
                {errors.matricno && (
                  <p className="text-red-500 text-sm">{errors.matricno}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Department <span className="text-[#F24822]">*</span>
                </label>
                <Select
                  name="department"
                  options={departmentOptions}
                  value={departmentOptions.find(
                    (option) => option.value === state.department
                  )}
                  onChange={(option) =>
                    handleSelectChange(option, { name: "department" })
                  }
                  className="block w-full text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
                {errors.department && (
                  <p className="text-red-500 text-sm">{errors.department}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Level <span className="text-[#F24822]">*</span>
                </label>
                <Select
                  name="level"
                  options={levelOptions}
                  value={levelOptions.find(
                    (option) => option.value === state.level
                  )}
                  onChange={(option) =>
                    handleSelectChange(option, { name: "level" })
                  }
                  className="block w-full text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
                {errors.level && (
                  <p className="text-red-500 text-sm">{errors.level}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Email Address <span className="text-[#F24822]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  value={state.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
                {errors.email && (
                  <p className="text-[#F24822] text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Password <span className="text-[#F24822]">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={state.password}
                    onChange={handleChange}
                    className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
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
                  <p className="text-[#F24822] text-sm">{errors.password}</p>
                )}
              </div>

              {signupError && (
                <div className="md:col-span-2">
                  <p className="text-red-500 text-sm text-center">
                    {signupError}
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full md:col-span-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Signup"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
