import { Container } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, A11y } from 'swiper/modules';
import CircleComponent from "../../Componentes/CircleComponent"

const Productos = [
    {
        id: 1,
        imageUrl: "https://www.pasteleriacalamillormadrid.es/wp-content/uploads/2020/09/PAN-DE-MOLDE-PEQUEN%CC%83O-scaled-1.jpg",
        name: "Pan de molde"
    },
    {
        id: 2,
        imageUrl: "https://marimbo.com.ar/wp-content/uploads/2023/05/pan-salvado.jpg",
        name: "Pan de molde con salvado"
    },
    {
        id: 3,
        imageUrl: "https://i.blogs.es/497c5e/pantostado/450_1000.jpg",
        name: "Tostadas"
    },
    {
        id: 4,
        imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/abccolor/A3LD3QJRDFEBTD6LAU4L7ZVLNI.jpg",
        name: "Pan neutro de labranza"
    },
    {
        id: 5,
        imageUrl: "https://panoli.pe/wp-content/uploads/2018/12/IMG_0978-1.jpg",
        name: "Pan Dulce"
    },
    {
        id: 6,
        imageUrl: "https://panoli.pe/wp-content/uploads/2016/12/IMG_0739-1.jpg",
        name: "Galletas dulce sin relleno"
    },
    {
        id: 7,
        imageUrl: "https://wongfood.vtexassets.com/arquivos/ids/654148-800-auto?v=638294435042100000&width=800&height=auto&aspect=true",
        name: "Bizcocho dulce"
    },
    {
        id: 8,
        imageUrl: "https://tortascatalina.com/wp-content/uploads/2022/12/keke-de-vainilla.png",
        name: "Bizcocho suave sin relleno"
    }
];

const NuestroProducto = {
    titulo: "Tenemos los mejores productos para todos los momentos de tu día.",
    imagenPrimaria: "./src/assets/general/trigo-oso.png",
    imagenSecundaria: "./src/assets/general/san-luis-producto.png"
};

function NuestrosProductos() {
    return (
        <>
            <div className="bg-infoshade6 mx-auto w-full items-center justify-between p-2">
                <Container maxW='6xl' className="p-4">
                    <div className="title-section flex text-center items-center justify-center my-4">
                        <h2 className="text-secondaryshade4 text-4xl font-bold m-2" >Nuestros Productos</h2>
                    </div>
                    <div className="productos-category my-4">
                        <div className="flex flex-wrap justify-center items-center md:justify-between">
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
                                        slidesPerView: 5,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiperDestiny"
                            >

                                {Productos.map(producto => (
                                    <SwiperSlide key={producto.id}>
                                        <CircleComponent
                                            imageUrl={producto.imageUrl}
                                            name={producto.name}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
            {/* COMPONETIZAR */}
            <div className="bg-white mx-auto w-full items-center justify-between py-4">
                <Container maxW='6xl' className="p-4 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h3 className="text-secondaryshade4 text-3xl font-bold m-2 w-96">
                            {NuestroProducto.titulo}
                        </h3>
                        <img
                            src={NuestroProducto.imagenPrimaria}
                            alt="Nosotros"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={NuestroProducto.imagenSecundaria}
                            alt="Nosotros"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default NuestrosProductos
