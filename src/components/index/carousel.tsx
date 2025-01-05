export default function Carousel() {
  return (
    <div className="px-4 lg:px-8 py-10">
      <div
        data-hs-carousel='{
          "loadingclassNamees": "opacity-0"
        }'
        className="relative"
      >
        <div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-col md:flex-row flex-nowrap transition-transform duration-700">
            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white text-lg font-semibold drop-shadow-lg">
                    Student Resources
                  </span>
                  <span className="block text-white text-xl drop-shadow-lg text-balance">
                    Access course materials, submit documents, and track your
                    academic progress
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Access Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white text-lg font-semibold drop-shadow-lg">
                    Academic Calendar
                  </span>
                  <span className="block text-white text-xl  drop-shadow-lg text-balance">
                    Stay updated with important dates, events, and departmental
                    activities
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      View Calendar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="h-[30rem] md:h-[calc(100vh-106px)] flex flex-col bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                  <span className="block text-white text-lg font-semibold drop-shadow-lg">
                    Research & Resources
                  </span>
                  <span className="block text-white text-xl  drop-shadow-lg text-balance">
                    Access digital libraries, research papers, and academic
                    databases
                  </span>
                  <div className="mt-5">
                    <a
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white border border-transparent text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Explore Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hs-carousel-prev hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              ></path>
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="hs-carousel-next hs-carousel-disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="shrink-0 size-3.5 md:size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
