import { prisma } from "@/libs/prisma";
import { Todos } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {



  const todo: Todos[] = await prisma.todos.findMany();

  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/api/auth/signin')
  }
  console.log(session?.user)

  return (
    <div>
      <h1>
        {todo.map((item, index) => (
          <div className="" key={index}>
            <h1>{item.id}</h1>
            <h1>{item.complete.toString()}</h1>
            <h1>{item.createdAt.toString()}</h1>
            <h1>{item.description}</h1>
            <h1>{item.updatedAt.toString()}</h1>

          </div>
        ))}

      </h1>
      {/* <pre>{JSON.stringify(todo, null, 2)}</pre> */}
    </div>
  );
}
