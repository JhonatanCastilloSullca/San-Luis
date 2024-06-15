import { Container } from "@chakra-ui/react"
import HeroSection from "../../Componentes/HeroSection"
import TitleParrafo from "../../Componentes/TitleParrafo"
import CircleComponent from "../../Componentes/CircleComponent"

function Nosotros() {
    return (
        <>
            <HeroSection
                image="./src/assets/servicios/tostadasblancas2.jpg"
                title="Sobre nosotros"
                subtitle="Conoce nuestra historia y por que San Luis es tu mejor opción"
                position="center"
                size="50vh"
            />

            <div className="mx-auto w-full items-center justify-between py-10 bg-white">
                <Container maxW='6xl' className="p-4 grid relative z-10 justify-between">
                    <div className="flex justify-between">
                        <div className="w-1/2 align-middle items-center content-center">
                            <div className="sobre-nosotros-image py-8">
                                <div className="w-full rounded-lg overflow-hidden px-12">
                                    <h2 className={`text-left text-secondaryshade4 text-3xl font-bold py-4`}>Misión</h2>
                                    <p className={`leading-7 text-justify text-base`}>
                                        Elaborar productos alimenticios (Panadería y Pastelería) con altos estándares de Calidad y buenas prácticas de manufactura (BPM), promoviendo el consumo saludable de productos frescos y de alto valor nutricional para beneficio del mayor número posible de familias, orientándonos siempre en la mejora continua de nuestras operaciones y en el desarrollo de nuestro personal.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 align-middle items-center content-center">
                            <div className="sobre-nosotros-image py-8">
                                <div className="w-full rounded-lg overflow-hidden px-12">
                                    <h2 className={`text-left text-secondaryshade4 text-3xl font-bold py-4`}>Visión</h2>
                                    <p className={`leading-7 text-justify text-base`}>
                                        INDUSTRIAS ALIMENTARIAS SAN LUIS, tiene clara su visión de ser líder en panificación y una de las mejores empresas alimenticias del país, promoviendo el cuidado de la salud y la alimentación de sus clientes
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <h2 className={`text-center text-secondaryshade4 text-3xl font-bold py-4`}>Nuestra Historia</h2>

                    <TitleParrafo
                        Contenido="La Panificadora San Luis inició sus actividades en la ciudad del Cusco, el 4 de mayo de 1997, en un local de alquiler y acondicionado, en el Conjunto Habitacional Hilario Mendívil, ubicado en el distrito de Wanchaq. En ese entonces, los fundadores de la pequeña empresa estaban motivados en promover un negocio dedicado a elaboración de panes frescos del día, de buena calidad, nutritivos y sobre todo procesados con mucha higiene, para satisfacer las necesidades de consumo de pan saludable de las familias de los alrededores de dicho Conjunto Habitacional."
                    />
                    <TitleParrafo
                        Contenido="Los impulsores de este emprendimiento fueron Sergio López y su esposa Kattia Pinto, inquietados en desarrollar un nuevo concepto en el consumo de pan de las familias de Cusco."
                    />
                    <TitleParrafo
                        Contenido="Sus operaciones iniciales en este punto duraron menos de dos años, para dar paso a la construcción de una planta industrial propia, pequeña al principio donde, con la misma filosofía y conceptos mejorados, empezaron la producción de diferentes tipos de panes embolsados que hoy constituyen el orgullo y satisfacción de sus promotores por la aceptación y creciente preferencia de las familias cusqueñas, que se han tornado exigentes no solo en la calidad de los productos de panificación que consumen, sino también en términos de valoración de la nutrición y salubridad en su alimentación diaria."
                    />
                    <TitleParrafo
                        Contenido="A base de mucho trabajo y pasión por la calidad, hoy la empresa transformada en INDUSTRIAS ALIMENTARIAS SAN LUIS E.I.R.L. elabora productos de panificación de reconocida preferencia, con permanente exigencia para mejorar la calidad de los mismos, utilizando insumos frescos de primera calidad, con la mejor tecnología alimentaria del país, con procesos productivos sumamente higiénicos y procesos sanitarios de estándares internacionales."
                    />
                    <TitleParrafo
                        Contenido="Sus productos se distribuyen diariamente en las principales cadenas de supermercados y bodegas de la ciudad del Cusco y algunas ciudades de la región Sur Oriente de nuestro país."
                    />
                    {/* <h2 className={`text-center text-secondaryshade4 text-3xl font-bold py-4`}>Nuestro Equipo</h2>
                    <div className="productos-category my-16">
                        <div className="flex space-x-4 items-center justify-between">
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Sergio López"
                                profesion="Fundador/Gerente"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Kattia Pinto"
                                profesion="Fundador/Gerente"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Justino Cacha"
                                profesion="Fundador/Gerente"
                            />
                            <CircleComponent
                                imageUrl="http://localhost:1337/uploads/Molde_blanco_x_820g_3c876d5480.jpg"
                                name="Javier Yupanqui"
                                profesion="Fundador/Gerente"
                            />
                        </div>
                    </div> */}

                </Container>
            </div>


        </>
    )
}
export default Nosotros