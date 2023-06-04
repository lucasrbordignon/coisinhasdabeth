import { Instagram } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <div className="w-full py-2 flex justify-between items-center px-8">
      <div>
        <h3 className='text-header font-semibold'>© 2023 LRB TECH</h3>
      </div>

      <div>
        <Link href="https://www.instagram.com/coisinhas_da_beth/"><Instagram color='#863D3D'/></Link>
      </div>

    </div>
  )
}