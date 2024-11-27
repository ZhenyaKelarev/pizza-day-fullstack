import { connect } from "http2"
import { categories, ingredients, products } from "./constants"
import { prisma } from "./prisma-client"
import { hashSync } from "bcrypt"

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const generatePizza = (productId: number, type: number, size: number) => {
  return {
    productId,
    size,
    pizzaType: type,
    price: randomNumber(190, 600),
  }
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.com",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.com",
        password: hashSync("1111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.ingredient.createMany({
    data: ingredients,
  })
  const pizza1 = await prisma.product.create({
    data: {
      name: "Сирна",
      image:
        "https://i0.wp.com/caponepizza.kiev.ua/wp-content/uploads/2019/09/pizza_03-1.jpg?fit=1140%2C1140&ssl=1",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  })

  const pizza2 = await prisma.product.create({
    data: {
      name: "Маргаріта",
      image:
        "https://img.freepik.com/premium-photo/classic-pepperoni-pizza-tomato-sauce-melted-cheese-top_807701-676.jpg",
      categoryId: 2,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  })

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чорізо",
      image:
        "https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.jpg?s=612x612&w=0&k=20&c=VjDdBc_WrHh9dqI8jCSEoI1jeWQDVSdXOJJ5LijQoRA=",
      categoryId: 3,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  })

  await prisma.product.createMany({
    data: products,
  })

  await prisma.product.createMany({
    data: products,
  })

  await prisma.productVariant.createMany({
    data: [
      generatePizza(pizza1.id, 1, 20),
      generatePizza(pizza1.id, 2, 30),
      generatePizza(pizza1.id, 2, 40),

      generatePizza(pizza2.id, 1, 20),
      generatePizza(pizza2.id, 2, 30),
      generatePizza(pizza2.id, 3, 40),

      generatePizza(pizza3.id, 1, 20),
      generatePizza(pizza3.id, 2, 30),
      generatePizza(pizza3.id, 3, 40),
    ],
  })

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "1111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "2222",
      },
    ],
  })

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
}

async function main() {
  try {
    await down()
    await up()
  } catch (error) {
    console.log(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
