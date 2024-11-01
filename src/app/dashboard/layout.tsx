import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <section>
          <Sidebar />
          <main className="absolute left-[228px] top-16 px-6 flex-1 overflow-auto">
            {children}
          </main>
        </section>
      </div>
    </div>
  )
}