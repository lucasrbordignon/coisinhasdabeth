import Item from "@/components/Items"

export default function Home() {
  const items = [
    {
      "id": 1,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 97.00,
      "isPromotional": true,
      "promotionalPrice": 50.00,
      "image": ""
    },
    {
      "id": 1,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 40,
      "isPromotional": true,
      "promotionalPrice": 30,
      "image": ""
    },
    {
      "id": 1,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 62,
      "isPromotional": true,
      "promotionalPrice": 59,
      "image": ""
    },
    {
      "id": 1,
      "name": "Esfoliante Capilar Limpeza Profunda Advance Techniques 125g",
      "price": 39.99,
      "isPromotional": true,
      "promotionalPrice": 29.99,
      "image": ""
    }
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
              />
            )
          })
        }
      
      </div>
    </main>
  )
}