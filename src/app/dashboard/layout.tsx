import { auth } from "../auth";
import { SidebarComponent } from "@/components";
import TopMenu from "@/components/TopMenu";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    console.log("No session found, redirecting to signin");
    redirect("/api/auth/signin");
  }
  return (
    <>
      {/* TODO: src/components <Sidebar /> */}

      <SidebarComponent />
      {/*TODO: Fin del <Sidebar /> */}

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        {/* TODO: src/components <TopMenu /> */}
        <TopMenu />
        {/* TODO: Fin del <TopMenu /> */}

        <div className="px-6 pt-6">{children}</div>
      </div>
    </>
  );
}
