import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
  await prisma.user.deleteMany({}); // clear existing data delete *  from users
  await prisma.todo.deleteMany({}); // Clear existing data delete * from todos

  // Seed the database with initial data

  const users = await prisma.user.create({
    data: {
      email: "test1@gmail.com",
      password: bcrypt.hashSync("Ramirez1989", 10),
      roles: ["admin", "client"],
      todos: {
        create: [
          { description: "Piedra del alma.", completed: false },
          { description: "Piedra del poder", completed: true },
          { description: "Piedra del tiempo", completed: false },
          { description: "Piedra del espacio", completed: true },
          { description: "Piedra de la realidad", completed: false },
        ],
      },
    },
  });
  
  return NextResponse.json(
    { message: "Seeded successfully", user: users },
    { status: 200 }
  );
}
