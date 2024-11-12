import { DeviceTabletIcon } from "@heroicons/react/24/outline";

export default function Banner() {
  return (
    <div>
      <div className="bg-indigo-500 text-white mb-4 p-4 lg:p-8 rounded-lg shadow-lg max-h-[300px] flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold">Stay updated with the latest news and resources</h1>
          <p className="text-indigo-100 mt-2 tracking-[1px]">Department of Electrical and Electronics Engineering</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex bg-white text-black px-6 py-3 rounded-lg shadow transition">
            <div className="w-5 h-5 mr-2">
              <DeviceTabletIcon />
            </div>
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
