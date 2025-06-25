import WidgetItem from "@/components/WidgetItem";


const todo = {
    description: 'Priedra del vacio',
    createdAt : new Date(Date.now()).toLocaleDateString(),
    completed: true
}
export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* TODO: src/components <WidgetItem /> */}
        <WidgetItem {...todo}/>
      {/* TODO: Fin <WidgetItem /> */}
    </div>
  );
}