import Banner from "@/components/dashboard/common/banner";
import Navbar from "@/components/dashboard/common/navbar";
import Sidebar from "@/components/dashboard/common/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" relative h-screen">
      <Sidebar />
      <main className="absolute lg:left-[260px]">
        <div className="bg-gray-100 p-2 md:p-4">
          <Navbar />
          <Banner />
          {children}
        </div>
      </main>
    </div>
  )
}