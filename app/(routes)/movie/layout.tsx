import SearchInput from "@/components/Navbar/searchInput";
import Sidebar from "./components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="flex justify-center pt-4">
        <main className="ml-[226px]">{children}</main>
      </div>
    </>
  );
}
