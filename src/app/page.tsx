import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Footer } from '@/components/Footer'
import { CircleDollarSignIcon, Clock, CreditCard } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../assets/logo_semfundo.png'

export default function Home() {
  return (
    <div className="h-screen mx-auto max-w-4xl flex flex-col gap-12 justify-between">
      <div className="w-full h-32 flex justify-between items-center px-8">

        <Image src={Logo} alt="Logo Coisinhas da Beth" height={148} />

        <div className='flex items-center gap-4'>          
          <Link href="" className='underline font-semibold text-header transition-colors hover:text-header/80'>CADASTRAR-SE</Link>
          <Button>LOGIN</Button>
        </div>
      </div>

      <div className='flex justify-around'>
        <div className='flex justify-start'>
          <div className='flex flex-col items-start gap-6'>
            
            <h1 className='text-5xl text-header font-bold w-72'>BEM-VINDO AO COISINHAS DA BETH</h1>

            <p className='block w-96 text-base text-left text-fonts font-semibold'>
              Coisinhas da Beth criou este site para que você, cliente, se sinta mais confortável e à 
              vontade ao gerenciar suas contas e desfrutar de nossas variadas opções no catálogo.
              Nosso objetivo é facilitar suas compras e tornar sua experiência agradável. 
              Com um design intuitivo e recursos práticos, você terá facilidade em navegar e encontrar 
              exatamente o que procura. Além disso, garantimos segurança em suas transações para que você possa comprar 
              com tranquilidade. Explore nosso catálogo em constante atualização e aproveite a comodidade que Coisinhas da Beth 
              oferece. 
            </p>

            <h2 className='uppercase text-fonts/80 font-semibold text-xl'>Sua satisfação é nossa prioridade!</h2>
            <Button className='text-xl'>CATÁLOGO</Button>
          </div>
        </div>

        <div className='flex flex-col justify-between items-center gap-4'>
          <Card.Root>
            <Card.Icon>
              <Clock />
            </Card.Icon>

            <Card.Title>RAPIDEZ DE ENTREGA</Card.Title>

            <Card.Description>Oferecemos conveniência imediata ao cliente, reduzindo o tempo de espera e atendendo às necessidades urgentes</Card.Description>          
          </Card.Root>

          <Card.Root>
            <Card.Icon> 
              <CircleDollarSignIcon />
            </Card.Icon>

            <Card.Title>PREÇOS IMBÁTIVEIS</Card.Title>

            <Card.Description>Oferecemos a certeza de pagar menos e levar mais, para satisfazer suas necessidades e seu bolso</Card.Description>          
          </Card.Root>

          <Card.Root>
            <Card.Icon> 
              <CreditCard /> 
            </Card.Icon>

            <Card.Title>PAGAMENTO FÁCIL</Card.Title>

            <Card.Description>Oferecemos opções de pagamento simples e acessíveis</Card.Description>          
          </Card.Root>
        </div>
      </div>

      <Footer/>
      
    </div>
  )
}