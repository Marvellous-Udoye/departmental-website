"use client";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Select from "react-select";

const departmentOptions = [
  { value: "Biomedical Engineering", label: "Biomedical Engineering" },
  { value: "Civil Engineering", label: "Civil Engineering" },
  { value: "Computer Engineering", label: "Computer Engineering" },
  { value: "Electrical Engineering", label: "Electrical Engineering" },
  { value: "Mechanical Engineering", label: "Mechanical Engineering" },
  { value: "Mechatronics Engineering", label: "Mechatronics Engineering" },
];

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
    fullName: "",
    email: "",
    matricNo: "",
    department: "",
    phoneNumber: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignUpProps>>({});

  const validate = () => {
    const newErrors: Partial<SignUpProps> = {};

    if (!state.fullName) newErrors.fullName = "Full name is required";
    if (!state.matricNo)
      newErrors.matricNo = "Matriculation number is required";
    if (!state.department) newErrors.department = "Department is required";
    if (!state.email || !/\S+@\S+\.\S+/.test(state.email))
      newErrors.email = "Valid email is required";
    if (!state.password || state.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!state.phoneNumber || !/^\d+$/.test(state.phoneNumber))
      newErrors.phoneNumber = "Valid phone number is required";

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
    selectedOption: { value: string; label: string } | null
  ) => {
    setState((prevState) => ({
      ...prevState,
      department: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSignUp = () => {
    router.push("/dashboard");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      handleSignUp();
    }
  };

  return (
    <section className="bg-white">
      <div className="flex flex-col-reverse lg:flex-row justify-center min-h-screen">
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover"
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

        <div className="flex items-center w-full max-w-full lg:w-3/5 p-6 lg:px-12">
          <div className="w-full">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <HomeIcon className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />
              </div>
              <p className="mt-3 text-sm md:text-lg font-medium text-gray-500">
                Sign up to create your account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            >
              <div>
                <label className="block mb-1 text-sm text-gray-600">
                  Full Name <span className="text-[#F24822]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={state.fullName}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Matric. Number <span className="text-[#F24822]">*</span>
                </label>
                <input
                  type="text"
                  name="matricNo"
                  placeholder="20 ▪ ▪ / ▪ ▪ ▪ ▪ ▪"
                  value={state.matricNo}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.matricNo && (
                  <p className="text-red-500 text-sm">{errors.matricNo}</p>
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
                  onChange={handleSelectChange}
                  className="block w-full text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.department && (
                  <p className="text-red-500 text-sm">{errors.department}</p>
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600">
                  Password <span className="text-[#F24822]">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={state.password}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full md:col-span-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Sign Up
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
