

interface Props{
    description?: string;
    completed?: boolean;
    createdAt?: string;
    children?: React.ReactNode;

}
export default function WidgetItem({description,completed,createdAt,children} : Props) {
  return (
    <div className=" ">
      <div className="w-full h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
        <div className="w-full   break-words" >
         {children}
        </div>
      </div>
    </div>
  );
}