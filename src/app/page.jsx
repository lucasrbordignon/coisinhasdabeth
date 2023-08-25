import Item from "@/components/Items"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left md:grid-cols-3 sm:grid-cols-2">

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />

        <Item />
      </div>
    </main>
  )
}