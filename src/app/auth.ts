import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

import type { DefaultSession } from "next-auth";
import { signInEmailPassword } from "./auth/actions/auth-actions";
import { Provider } from "next-auth/providers";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      roles: string[];
    } & DefaultSession["user"];
  }
}

const providers: Provider[] = [
  Google,
  GitHub,
  Credentials({
    name: "Credentials",

    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {
        label: "Email",
        type: "email",
        placeholder: "Ingresa tu email",
      },
      password: {
        label: "Password",
        type: "password",
        placeholder: "******",
      },
    },
    authorize: async (credentials) => {
      // logic to salt and hash password
      /*     const pwHash = saltAndHashPassword(credentials.password); */

      // logic to verify if the user exists
      const user = signInEmailPassword(
        credentials.email as string,
        credentials.password as string
      );
      if (!user) {
        // No user found, so this is their first attempt to login
        // Optionally, this is also the place you could do a user registration
        throw new Error("Invalid credentials.");
      }

      // return user object with their profile data
      return user;
    },
  }),
];
export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      return true;
    },
    

    async jwt({ token }) {
      const userDb = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
      });

      if (userDb?.isActive === false) {
        throw Error("Usuario no activo");
      }
      token.roles = userDb?.roles;
      token.id = userDb?.id;
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.roles = token.roles as string[];
      return session;
    },
  },
 /*  pages:{
    signIn:'/login'
  } */
});
