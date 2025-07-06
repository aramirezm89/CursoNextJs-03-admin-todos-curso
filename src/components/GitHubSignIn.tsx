import { signIn } from "@/app/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github").then(res => console.log(res));
        
      }}
    >
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">Signin with GitHub</button>
    </form>
  );
}
