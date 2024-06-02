import { Container } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import TitleParrafo from "../../Componentes/TitleParrafo";


function Productos() {
    return (
        <div className="relative h-[calc(100vh-90px)] flex items-center justify-center">
            <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                    backgroundImage: `url(http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: -1
                }}
            />
            <Container maxW='6xl' className="p-4 flex relative z-10 justify-between h-full align-middle items-center content-center">
                <div className="w-1/2 grid custom-swiper-container">
                    <Swiper
                        effect={'flip'}
                        grabCursor={true}
                        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        className="custom-swiper"

                    >
                        <SwiperSlide>
                            <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src="http://localhost:1337/uploads/tostadasintegrales1_255232dd98.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src="http://localhost:1337/uploads/tostadasintegrales2_0a2e8ea6c0.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src="http://localhost:1337/uploads/tostadasblancas3_59c1990d47.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src="http://localhost:1337/uploads/tostadasblancas1_5e7011607a.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src="http://localhost:1337/uploads/pasteleria3_130e02ef99.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="shadow-3xl shadow-white rounded-[25px] object-cover" src="http://localhost:1337/uploads/pasteleria2_1afe434113.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="w-[480px] h-full pt-24 align-middle items-center content-center">
                    <TitleParrafo
                        Titulo="Nuestros Productos"
                        Contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
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
                            <SwiperSlide>
                                <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">                                    <img
                                    src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                    alt="producto"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-24 h-24 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
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

export default Productos
