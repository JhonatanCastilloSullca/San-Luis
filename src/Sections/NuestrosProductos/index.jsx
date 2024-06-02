import { Container } from "@chakra-ui/react"
import CircleComponent from "../../Componentes/CircleComponent"

function NuestrosProductos() {
    return (
        <>
            <div className="bg-infoshade6 mx-auto w-full items-center justify-between p-2">
                <Container maxW='6xl' className="p-4">
                    <div className="title-section flex text-center items-center justify-center my-4">
                        <h2 className="text-secondaryshade4 text-4xl font-bold m-2" >Nuestros Productos</h2>
                    </div>
                    <div className="productos-category my-16">
                        <div className="flex space-x-4 items-center justify-between">
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Producto 1"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Producto 2"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Producto 3"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Producto 4"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Producto 5"
                            />
                        </div>
                    </div>
                </Container>
            </div>
            {/* COMPONETIZAR */}
            <div className="bg-white mx-auto w-full items-center justify-between py-4">
                <Container maxW='6xl' className="p-4 flex">
                    <div className="w-1/2 grid">
                        <h3 className="text-secondaryshade4 text-3xl font-bold m-2 w-96" >Tenemos los mejores productos para todos los momentos de tu día.</h3>
                        <img
                            src="http://localhost:1337/uploads/Osito_Trigo_min_bb1f4bf70d.jpeg"
                            alt="Nosotros"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-1/2">
                        <img
                            src="http://localhost:1337/uploads/nuestros_productos_798eb719b3.png"
                            alt="Nosotros"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default NuestrosProductos
