import React from 'react'
import { faker } from '@faker-js/faker';


function Home() {
  const ProductArray = [...Array(20)].map(()=>({
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    // email: faker.internet.email(),
    avatar: faker.image.avatar(),
    // password: faker.internet.password(),
    // birthdate: faker.date.birthdate(),
    // registeredAt: faker.date.past(),
    name:faker.commerce.productName(),
   
    price:faker.commerce.price(),
  

  }))

console.log(ProductArray,"abi");

  return (
    <div>Home</div>
  )
}

export default Home