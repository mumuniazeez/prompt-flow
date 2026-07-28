import Sidebar from "@/components/app/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden h-screen">
      <div className="flex">
            <Sidebar />
      
      </div>
      {children}
    </div>
  );
}
