import { Container } from "@chakra-ui/react"
import TitleParrafo from "../../Componentes/TitleParrafo"

function TrabajaNosotro() {
    return (
        <div className="relative h-full flex items-center justify-center py-16">
            <Container maxW='8xl' className="p-4 flex relative z-10 justify-between">
                <div className="w-4/5 bg-infoshade6 h-[250px] rounded-[45px] relative flex items-center overflow-visible">
                    <div className="relative w-1/2 h-full flex place-content-center">
                        <img src="http://localhost:1337/uploads/slider4_a6436efc7e.jpg" className="absolute -top-[35px] w-[320px] h-[320px] object-cover rounded-lg shadow-3xl shadow-white" />
                    </div>
                    <div className="w-1/2 p-4 grid justify-items-center">
                        <TitleParrafo
                            Titulo={'Trabaja con nosotros'}
                            Contenido={'Enterate de las oportunidades que tenemos para ti'}
                            Align={'center'}
                        />
                        <button className="border-2 border-secondaryshade2 text-secondaryshade4 px-6 py-2 rounded-md m-2 text-xl font-medium hover:bg-secondaryshade2 hover:text-white transition duration-300 ease-in-out w-max">
                            Conoce más
                        </button>

                    </div>
                </div>
            </Container>
        </div>

    )
}

export default TrabajaNosotro
