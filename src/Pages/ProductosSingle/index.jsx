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

function ProductosSingle() {
    const { slug } = useParams();
    return (
        <>
            <HeroSection
                image="http://localhost:1337/uploads/slider2_09ab3d7b52.jpg"
                title={slug}
                subtitle="Where to grow your business as a photographer: site or social media?"
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
                            <SwiperSlide>
                                <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">                                    <img
                                    src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                    alt="producto"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className=" hover:rounded-lg rounded-lg bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg hover:rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="w-1/2 grid custom-swiper-container">
                    <div className="w-[480px]">
                        <TitleParrafo
                            Titulo="Titulo del Producto"
                            Contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
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
                                <h3 className='text-light text-5xl'>321 Cal</h3>
                                <h6 className='text-light text-base'>Calorias</h6>
                            </div>
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>321 Cal</h3>
                                <h6 className='text-light text-base'>Calorias</h6>
                            </div>
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>321 Cal</h3>
                                <h6 className='text-light text-base'>Calorias</h6>
                            </div>
                            <div className="info-product text-center">
                                <h3 className='text-light text-5xl'>321 Cal</h3>
                                <h6 className='text-light text-base'>Calorias</h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-white mx-auto w-full items-center justify-between p-2 pb-24">
                <Container maxW='6xl' className="p-4">
                    <div className='grid grid-cols-3 gap-8'>
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                        <DatosDetalleProducto
                            titulo={'Grasa Saturada'}
                            contenido={'4g (19 % DV)'}
                        />
                    </div>
                </Container>
            </div>


        </>

    );
}

export default ProductosSingle;
