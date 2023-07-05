'use client'

import { register } from 'swiper/element/bundle';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import Image from 'next/image';
import img7 from "https://www.livemoretravelmore.com/wp-content/uploads/2019/01/Voo-asa-delta-rio-de-janeiro.jpg";
import img8 from "https://asadeltatour.com.br/wp-content/uploads/2017/03/WhatsApp-Image-2017-03-17-at-13.16.20-1080x675.jpeg";
import img9 from "https://i.pinimg.com/originals/84/68/c9/8468c993536aced6e8380603b3d18e32.jpg";
import img10 from "https://www.feriasbrasil.com.br/fotosfb/557906577-G.jpg";
import img11 from "https://cdn.getyourguide.com/img/tour/5cd989c1dc17b.jpeg/148.jpg";
import img12 from "https://s2rio.com.br/wp-content/uploads/2015/07/voo-asa-delta-rio-1024x384.jpg";
import img13 from "https://easyflyrio.com.br/wp-content/uploads/2022/07/asa-delta-no-rio-de-janeiro-2023.jpg";
import img14 from "https://hoteisabeiramar.com.br/wp-content/uploads/2023/01/voo-de-asa-delta-rio-de-janeiro.jpg";
import img15 from "https://www.nattrip.com.br/wp-content/uploads/2017/02/Asa-Delta-Rio-de-Janeiro-5-2-400x300.jpg";
import img16 from "https://asadeltatour.com.br/wp-content/uploads/2017/03/WhatsApp-Image-2017-03-17-at-13.16.20-1080x675.jpeg";
import img17 from "https://asadeltatour.com.br/wp-content/uploads/2019/06/hang-glidind-in-rio-de-janeiro-com-assad-desde-90.jpeg";
import img18 from "https://riocentrodevoolivre.com.br/wp-content/uploads/2021/08/imagem-destaque-experiencia-asa-delta-rio-de-janeiro2.jpg";

register();

const fotosCarrosel = [
    {imagem: '/foto-incrivel-de-um-humano-tentando-voar-em-uma-asa-delta.jpg', id: 1},
    {imagem: '/foto-incrivel-de-humano-voando-em-uma-asa-delta.jpg', id: 2},
    {imagem: '/asa-delta-3.png', id: 3},
    {imagem: '/asa-delta-4.jpg', id: 4},
    {imagem: '/asa-delta-5.jpg', id: 5},
    {imagem: '/asa-delta-6.jpg', id: 6},
    // {imagem: 'https://www.livemoretravelmore.com/wp-content/uploads/2019/01/Voo-asa-delta-rio-de-janeiro.jpg', id: 7},
    // {imagem: 'https://asadeltatour.com.br/wp-content/uploads/2017/03/WhatsApp-Image-2017-03-17-at-13.16.20-1080x675.jpeg', id: 8},
    // {imagem: 'https://i.pinimg.com/originals/84/68/c9/8468c993536aced6e8380603b3d18e32.jpg', id: 9},
    // {imagem: 'https://www.feriasbrasil.com.br/fotosfb/557906577-G.jpg', id: 10},
    // {imagem: 'https://cdn.getyourguide.com/img/tour/5cd989c1dc17b.jpeg/148.jpg', id: 11},
    // {imagem: 'https://s2rio.com.br/wp-content/uploads/2015/07/voo-asa-delta-rio-1024x384.jpg', id: 12},
    // {imagem: 'https://easyflyrio.com.br/wp-content/uploads/2022/07/asa-delta-no-rio-de-janeiro-2023.jpg', id: 13},
    // {imagem: 'https://hoteisabeiramar.com.br/wp-content/uploads/2023/01/voo-de-asa-delta-rio-de-janeiro.jpg', id: 14},
    // {imagem: 'https://www.nattrip.com.br/wp-content/uploads/2017/02/Asa-Delta-Rio-de-Janeiro-5-2-400x300.jpg', id: 15},
    // {imagem: 'https://asadeltatour.com.br/wp-content/uploads/2017/03/WhatsApp-Image-2017-03-17-at-13.16.20-1080x675.jpeg', id: 16},
    // {imagem: 'https://asadeltatour.com.br/wp-content/uploads/2019/06/hang-glidind-in-rio-de-janeiro-com-assad-desde-90.jpeg', id: 17},
    // {imagem: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/fe/db/36/sao-conrado-ao-fundo.jpg?w=1200&h=1200&s=1', id: 18},
    // {imagem: 'https://riocentrodevoolivre.com.br/wp-content/uploads/2021/08/imagem-destaque-experiencia-asa-delta-rio-de-janeiro2.jpg', id: 19}
]

export const Carrosel = () => {

    return(
    <div className='md:w-3/4 w-5/6 h-full bg-slate-100 opacity-90 rounded-2xl p-8 my-28'>
        <h2 className='pb-8 text-3xl font-semibold text-center'>Galeria de Fotos</h2>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        centeredSlidesBounds={false}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,          
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
        >
            <SwiperSlide><Image src={fotosCarrosel[0].imagem} alt='homem tentando voar de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={fotosCarrosel[1].imagem} alt='homem voando de asa delta com bonita paisagem' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={fotosCarrosel[2].imagem} alt='homem voando de asa delta com bonita paisagem' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={fotosCarrosel[3].imagem} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={fotosCarrosel[4].imagem} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={fotosCarrosel[5].imagem} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img7} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img8} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img9} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img10} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img11} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img12} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img13} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img14} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img15} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img16} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img17} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>
            <SwiperSlide><Image src={img18} alt='homem voando de asa delta' width={720} height={320}/></SwiperSlide>

        </Swiper>
    </div>
    )
}