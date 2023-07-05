import Image from 'next/image'

const instrutores = [
    {nome: 'Tiquinho Soares', foto: '/instrutor1.jpg', id: 1},
    {nome: 'Pedro Raul', foto: '/instrutor2.jpg', id: 2},
    {nome: 'Gabriel Barbosa', foto: '/instrutor3.jpg', id: 3}
]

export const Sobre = () => {
    return(
        <div className='w-3/4 bg-slate-100 opacity-90 rounded-2xl p-8'>
            <div><h2 className='p-8 text-3xl font-semibold text-center'>Conheça a Asa Delta Rio</h2>
            <p className="p-2 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a dolor purus. Vestibulum id sagittis diam, maximus fringilla tellus.
                Donec ultricies tellus in convallis auctor.
                Pellentesque convallis orci ac aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a dolor purus. Vestibulum id sagittis diam, maximus fringilla tellus.
                Donec ultricies tellus in convallis auctor.<br/><br/>
                Pellentesque convallis orci ac aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a dolor purus. Vestibulum id sagittis diam, maximus fringilla tellus.
                Donec ultricies tellus in convallis auctor. Pellentesque convallis orci ac aliquet.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a dolor purus. Vestibulum id sagittis diam, maximus fringilla tellus.
                Donec ultricies tellus in convallis auctor.
                Pellentesque convallis orci ac aliquet.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aliquam a dolor purus. Vestibulum id sagittis diam, maximus fringilla tellus.
                Donec ultricies tellus in convallis auctor.
                Pellentesque convallis orci ac aliquet.<br/><br/>
            </p></div>
                <h2 className='p-8 text-3xl font-semibold text-center'>Instrutores</h2>
            <div className='flex flex-col gap-10 md:gap-0 md:flex-row justify-between p-6'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <Image src={instrutores[0].foto} alt='Instrutor 1' width={200} height={200} className='rounded-3xl'/>
                    <p>{instrutores[0].nome}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <Image src={instrutores[1].foto} alt='Instrutor 1' width={200} height={200} className='rounded-3xl'/>
                    <p>{instrutores[1].nome}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <Image src={instrutores[2].foto} alt='Instrutor 1' width={200} height={200} className='rounded-3xl'/>
                    <p>{instrutores[2].nome}</p>
                </div>
            </div>
            
        </div>
    )
}