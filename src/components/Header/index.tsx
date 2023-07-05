'use client'

import Link from "next/link"
import Image from 'next/image'
import { useState } from "react"
import { Formulario } from "../Formulario"
import { Sobre } from "../Sobre"

export const Header = () => {

const [mostrarFormulario, setMostrarFormulario] = useState(false)
const [mostrarSobre, setMostrarSobre] = useState(false)

const formulario = () => {  
  setMostrarFormulario(!mostrarFormulario)  
}

const sobre = () => {
  setMostrarSobre(!mostrarSobre)
}

    return (<>
    <div className='h-full md:min-h-screen flex justify-center items-center md:-mb-24'>
      <div className="w-full flex justify-center items-baseline absolute top-0 md:left-20 md:block">
        <Link href='/'>
          <Image
            src={'/logo.svg'}
            alt='logo asa delta rio'
            width={200}
            height={0}
            className='cursor-pointer'
          />
        </Link>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center h-screen md:h-full md:w-3/4 mt-60 md:mt-0'>
        <div className="absolute top-52 md:static w-1/2">
          <Image
            src={'/pngwing2.com.png'}
            alt='Asa delta animado'
            width={300}
            height={180}
            className='asadelta-animado'
          />
        </div>
        <div className='md:w-full w-3/4 bg-slate-100 opacity-90 p-8 rounded-2xl'>
          <h1 className='text-lime-500 leading-tight md:text-center font-semibold md:text-7xl text-4xl'>Realize seu sonho de voar</h1>
          <p className='py-10 md:font-semibold md:text-3xl text-center'>Venha conhecer a Cidade Maravilhosa do alto!</p>
          <p className='pb-8'> Clique nos botões abaixo para nos conhecer melhor ou entrar em contato.</p>
          <button onClick={formulario} className='mb-4 md:mb-0 text-lime-600 bg-slate-200 hover:bg-slate-400 active:bg-slate-600 opacity-90 rounded px-3 py-1 mr-4'>Fale conosco</button>
          <button onClick={sobre} className='text-lime-600 bg-slate-200 hover:bg-slate-400 active:bg-slate-600 opacity-90 rounded px-3 py-1 mr-4'>Saiba mais</button>
        </div>
      </div>
    </div>

      <div className="flex flex-col justify-center items-center gap-16 w-full">
        {mostrarFormulario && (<Formulario a={'Digite seu nome...'} b={'Digite seu telefone de contato...'} c={'Digite seu email...'} d={'Digite sua mensagem...'}/>)}
        
        {mostrarSobre && (<Sobre/>)}
      </div>
      </>
    )
}