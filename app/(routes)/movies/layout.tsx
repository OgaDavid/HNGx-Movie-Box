import Sidebar from "@/app/(routes)/movies/components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="flex justify-center pt-4">
        <main className="min-[1250px]:ml-[226px]">{children}</main>
      </div>
    </>
  );
}
