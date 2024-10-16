import React from "react"
import { cn } from "@/lib/utils"
import { Categories, Container, SortPopup } from "."

interface TopBarProps {
  className?: string
}

export const TopBar = ({ className }: TopBarProps) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  )
}
