/* eslint-disable @typescript-eslint/no-explicit-any */
import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";
interface Segments {
  params: Promise<{ id: string }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  return todo;
};


export async function GET(request: NextRequest, { params }: Segments) {
  const { id } = await params;

  const todo = await getTodo(id);

  const res = todo ?? { error: `no se encontro el todo con id: ${id}` };

  return NextResponse.json(res, { status: 400 });
}

const putSchema = yup.object({
  description: yup.string().optional(),
  completed: yup.bool().optional().default(false),
});



export async function PUT(request: Request, { params }: Segments) {
  const { id } = await params;

  const todo = await getTodo(id);
  if (!todo) {
    return NextResponse.json({ error: `no se encontro el todo con id: ${id}` });
  }

  try {
    const { description, completed } = await putSchema.validate(
      await request.json()
    );
    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { description, completed },
    });

    return NextResponse.json(updateTodo, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json({ error: err.errors }, { status: 400 });
  }
}
