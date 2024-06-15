import { Container } from "@chakra-ui/react"
import HeroSection from "../../Componentes/HeroSection"
import ProductCard from "../../Componentes/ProductCard"
import DataProducts from "../../Data/Productos.json"

function Productos() {
    return (
        <>
            <HeroSection
                image="../src/assets/slider/slider5.jpg"
                title={'Nuestro Productos'}
                subtitle="Posee propiedades saludables, lo que lo convierte en un alimento más digestivo y nutritivo.
                "
                position="center"
                size="70vh"
            />
            <Container maxW='6xl' className="p-4 flex flex-col h-full align-middle ">
                <div className="title-section flex text-center items-center justify-center my-4">
                    <h2 className="text-secondaryshade4 text-4xl font-bold m-2" >Nuestros Productos</h2>
                </div>
                <div className='grid grid-cols-3 w-full gap-8 mt-8'>
                    {
                        DataProducts.map(producto => (
                            <ProductCard
                                key={producto.id}
                                slug={producto.slug}
                                imagen={producto.imagen}
                                categoria={producto.categoria}
                                precio="149" // Si tienes un precio en DataProducts, cámbialo a producto.precio
                                nombre={producto.nombre}
                            />
                        ))
                    }
                </div>
            </Container>
        </>
    )
}
export default Productos