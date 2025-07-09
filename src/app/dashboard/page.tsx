import { redirect } from "next/navigation";
import { auth } from "../auth";
import WidgetItem from "@/components/WidgetItem";

/* const todo = {
  description: "Priedra del vacio",
  createdAt: new Date(Date.now()).toLocaleDateString(),
  completed: true,
}; */
export default async function DashboardPage() {
  const session = await auth();
  console.log("session", session);
  if (!session) {
  console.log("No session found, redirecting to signin");
   redirect("/api/auth/signin");
  }
  const { user } = session;
  return (
    <div className="grid gap-6 grid-cols-1">
      {/* TODO: src/components <WidgetItem /> */}
      <WidgetItem>
       {
       <em>{JSON.stringify(user, null, 2)}</em>
       }
      </WidgetItem>
      {/* TODO: Fin <WidgetItem /> */}
    </div>
  );
}
