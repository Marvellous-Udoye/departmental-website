import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <Sidebar />
      <main className="absolute lg:left-[225px] max-w-[1124px] w-full">
        <Navbar />
        <div>
          {children}
        </div>
      </main>
    </div>
  )
}