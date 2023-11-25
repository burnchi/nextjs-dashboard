import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  
  return (
    <div>
      home
      <Link href='/dashboard' className='p-2 bg-blue-300'>dashboard</Link>
    </div>
  )
}
