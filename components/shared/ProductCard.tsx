import Link from "next/link"
import React from "react"
import { Title } from "./Title"
import { Button } from "../ui"
import { Plus } from "lucide-react"

interface ProductCardProps {
  id: number
  name: string
  price: number
  imageUrl: string
  className?: string
}

export const ProductCard = ({
  id,
  name,
  price,
  imageUrl,
  className,
}: ProductCardProps) => {
  return (
    <div className={className}>
      <Link href="product/1">
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img
            className="w-[215px] h-[215px] object-cover"
            src={imageUrl}
            alt="Logo"
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          чеддер і пармезан, сирний соус, помідори, соус альфредо, цибуля
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mt-1" />
            Додати
          </Button>
        </div>
      </Link>
    </div>
  )
}
