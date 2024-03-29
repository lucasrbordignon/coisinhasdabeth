"use client"

import Logo from "@/assets/logo.svg"
import Item from "@/components/Items"
import { ProductService } from "@/services/getProducts"
import Image from "next/image"
import React from "react"
import { FaFilter } from "react-icons/fa"

export default function Home() {

  const [myProducts, setMyProducts] = React.useState([])
  const service = ProductService()

  React.useEffect(() => {    
      service.getAllProducts()
        .then((response) => {  
          const products = response.data
          setMyProducts(products)        
      })
  }, [])

  function DispenserAlert() {  
    const content = document.getElementById('content')
      // Verifica se a div de conteúdo está visível
      if (content.style.display === 'none' || content.style.display === '') {
        // Se estiver oculta, torna visível
        content.style.display = 'block'
      } else {
        // Caso contrário, oculta
        content.style.display = 'none'
      }
  }
  
  return (
    <div className="flex flex-col items-center px-24">
      <nav className="flex max-w-5xl max-sm:flex-col min-w-screen items-center justify-between py-3 w-full mb-0">
        <Image 
          src={Logo}
          alt="Logo Coisinhas da Beth"
          height={64}          
        />

        <h1 className="text-inherit text-xl lg:text-3xl">CATÁLOGO</h1>
      </nav>

      <main className="flex lg:max-w-5xl min-h-screen justify-between py-3">

        <div className="h-full max-w-[192px] w-64 mr-3 border rounded-lg border-neutral-700 bg-neutral-800/30 hover:cursor-pointer hover:bg-neutral-800/80 transition-colors">
          <div onClick={DispenserAlert} id="toggleButton" className="py-2 px-3 flex items-center justify-between">
            <h2>FILTRO</h2>      
            <FaFilter />             
          </div>
          <div id="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="grid h-max text-center lg:max-w-5xl xl:grid-cols-4 lg:w-full lg:grid-cols-3 lg:text-left md:grid-cols-2 sm:grid-cols-1">

          {
            myProducts.map((product) => (              
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
    </div>
  )
}