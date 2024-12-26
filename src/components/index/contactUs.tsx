export default function ContactUs() {
  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="max-w-2xl">
            <p className="font-medium text-blue-500">Get in Touch</p>
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-4xl">
              Contact the Department
            </h1>
            <p className="mt-3 text-gray-500">
              Have questions about our programs, admissions, or events? We’d
              love to hear from you. Reach out using the form below or visit us
              at our department office.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Email
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Send us an email for general inquiries or admissions support.
                </p>
                <p className="mt-2 text-sm text-blue-500">dept@gmail.com</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Visit Us
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Find us on campus in the College of Enginering Building.
                </p>
                <p className="mt-2 text-sm text-blue-500">
                  Opposite COLENG Gazebo, Bells University, Ota
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Office Hours
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Monday - Friday: 9 AM - 5 PM Saturday: By Appointment Only
                </p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-base font-medium text-gray-800">
                  Call Us
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Speak to a department representative.
                </p>
                <p className="mt-2 text-sm text-blue-500">+224 907 654 3210</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 md:p-8">
              <form>
                <div className="-mx-2 md:items-center md:flex">
                  <div className="flex-1 px-2">
                    <label className="block mb-2 text-sm text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 px-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@example.com"
                      className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-48 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 mt-4 text-sm font-medium tracking-wide text-white capitalize bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
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
