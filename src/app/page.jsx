import Item from "@/components/Items"
import avon from '../assets/avon.jpg'
import avon2 from '../assets/avon2.jpg'

export default function Home() {
  const items = [
    {
      "id": 1,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 97.00,
      "isPromotional": true,
      "promotionalPrice": 50.00,
      "image": avon
    },
    {
      "id": 2,
      "name": "Creme Depilatório Para o Corpo Skin So Soft com Complexo Hidratante - 125 g",
      "price": 34.99,
      "isPromotional": true,
      "promotionalPrice": 27.99,
      "image": avon2
    },
    {
      "id": 3,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 62,
      "isPromotional": true,
      "promotionalPrice": 59,
      "image": avon
    },
    {
      "id": 4,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 39.99,
      "isPromotional": false,
      "promotionalPrice": 29.99,
      "image": avon
    },
    {
      "id": 5,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 39.99,
      "isPromotional": false,
      "promotionalPrice": 29.99,
      "image": avon
    },
    {
      "id": 6,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 39.99,
      "isPromotional": true,
      "promotionalPrice": 29.99,
      "image": avon
    },
]


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left md:grid-cols-3 sm:grid-cols-2">

        {
          items.map((item) => {
            return (
              <Item 
                name={item.name} 
                price={item.price}
                isPromotional={item.isPromotional} 
                promotionalPrice={item.promotionalPrice}
                image={item.image}
              />
            )
          })
        }
      
      </div>
    </main>
  )
}