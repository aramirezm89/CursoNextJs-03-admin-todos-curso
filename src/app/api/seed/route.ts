import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'


export async function GET() { 

await prisma.todo.deleteMany({}) // Clear existing data delete * from todos


// Seed the database with initial data  
const todo = await prisma.todo.createMany({
  data:[
    { description: 'Piedra del alma.', completed: false },
    { description: 'Piedra del poder', completed: true },
    { description: 'Piedra del tiempo', completed: false },
    { description: 'Piedra del espacio', completed: true },
    { description: 'Piedra de la realidad', completed: false }
  ]
  
 })

 return NextResponse.json({ message: 'Seeded successfully', todo: todo }, { status: 200 })

}