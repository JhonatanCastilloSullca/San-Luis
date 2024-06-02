import { Container } from "@chakra-ui/react"
import TitleParrafo from "../../Componentes/TitleParrafo"
function SobreNosotros() {
    return (
        <div className="relative h-full flex items-center justify-center py-16">
            <Container maxW='6xl' className="p-4 flex relative z-10 justify-between">
                <div className="w-full align-middle items-center content-center">
                    <div className="sobre-nosotros-image py-8">
                        <div className="w-[520px] h-[380px] rounded-lg">
                            <img
                                src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                alt="producto"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 grid justify-end">
                    <div className="w-[450px] flex flex-col justify-center">
                        <TitleParrafo
                            Titulo="Sobre nosotros"
                            Contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                            Align="right"
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default SobreNosotros
