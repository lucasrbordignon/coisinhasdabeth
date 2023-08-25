import Image from "next/image"
import Avon from '../assets/avon.jpg'

export default function Item() {
  return (
    <a
      className="relative flex flex-col gap-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:cursor-pointer hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >

      <div>

        <span 
          className="absolute text-sm pr-1 top-2 right-4 bg-[#E966A0] rounded-r-sm rounded-l-2xl border-l-[10px] border-[#E966A0]"
        >
          33% OFF
        </span>

        <Image
          alt="Product Image" 
          src={Avon} 
          style={{borderRadius: '8px'}}
        />
      </div>
      <h2 
        className={`mb-3 text-xs text-center opacity-90`}>
        Esfoliante Capilar Limpeza Profunda Advance Techniques 125g        
      </h2>

      <div>
        <p 
          className={`m-0 max-w-[30ch] text-xs text-center line-through`}
          style={{color: 'rgb(233, 102, 160)'}}  
        >
          R$ 39,99
        </p>

        <p 
          className={`m-0 max-w-[30ch] text-md text-center`}>
          R$ 29,99
        </p>
      </div>
    </a>
  )
}