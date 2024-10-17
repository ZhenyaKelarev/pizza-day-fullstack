import {
  Container,
  Filters,
  ProductCard,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared"

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі товари" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/* Filter block */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* List of products */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Піцци"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Бургери"
                items={[
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Маргарита",
                    imageUrl:
                      "https://salad.com.ua/sites/default/files/styles/432x369_x2/public/products/fon-pica-kopiya2.jpg?itok=fAeFw3p5",
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
