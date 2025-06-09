"use client"

import { useEffect, useState } from "react"
import { CheckboxFiltersGroup, FilterCheckbox, RangeSlider, Title } from "./"
import { Input } from "../ui"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { useSet } from "react-use"

interface FiltersProps {
  className?: string
}

interface PriceRangeProps {
  priceFrom: number
  priceTo: number
}

export const Filters = ({ className }: FiltersProps) => {
  const { ingredients, loading, onAddId, selectedIngredients } =
    useFilterIngredients()

  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]))

  const [prices, setPrices] = useState<PriceRangeProps>({
    priceFrom: 0,
    priceTo: 5000,
  })

  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(new Set<string>([]))

  const items = ingredients.map((item) => ({
    value: String(item.id),
    text: item.name,
  }))

  const updatePrice = (name: keyof PriceRangeProps, value: number) => {
    setPrices({
      ...prices,
      [name]: value,
    })
  }

  useEffect(() => {
    const filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients),
    }
  }, [prices, pizzaTypes, sizes, selectedIngredients])

  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <CheckboxFiltersGroup
          title="Тип тіста"
          name="pizzaTypes"
          className="mb-5"
          selected={pizzaTypes}
          onClickCheckbox={togglePizzaTypes}
          items={[
            { text: "Тонке", value: "1" },
            { text: "Традиційне", value: "2" },
          ]}
        />

        <CheckboxFiltersGroup
          title="Розміри"
          name="sizes"
          className="mb-5"
          selected={sizes}
          onClickCheckbox={toggleSizes}
          items={[
            { text: "20см", value: "20" },
            { text: "30см", value: "30" },
            { text: "40см", value: "40" },
          ]}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            value={String(prices.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={30000}
            placeholder="30000"
            value={String(prices.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={5000}
          step={10}
          value={[prices.priceFrom, prices.priceTo]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrices({ priceFrom, priceTo })
          }
        />
      </div>

      <CheckboxFiltersGroup
        title="Інгрідієнти"
        name="ingredients"
        className="mt-5"
        limit={5}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
      />
    </div>
  )
}
