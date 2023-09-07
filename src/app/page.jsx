"use client"

import Item from "@/components/Items";
import { ProductService } from "@/services/getProducts";
import React from "react";

export default function Home() {
  const [myProducts, setMyProducts] = React.useState([]);
  const service = ProductService()

  React.useEffect(() => {    
      service.getAllProducts()
        .then((response) => {  
          const products = response.data
          setMyProducts(products)        
      })
  }, [])

  const products = myProducts

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left md:grid-cols-3 sm:grid-cols-2">

        {
          products.map((product) => (
            <Item 
              name={product.description} 
              price={product.price}
              isPromotional={product.isPromotional} 
              promotionalPrice={product.promotionalPrice}   
              image={product.image}   
              weight={product.weight}          
            />
          ))
        }
      
      </div>
    </main>
  )
}