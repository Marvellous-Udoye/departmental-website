export default function DocumentForm() {
  return (
    <div className="w-full py-10">
      <div className="bg-white rounded-xl border sm:p-7">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Add new document
          </h2>
          <p className="text-sm text-gray-600">
            Fill in the details of the documents
          </p>
        </div>

        <form>
          {/* <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <label
              htmlFor="personal-info"
              className="inline-block text-sm font-medium"
            >
              Personal Information
            </label>

            <div className="mt-2 space-y-3">
              <input
                id="personal-info"
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Student/Staff ID"
              />
              <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Department Email"
              />
            </div>
          </div> */}

          {/* Document Details Section */}
          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <label
              htmlFor="document-details"
              className="inline-block text-lg font-bold"
            >
              Document Details
            </label>

            <div className="mt-2 space-y-3">
              <select
                id="document-details"
                className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
              >
                <option value="">Select Document Type</option>
                <option value="Course Registration Form">
                  Course Registration Form
                </option>
                <option value="Tuition Fee Receipt">Tuition Fee Receipt</option>
                <option value="Hostel Allocation Letter">
                  Hostel Allocation Letter
                </option>
                <option value="Medical Clearance Form">
                  Medical Clearance Form
                </option>
                <option value="Examination Result Slip">
                  Examination Result Slip
                </option>
                <option value="Student ID Card">Student ID Card</option>
                <option value="Certificate of Attendance">
                  Certificate of Attendance
                </option>
                <option value="Financial Status">Financial Status</option>
              </select>
              {/* <input
                type="text"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Purpose of Request"
              /> */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500">
                  <option value="">All Categories</option>
                  <option value="Academics">Academics</option>
                  <option value="Finance">Finance</option>
                  <option value="Accommodation">Accommodation</option>
                  <option value="Health">Health</option>
                  <option value="Library">Library</option>
                  <option value="Administration">Administration</option>
                </select>
                <label
                  htmlFor="deadline"
                  className="inline-block text-lg font-medium mt-1.5 mb-1.5"
                >
                  Deadline:
                </label>
                <input type="date" name="" id="" />
                {/* <select className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500">
                  <option value="">All Status</option>
                  <option value="2024"></option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select> */}
              </div>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
            <label
              htmlFor="additional-info"
              className="inline-block text-sm font-medium"
            >
              Additional Information
            </label>

            <div className="mt-2 space-y-3">
              <textarea
                id="additional-info"
                className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white placeholder-gray-500"
                placeholder="Any additional details or special requirements"
                rows={4}
              />
            </div>
          </div>
        </form>

        <div className="mt-5 flex justify-end gap-x-2">
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
          >
            Clear Form
          </button>
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
