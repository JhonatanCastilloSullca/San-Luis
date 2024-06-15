import { Container } from "@chakra-ui/react"
import HeroSection from "../../Componentes/HeroSection"
import CardFullWidth from "../../Componentes/CardSostenibilidad"
import DataSostenibilidad from "../../Data/Sostenibilidad.json"


function Sostenibilidad() {
    return (
        <>
            <HeroSection
                image="./src/assets/servicios/otrospanes3.jpg"
                title={'Sostenibilidad'}
                subtitle="Cuidando del planeta y de tu bienestar"
                position="center"
                size="50vh"
            />
            <div className="mx-auto w-full items-center justify-between py-10 bg-white">
                <Container maxW='6xl' className="p-4 grid ">

                    <div className="grid gap-8">
                        {DataSostenibilidad.map((item) => (
                            <CardFullWidth
                                key={item.id}
                                imageUrl={item.imagen}
                                title={item.producto}
                                text={item.descripcion}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Sostenibilidad