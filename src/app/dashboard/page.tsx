
export default function Dashboard() {
  return (
    <div>
      {/* <section className="pt-8 flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex flex-col gap-6 bg-card p-5 rounded-lg shadow-md max-w-[352px] w-full">
          <div className="flex flex-col">
            <span className="text-muted-foreground pb-3 text-base font-bold leading-6">Latest news</span>
            <div>
              <p className="font-semibold text-lg leading-7 text-card-foreground">Get notified of the latest news</p>
              <span className="text-muted-foreground font-medium text-sm leading-5">type</span>
            </div>
          </div>
          <button className="py-2 px-5 bg-indigo-500 text-white rounded-md hover:bg-primary/80 transition-colors">
            Details
          </button>
        </div>

        <div className="flex flex-col gap-6 bg-card p-5 rounded-lg shadow-md max-w-[352px] w-full">
          <div className="flex flex-col">
            <span className="text-muted-foreground pb-3 text-base font-bold leading-6">Latest news</span>
            <div>
              <p className="font-semibold text-lg leading-7 text-card-foreground">Get notified of the latest news</p>
              <span className="text-muted-foreground font-medium text-sm leading-5">type</span>
            </div>
          </div>
          <button className="py-2 px-5 bg-indigo-500 text-white rounded-md hover:bg-primary/80 transition-colors">
            Details
          </button>
        </div>

        <div className="flex flex-col gap-6 bg-card p-5 rounded-lg shadow-md max-w-[352px] w-full">
          <div className="flex flex-col">
            <span className="text-muted-foreground pb-3 text-base font-bold leading-6">Latest news</span>
            <div>
              <p className="font-semibold text-lg leading-7 text-card-foreground">Get notified of the latest news</p>
              <span className="text-muted-foreground font-medium text-sm leading-5">type</span>
            </div>
          </div>
          <button className="py-2 px-5 bg-indigo-500 text-white rounded-md hover:bg-primary/80 transition-colors">
            Details
          </button>
        </div>
      </section> */}

      <section className="mb-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute -top-8 -right-8 bg-blue-100 p-4 rounded-full">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor">...</svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Recent Documents</h4>
            <p className="text-sm text-gray-500 mb-3">Access your most recent or frequently used documents here.</p>
            <button className="text-blue-500 text-sm font-semibold transition">View Documents</button>
          </div>


          <div className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute -top-8 -right-8 bg-green-100 p-4 rounded-full">
              <svg className="w-6 h-6 text-green-500" fill="currentColor">...</svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Notifications Summary</h4>
            <p className="text-sm text-gray-500 mb-3">Stay informed with the latest notifications and alerts.</p>
            <button className="text-green-500 text-sm font-semibold transition">View Notifications</button>
          </div>


          <div className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute -top-8 -right-8 bg-yellow-100 p-4 rounded-full">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor">...</svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Pending Tasks</h4>
            <p className="text-sm text-gray-500 mb-3">Check your pending tasks and reminders here.</p>
            <button className="text-yellow-500 text-sm font-semibold transition">View Tasks</button>
          </div>


          <div className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute -top-8 -right-8 bg-purple-100 p-4 rounded-full">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor">...</svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Profile Completion Status</h4>
            <p className="text-sm text-gray-500 mb-3">Complete your profile to enhance your experience.</p>
            <button className="text-purple-500 text-sm font-semibold transition">Complete Profile</button>
          </div>


          <div className="bg-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden">
            <div className="absolute -top-8 -right-8 bg-red-100 p-4 rounded-full">
              <svg className="w-6 h-6 text-red-500" fill="currentColor">...</svg>
            </div>
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <p className="text-sm text-gray-500 mb-3">Navigate quickly to important pages and contact support.</p>
            <button className="text-red-500 text-sm font-semibold transition">Explore Links</button>
          </div>
        </div>
      </section>

      <section className="mb-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold text-primary mb-4">Resources</h3>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card text-card-foreground p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-bold mb-2">BUESA Library</h4>
              <p className="text-muted-foreground">Description of the resource. Access valuable materials and tools.</p>
            </div>
            <div className="bg-card text-card-foreground p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-bold mb-2">Kortext</h4>
              <p className="text-muted-foreground">Description of the resource. Access valuable materials and tools.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card text-card-foreground p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-bold mb-2">BUSA Letters</h4>
              <p className="text-muted-foreground">Description of the resource. Access valuable materials and tools.</p>
            </div>
            <div className="bg-card text-card-foreground p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h4 className="font-bold mb-2">Latest News</h4>
              <p className="text-muted-foreground">Description of the resource. Access valuable materials and tools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl">
        <h3 className="text-xl font-semibold text-primary mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-card p-4 rounded-lg shadow text-center">
            <img src="https://placehold.co/100x100" alt="Team Member 1" className="mx-auto rounded-full mb-2"></img>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-sm">Position</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow text-center">
            <img src="https://placehold.co/100x100" alt="Team Member 2" className="mx-auto rounded-full mb-2"></img>
            <h4 className="font-semibold">Jane Smith</h4>
            <p className="text-sm">Position</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow text-center">
            <img src="https://placehold.co/100x100" alt="Team Member 3" className="mx-auto rounded-full mb-2"></img>
            <h4 className="font-semibold">Emily Johnson</h4>
            <p className="text-sm">Position</p>
          </div>
          <div className="bg-card p-4 rounded-lg shadow text-center">
            <img src="https://placehold.co/100x100" alt="Team Member 4" className="mx-auto rounded-full mb-2"></img>
            <h4 className="font-semibold">Michael Brown</h4>
            <p className="text-sm">Position</p>
          </div>
        </div>
      </section>

    </div>
  )
}