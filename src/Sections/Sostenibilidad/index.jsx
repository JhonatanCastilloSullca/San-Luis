import { Container } from "@chakra-ui/react"
import DataSostenibilidad from "../../Data/Sostenibilidad.json"

function Sostenibilidad() {
    return (

        <>
            <div className="bg-infoshade6 mx-auto w-full items-center justify-between p-2">
                <Container maxW='6xl' className="p-4">
                    <div className="title-section flex flex-col md:flex-row text-center items-center justify-center my-4">
                        <h2 className="text-secondaryshade4 text-4xl font-bold m-2" >Sostenibilidad</h2>
                    </div>
                </Container>
                <Container maxW='6xl' className="px-4 flex  flex-col md:flex-row relative z-10 justify-between">
                    <div className="w-full md:w-1/2 grid justify-end">
                        <div className="sobre-nosotros-image px-12 py-8">
                            <div className="w-full md:w-[520px] h-full rounded-lg">
                                <img
                                    src="../src\assets\portfolio\equipo4.jpg"
                                    alt="producto"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 grid justify-end">
                        <div className="w-full md:w-[520px] flex flex-col justify-center py-4 gap-4">




                            {DataSostenibilidad.map((item, index) => (
                                <div key={index} className="flex bg-white rounded-lg shadow-lg px-6 py-2 mb-4">
                                    <div className="w-1/6 flex justify-center items-center align-middle">
                                        <img
                                            src={item.icono}
                                            alt={item.producto}
                                            className="w-16 h-16 object-cover rounded-lg"
                                        />
                                    </div>
                                    <div className="w-5/6 ps-4">
                                        <h3 className="text-3xl font-bold text-black">
                                            {item.producto}
                                        </h3>
                                        <p className="text-gray-600">
                                            {item.descripcion}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Sostenibilidad
