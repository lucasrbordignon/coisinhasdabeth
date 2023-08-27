import Decimal from 'decimal.js'
import Image from "next/image"
import Avon from '../assets/avon.jpg'

export default function Item(props) {

  var price = new Decimal(props.price)
  var promotionalPrice = new Decimal(props.promotionalPrice)
  var difference = new Decimal(price.sub(promotionalPrice))

  var discountPercentage = new Decimal(( difference * 100 ) / price)

  const formattedResult = discountPercentage.toNumber().toLocaleString('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
   })

  const formattedPrice = price.toNumber().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const formattedPromotionalPrice = promotionalPrice.toNumber().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  var name = props.name

  return (
    <a
      className="relative flex flex-col gap-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
      <div>

        {
          <span 
            className="absolute text-sm pr-1 top-2 right-4 bg-[#E966A0] rounded-r-sm rounded-l-2xl border-l-[10px] border-[#E966A0]"
          >
            {`${formattedResult}% OFF`}
          </span>
        }
        <Image
          alt="Product Image" 
          src={Avon} 
          style={{borderRadius: '8px'}}
        />
      </div>
      <h2 
        className={`mb-3 text-xs text-center opacity-90`}>
        {`${name.substr(0,50)}...`}
      </h2>

      <div>
        <p 
          className={`m-0 max-w-[30ch] text-xs text-center line-through`}
          style={{color: 'rgb(233, 102, 160)'}}  
        >
          {/* {`R$ ${props.price.toFixed(2)}`} */}
          {formattedPrice}
        </p>

        <p 
          className={`m-0 max-w-[30ch] text-md text-center`}>
          {/* {`R$ ${props.promotionalPrice.toFixed(2).toLocaleString()}`} */}
          {formattedPromotionalPrice}
        </p>
      </div>
    </a>
  )
}