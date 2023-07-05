import { Carrosel } from '@/components/Carrossel'
import { Header } from '@/components/Header'
import React from 'react'

export default function Home() {
  
  return (
    <main className='w-full background-animado flex flex-col items-center overflow-hidden'>

      <Header/>
      <Carrosel/>
      
    </main>
  )
}