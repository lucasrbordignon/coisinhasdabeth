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

  if(props.weight === undefined || props.weight === 0){
    var name = `${props.name.substr(0,50)}...`
  } else {
    var name = `${props.name.substr(0,50)}... ${props.weight}g`
  }

  return props.isPromotional ? 
  (
    <a
    className="relative flex flex-col gap-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-w-[192px]"
    >
      <div>
        <span 
          className="absolute pr-1 top-2 right-4 bg-[#E966A0] rounded-r-sm rounded-l-2xl border-l-[10px] border-[#E966A0] text-sm"
        >
          {`${discountPercentageFixed}% OFF`}
        </span>

        <Image
          alt="Product Image" 
          src={props.image} 
          style={{borderRadius: '8px'}}
        />
      </div>
      <h2 
        className={`mb-3 text-xs text-center opacity-90`}>
        {name}
      </h2>

      <div>
        <p 
          className={`m-0 max-w-[30ch] text-xs text-center line-through`}
          style={{color: 'rgb(233, 102, 160)'}}  
        >
          {formattedPrice}
        </p>

        <p 
          className={`m-0 max-w-[30ch] text-md text-center`}>
          {formattedPromotionalPrice}
        </p>
      </div>
    </a>
  ) 
  : 
  (
    <a
      className="relative flex flex-col gap-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:cursor-pointer hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 min-w-[192px]"
    >
      <div>          
        <Image
          alt="Product Image" 
          src={props.image} 
          style={{borderRadius: '8px'}}
        />
      </div>
      <h2 
        className={`mb-3 text-xs text-center opacity-90`}>
        {name}
      </h2>

      <div>
        <p 
          className={`m-0 max-w-[30ch] text-md text-center`}>
          {formattedPrice}
        </p>
      </div>
    </a>
  )
}