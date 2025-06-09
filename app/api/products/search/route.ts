import { prisma } from "@/prisma/prisma-client"
import { Prisma } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams.get("query"))

  const query = req.nextUrl.searchParams.get("query") || ""

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query, // includes name
        mode: Prisma.QueryMode.insensitive, // чувствительность к регистру
      },
    },
    take: 5,
  })

  return NextResponse.json(products)
}
