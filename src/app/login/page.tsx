import { redirect } from "next/navigation";
import { signIn, providerMap } from "@/app/auth";
import { AuthError } from "next-auth";

const SIGNIN_ERROR_URL = "/error";

export default async function Login(props: {

  searchParams: { callbackUrl: string | undefined };
}) {

    console.log(providerMap.map(p => console.log(p)))
  return (
    <div className="w-100 h-dvh mx-auto my-auto flex flex-col gap-2 justify-center items-center">
      <form
        className="flex flex-col gap-2 w-4/12 "
        action={async (formData) => {
          "use server";
          try {
            await signIn("credentials", formData);
          } catch (error) {
            if (error instanceof AuthError) {
              return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
            }
            throw error;
          }
        }}
      >
        <label htmlFor="email">
          Email
          <input name="email" id="email" />
        </label>
        <label htmlFor="password">
          Password
          <input name="password" id="password" />
        </label>
        <input type="submit" value="Sign In" />
      </form>
      {Object.values(providerMap).map((provider) => (
        <form
          key={provider.id}
          action={async () => {
            "use server";
            try {
              await signIn(provider.id, {
                redirectTo: props.searchParams?.callbackUrl ?? "",
              });
            } catch (error) {
              // Signin can fail for a number of reasons, such as the user
              // not existing, or the user not having the correct role.
              // In some cases, you may want to redirect to a custom error
              if (error instanceof AuthError) {
                return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
              }

              // Otherwise if a redirects happens Next.js can handle it
              // so you can just re-thrown the error and let Next.js handle it.
              // Docs:
              // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
              throw error;
            }
          }}
        >
          {provider.id === "google" ? (
            <button type="submit">
              <span>Sign in with {provider.name + "ctm"}</span>
            </button>
          ) : (
            <button type="submit">
              <span>Sign in with {provider.name }</span>
            </button>
          )}
        </form>
      ))}
    </div>
  );
}
