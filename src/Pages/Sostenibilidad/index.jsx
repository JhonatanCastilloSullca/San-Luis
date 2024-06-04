import { Container } from "@chakra-ui/react"
import HeroSection from "../../Componentes/HeroSection"
import CardFullWidth from "../../Componentes/CardSostenibilidad"

function Sostenibilidad() {
    return (
        <>
            <HeroSection
                image="http://localhost:1337/uploads/slider2_09ab3d7b52.jpg"
                title={'Sostenibilidad'}
                subtitle="Where to grow your business as a photographer: site or social media?"
                position="center"
                size="50vh"
            />
            <div className="mx-auto w-full items-center justify-between py-10 bg-white">
                <Container maxW='6xl' className="p-4 grid ">
                    <div className="grid gap-8">
                        <CardFullWidth
                            imageUrl={'http://localhost:1337/uploads/slider2_09ab3d7b52.jpg'}
                            title={'Saludable y Sostenible'}
                            text={'¡Disfruta de nuestros deliciosos panes y pasteles, sabiendo que cuidan del planeta tanto como de tu paladar!'}
                        />
                        <CardFullWidth
                            imageUrl={'http://localhost:1337/uploads/slider2_09ab3d7b52.jpg'}
                            title={'Saludable y Sostenible'}
                            text={'¡Disfruta de nuestros deliciosos panes y pasteles, sabiendo que cuidan del planeta tanto como de tu paladar!'}
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Sostenibilidad