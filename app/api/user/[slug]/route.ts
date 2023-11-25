import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request,{params}:{params:{slug:string}}) {
  console.log(params.slug);
  
  if (params.slug === "add") {
    try {
      // console.log(req.json);
      const { username, email , role ,active } = await req.json();
      const newUser = await prisma.user.create({
        data: {
          name:username,email,role,active
        }
      })
      return NextResponse.json( { status: 200})
  
    } catch(error) {
      //插入不成功放回状态500
      return NextResponse.json({ message: 'Something went wrong!'}, { status: 500 })
    }
  }
  else if (params.slug === "delete") {
    try {
      // console.log(req.json);
      const { id } = await req.json();

      const deleteUser = await prisma.user.delete({
        where: {
          id: id,
        },
      })

      return NextResponse.json( { status: 200})
  
    } catch(error) {
      //删除不成功放回状态500
      return NextResponse.json({ message: 'Something went wrong!'}, { status: 500 })
    }
  }
  else if (params.slug === "update") {
    try {
      // console.log(req.json);
      const { id, username, email , role ,active } = await req.json();

      const updateUser = await prisma.user.update({
        where: {
          id: id,
        },
        data: {
          name:username,email,role,active
        },
      })

      return NextResponse.json( { status: 200})
  
    } catch(error) {
      //删除不成功放回状态500
      return NextResponse.json({ message: 'Something went wrong!'}, { status: 500 })
    }
  }


}