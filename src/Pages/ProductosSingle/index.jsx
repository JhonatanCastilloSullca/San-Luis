import { useParams } from 'react-router-dom';
import HeroSection from '../../Componentes/HeroSection';
import { Container } from '@chakra-ui/react';
import TitleParrafo from '../../Componentes/TitleParrafo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';
import DatosDetalleProducto from '../../Componentes/DatosDetalleProducto';

import DataProducts from "../../Data/Productos.json";

function ProductosSingle() {
    const { slug } = useParams();

    // Buscar el producto por el slug en el JSON de Productos
    const producto = DataProducts.find(item => item.slug === slug);

    if (!producto) {
        return (
            <div>
                Producto no encontrado.
            </div>
        );
    }

    return (
        <>
            <HeroSection
                image={producto.imagen} // Aquí deberías tener una imagen correspondiente al producto
                title={producto.nombre}
                position="center"
                size="70vh"
            />
            <Container maxW='6xl' className="p-4 flex relative z-10 justify-between h-full align-middle items-center content-center">
                <div className="w-[480px] h-full pt-24 align-middle items-center content-center">
                    <div className="galery-products py-8">
                        <Swiper
                            modules={[Autoplay, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            grabCursor={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiperDestiny"
                        >
                            {producto.galeria.map((imagen, index) => (
                                <SwiperSlide key={index}>
                                    <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                        <img
                                            src={imagen}
                                            alt={`Imagen ${index + 1}`}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className="w-1/2 grid custom-swiper-container">
                    <div className="w-[480px]">
                        <TitleParrafo
                            Titulo={producto.nombre}
                            Contenido={producto.descripcion}
                            Align="right"
                        />
                    </div>
                </div>
            </Container>
            <Container maxW='6xl' className="p-4 grid h-full align-middle items-center content-center justify-center">
                <TitleParrafo
                    Titulo="Información Nutricional"
                    Align="center"
                />
            </Container>
            <div className="bg-white mx-auto w-full items-center justify-between p-2">
                <Container maxW='6xl' className="p-4">
                    <div className="productos-category my-4">
                        <div className="flex space-x-4 items-center justify-evenly">
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>{producto.calorias} Cal</h3>
                                <h6 className='text-light text-base'>Calorías</h6>
                            </div>
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>{producto.proteinas}</h3>
                                <h6 className='text-light text-base'>Proteínas</h6>
                            </div>
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>{producto.carbohidratos}</h3>
                                <h6 className='text-light text-base'>Carbohidratos</h6>
                            </div>
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>{producto.grasas}</h3>
                                <h6 className='text-light text-base'>Grasas</h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-white mx-auto w-full items-center justify-between p-2 pb-24">
                <Container maxW='6xl' className="p-4">
                    <div className='grid grid-cols-3 gap-8'>
                        {producto.detalle && producto.detalle.map((detalle, index) => (
                            <DatosDetalleProducto
                                key={index}
                                titulo={detalle.titulo}
                                contenido={detalle.valor}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    );
}

export default ProductosSingle;
