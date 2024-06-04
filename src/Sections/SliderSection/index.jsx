
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import HeroSection from '../../Componentes/HeroSection';
function SliderSection() {
    return (
        <Swiper
            navigation={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper home-size"
        >
            <SwiperSlide>
                <HeroSection
                    image="http://localhost:1337/uploads/slider2_09ab3d7b52.jpg"
                    title="Lessons and insights"
                    subtitle="Where to grow your business as a photographer: site or social media?"
                    position="left"
                    linkAction="Visitar"
                    size="100vh"
                />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSection
                    image="http://localhost:1337/uploads/slider2_09ab3d7b52.jpg"
                    title="Lessons and insights"
                    subtitle="Where to grow your business as a photographer: site or social media?"
                    position="center"
                    linkAction="Visitar"
                    size="100vh"
                />
            </SwiperSlide>
            <SwiperSlide>
                <HeroSection
                    image="http://localhost:1337/uploads/slider2_09ab3d7b52.jpg"
                    title="Lessons and insights"
                    subtitle="Where to grow your business as a photographer: site or social media?"
                    position="right"
                    linkAction="Visitar"
                    size="100vh"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default SliderSection
