/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import * as yup  from 'yup';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const skip = searchParams.get("skip") ?? "0";
  const take = searchParams.get("take") ?? "10"; // Default to 10 if not provided

  if (isNaN(Number(skip)) || isNaN(Number(take))) {
    return NextResponse.json(
      { error: "Invalid skip or take parameter" },
      { status: 400 }
    );
  }
  const todosList = await prisma.todo.findMany({
    skip: Number(skip),
    take: Number(take),
    orderBy: [{ cretedAt: "desc" }],
  });

  return NextResponse.json(todosList);
}


const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.bool().optional().default(false),
});

export async function POST(req: Request) {
try{
    const data = await postSchema.validate(await req.json());

    const todoInserted = await prisma.todo.create({
      data: data,
    });
  
    return NextResponse.json({ todoInserted }, { status: 200 });
} catch (err : any) {
    return NextResponse.json(err.errors,{status: 400});
}
}


export async function DELETE() {

  const deletedTodos = await prisma.todo.deleteMany({where: { completed: true }});
  return NextResponse.json({ deletedTodos }, { status: 200 });

}