import { Container } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import TitleParrafo from "../../Componentes/TitleParrafo";
import DataProducts from "../../Data/Productos.json"
import { useState } from "react";



function Productos() {

    const [currentProducto, setCurrentProducto] = useState(DataProducts[0]); // Estado para almacenar el producto actual

    const handleSlideChange = (swiper) => {
        const currentSlideIndex = swiper.activeIndex;
        setCurrentProducto(DataProducts[currentSlideIndex]);
    };

    return (
        <div className="relative h-[calc(100vh-90px)] flex items-center justify-center">
            <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                    backgroundImage: `url(${currentProducto.imagen})`, // Aquí está la corrección
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}
            />

            <Container maxW='6xl' className="p-4 flex flex-col md:flex-row relative z-10 justify-between h-full align-middle items-center content-center">
                <div className="w-full md:w-1/2 grid custom-swiper-container mb-8 md:mb-0">
                    <Swiper
                        effect="flip"
                        grabCursor={true}
                        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="custom-swiper"
                        onSlideChange={(swiper) => handleSlideChange(swiper)}

                    >
                        {
                            DataProducts.map(producto => (
                                <SwiperSlide key={producto.id}>
                                    <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src={producto.imagen} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="w-full md:w-[480px] h-full pt-0 md:pt-24 align-middle items-center content-center">
                    <TitleParrafo
                        Titulo={currentProducto.nombre}
                        Contenido={currentProducto.descripcion}
                        Align="right"
                    />
                    <div className="galery-products py-8">
                        <Swiper
                            modules={[Autoplay, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            grabCursor={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiperDestiny"
                        >


                            {
                                currentProducto.galeria.map(imagen => (
                                    <SwiperSlide key={imagen.id}>
                                        <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                            <img
                                                src={imagen.imagen}
                                                alt="producto"
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))
                            }


                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Productos
