import { Container } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';
import TitleParrafo from "../../Componentes/TitleParrafo";



const Certificados = [
    {
        id: 1,
        url: './src/assets/certificados/certificado1.png',
    },
    {
        id: 2,
        url: './src/assets/certificados/certificado2.png',
    },
    {
        id: 3,
        url: './src/assets/certificados/certificado3.png',
    },
    {
        id: 4,
        url: './src/assets/certificados/certificado4.png',
    },
    {
        id: 5,
        url: './src/assets/certificados/certificado5.png',
    },
    {
        id: 6,
        url: './src/assets/certificados/certificado6.png',
    },
];



function Certificaciones() {
    return (
        <div className="relative h-full flex items-center justify-center py-16">
            <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
            />
            <Container maxW='6xl' className="p-4 flex flex-col md:flex-row relative z-10 justify-between h-full align-middle items-center content-center">
                <div className="w-full md:w-1/2 grid custom-swiper-container">
                    <div className="w-full md:w-[550px]">
                        <TitleParrafo
                            Titulo="San Luis a la vanguardia"
                            Contenido="Nuestro compromiso es ofrecer a las familias productos de panadería y pastelería de primera calidad, sustentados en el cumplimiento de las normas sanitarias que aseguran alimentos inocuos.
                            Todos nuestros productos son elaborados con los mejores insumos y con la dedicación y habilidad de nuestros maestros panaderos que elaboran cada pan con la dedicación y compromiso que exige la panadería artesanal.
                            Como empresa, mantenemos un alto compromiso con nuestros clientes a quienes garantizamos el mejor de los servicios además de la confianza de que todos nuestros procesos son respetuosos con el medio ambiente."
                            Align="left"
                        />
                    </div>
                </div>
                <div className="w-full md:w-[480px] h-full pt-24 align-middle items-center content-center">
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
                                    slidesPerView: 1,
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


                            {
                                Certificados.map(certificado => (
                                    <SwiperSlide key={certificado.id}>
                                        <div className="w-32 h-32 rounded-lg opacity-70 hover:opacity-100 bg-gray-300 relative overflow-hidden transition-transform transform hover:scale-105 duration-500">
                                            <img
                                                src={certificado.url}
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

export default Certificaciones
