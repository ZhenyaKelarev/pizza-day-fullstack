"use client"

import React, { useEffect, useRef } from "react"
import { Title } from "./Title"
import { ProductCard } from "."
import { useIntersection } from "react-use"

interface ProductsGroupListProps {
  title: string
  items: any[]
  categoryId: number
  listClassName?: string
  className?: string
}

export const ProductsGroupList = ({
  className,
  title,
  items,
  categoryId,
  listClassName,
}: ProductsGroupListProps) => {
  const intersectionRef = useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId)
    }
  }, [intersection?.isIntersecting, title, categoryId])
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((product, i) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
