import { cookies } from "next/headers";
import { TabBar } from "@/components";

export const metadata = {
  title: "Cookies page",
  description: "SEO Title",
};
export default async function CookiesPage() {
    const cookiesStore = await cookies();
    const selectedTab =  cookiesStore.get("selectedTab")?.value ?? "1";
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div>
        <span className="text-3xl">Tabs</span>

        <TabBar currentTab={parseInt(selectedTab)}  />
      </div>
    </div>
  );
}
