
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import HeroSection from '../../Componentes/HeroSection';


const Cabeceras = [
    {
        id: 1,
        url: '../../src/assets/slider/slider1.jpg',
        titulo: "Primera Cabecera",
        subtitulo: "Este es el subtítulo de la primera cabecera",
        posicion: "center",
        linkAction: "#"
    },
    {
        id: 2,
        url: '../../src/assets/slider/slider2.jpg',
        titulo: "Segunda Cabecera",
        subtitulo: "Este es el subtítulo de la segunda cabecera",
        posicion: "start",
        linkAction: "#"
    },
    {
        id: 3,
        url: '../../src/assets/slider/slider3.jpg',
        titulo: "Tercera Cabecera",
        subtitulo: "Este es el subtítulo de la tercera cabecera",
        posicion: "end",
        linkAction: "#"
    },
    {
        id: 4,
        url: '../../src/assets/slider/slider4.jpg',
        titulo: "Cuarta Cabecera",
        subtitulo: "Este es el subtítulo de la cuarta cabecera",
        posicion: "end",
        linkAction: "#"
    },
    {
        id: 5,
        url: '../../src/assets/slider/slider5.jpg',
        titulo: "Quinta Cabecera",
        subtitulo: "Este es el subtítulo de la quinta cabecera",
        posicion: "center",
        linkAction: "#"
    },
    {
        id: 6,
        url: '../../src/assets/slider/slider6.jpg',
        titulo: "Quinta Cabecera",
        subtitulo: "Este es el subtítulo de la quinta cabecera",
        posicion: "start",
        linkAction: "#"
    }
];
function SliderSection() {
    return (
        <Swiper
            navigation={true}
            autoplay={{
                delay: 103500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper home-size"
        >
            {Cabeceras.map(cabecera => (
                <SwiperSlide key={cabecera.id}>
                    <HeroSection
                        image={cabecera.url}
                        title={cabecera.titulo}
                        subtitle={cabecera.subtitulo}
                        position={cabecera.posicion}
                        linkAction={cabecera.linkAction}
                        size="100vh"

                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderSection
