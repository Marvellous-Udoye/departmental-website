"use client";

import {
  ClockIcon,
  DocumentMagnifyingGlassIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface FormValues {
  fullName: string;
  email: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export default function ContactUs() {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formValues.fullName.trim()) {
      errors.fullName = "Full Name is required.";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email Address is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid email address.";
    }
    if (!formValues.message.trim()) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFormValues({ fullName: "", email: "", message: "" });
    } else {
      setFormErrors(errors);
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      <section id="contact" className="bg-white">
        <div className="px-4 sm:px-8 py-12 mx-auto max-w-7xl">
          <div>
            <p className="font-medium text-blue-500">Get in Touch</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-4xl">
              Contact the Department
            </h1>
            <p className="mt-3 text-gray-500">
              Have questions about our programs, admissions, or events?
              We&apos;d love to hear from you. Reach out using the form below or
              visit us at our department office.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Email */}
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Send us an email for general inquiries or admissions support.
                </p>
                <p className="mt-2 text-sm text-blue-500">dept@gmail.com</p>
              </div>

              {/* Visit Us */}
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <MapPinIcon className="w-5 h-5" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">
                  Visit Us
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Find us on campus in the College of Engineering Building.
                </p>
                <p className="mt-2 text-sm text-blue-500">
                  Opposite COLENG Gazebo, Bells University, Ota
                </p>
              </div>

              {/* Office Hours */}
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <ClockIcon className="w-5 h-5" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">
                  Office Hours
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Monday - Friday: 9 AM - 5 PM Saturday: By Appointment Only
                </p>
              </div>

              {/* Call Us */}
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <PhoneIcon className="w-5 h-5" />
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">
                  Call Us
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Speak to a department representative.
                </p>
                <p className="mt-2 text-sm text-blue-500">+224 907 654 3210</p>
              </div>
            </div>

            <div className="px-2 py-4 rounded-lg bg-gray-50 md:p-8">
              {isSubmitted && (
                <div className="mb-4 text-green-600">
                  Your message has been sent successfully!
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label
                      className="block mb-2 text-sm text-gray-600"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="John Doe"
                      value={formValues.fullName}
                      onChange={handleChange}
                      className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.fullName
                        ? "border-red-500"
                        : "border-gray-200"
                        } rounded-lg focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    />
                    {formErrors.fullName && (
                      <p className="mt-1 text-xs text-red-500">
                        {formErrors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label
                      className="block mb-2 text-sm text-gray-600"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={formValues.email}
                      onChange={handleChange}
                      className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.email ? "border-red-500" : "border-gray-200"
                        } rounded-lg focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label
                    className="block mb-2 text-sm text-gray-600"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    className={`block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${formErrors.message ? "border-red-500" : "border-gray-200"
                      } rounded-lg md:h-48 focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 mt-4 text-sm font-medium tracking-wide text-white capitalize bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
