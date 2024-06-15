import { Container } from "@chakra-ui/react"
import TitleParrafo from "../../Componentes/TitleParrafo"
import { NavLink } from "react-router-dom"
function SobreNosotros() {
    return (
        <div className="relative h-full flex items-center justify-center py-16">
            <Container maxW='6xl' className="p-4 flex flex-col md:flex-row relative z-10 justify-between">
                <div className="w-full align-middle items-center content-center">
                    <div className="sobre-nosotros-image py-8">
                        <div className="w-full md:w-[520px] h-[380px] rounded-lg">
                            <img
                                src="./src\assets\general\mision.jpg"
                                alt="producto"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 grid justify-end">
                    <div className="w-full md:w-[450px] flex flex-col items-end">
                        <TitleParrafo
                            Titulo="Sobre nosotros"
                            Contenido="Usamos una técnica de panificación que se centra en la elaboración de pan a partir de ingredientes frescos y de alta calidad, utilizando métodos tradicionales de amasado y horneado. A menudo, se utiliza levadura natural en lugar de aditivos químicos para producir panes sabrosos y nutritivos."
                            Align="right"
                        />
                        <NavLink to="/nosotros" className="border-2 border-secondaryshade2 text-secondaryshade4 px-6 py-2 rounded-md m-2 text-xl font-medium hover:bg-secondaryshade2 hover:text-white transition duration-300 ease-in-out w-max">
                            Conoce más
                        </NavLink>
                    </div>

                </div>
            </Container>
        </div>
    )
}
export default SobreNosotros
