import { Container } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';
import TitleParrafo from "../../Componentes/TitleParrafo";


function Certificaciones() {
    return (
        <div className="relative h-full flex items-center justify-center py-16">
            <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
            />
            <Container maxW='6xl' className="p-4 flex relative z-10 justify-between h-full align-middle items-center content-center">
                <div className="w-1/2 grid custom-swiper-container">
                    <div className="w-[550px]">
                        <TitleParrafo
                            Titulo="San Luisa la vanguardia"
                            Contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                            Align="left"
                        />
                    </div>
                </div>
                <div className="w-[480px] h-full pt-24 align-middle items-center content-center">
                    <h2 className="text-secondaryshade4 text-center text-3xl font-bold m-2" > Certificaciones</h2>
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
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiperDestiny"
                        >
                            <SwiperSlide>
                                <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">                                    <img
                                    src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                    alt="producto"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Certificaciones
