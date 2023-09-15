'use client'

import { arredondarParaCasaDecimal } from '@/constants/currencyFormat'
import Decimal from 'decimal.js'
import Image from "next/image"

export default function Item(props) {

  var price = new Decimal(props.price)

  var promotionalPrice = new Decimal(props.promotionalPrice)
  var difference = new Decimal(price.sub(promotionalPrice))

  var discountPercentage = new Decimal(( difference * 100 ) / price)

  var formattedDiscontPercentage = arredondarParaCasaDecimal(discountPercentage)

  const discountPercentageFixed = formattedDiscontPercentage.toNumber().toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
   })

  var formattedPrice = price.toNumber().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const formattedPromotionalPrice = promotionalPrice.toNumber().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  if (props.name.lenght > 50) {
    var name = props.weight === undefined || props.weight === 0 ? `${props.name.substr(0,50)}...` : `${props.name.substr(0,50)}... ${props.weight}g`
  } else {
    var name = props.weight === undefined || props.weight === 0 ? props.name : `${props.name} ${props.weight}g`
  }

  return (
    <a
    className="relative flex flex-col h-max gap-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-w-[192px]"
    >
      <div>
        <DiscountPercentage 
          isPromotional={props.isPromotional}
          discountPercentageFixed={discountPercentageFixed}
        />
        <Image
          alt="Product Image" 
          src={props.image} 
          style={{borderRadius: '8px'}}
          width={300}
          height={300}
        />
      </div>
      <h2 
        className={`mb-3 text-xs text-center opacity-90`}>
        {name}
      </h2>

      <div>
        <PromotionalPrice
          isPromotional={props.isPromotional}
          formattedPrice={formattedPrice}
        />

        <p 
          className={`m-0 max-w-[30ch] text-md text-center`}
        >
          {
            props.isPromotional 
            ? 
            formattedPromotionalPrice 
            : 
            formattedPrice
          }
        </p>
      </div>
    </a>
  ) 
}

function DiscountPercentage(props) {
  if(props.isPromotional) {
    return (
      <span 
        className="absolute pr-1 top-2 right-4 bg-[#E966A0] rounded-r-sm rounded-l-2xl border-l-[10px] border-[#E966A0] text-sm"
      >
        {`${props.discountPercentageFixed}% OFF`}
      </span>
    )
  } else {
    return
  }
}

function PromotionalPrice(props) {
  if(props.isPromotional) {
    return (
      <p 
          className={`m-0 max-w-[30ch] text-xs text-center line-through`}
          style={{color: 'rgb(233, 102, 160)'}}  
        >
          {props.formattedPrice}
        </p>
    )
  } else {
    return
  }
}