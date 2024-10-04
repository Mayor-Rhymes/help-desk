import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials";
import { hash } from "@node-rs/argon2";
import prisma from "@/utils/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        username: {},
        email: {},
        password: {},
      }
    })
  ]
});
