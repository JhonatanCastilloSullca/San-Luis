import { Container } from "@chakra-ui/react"
import HeroSection from "../../Componentes/HeroSection"
import TitleParrafo from "../../Componentes/TitleParrafo"
import ContactForm from "../../Componentes/ContactForm"
import DistribuidorForm from "../../Componentes/DistribuidorForm"
import { useEffect, useState } from "react"
import './index.css'


function Trabaja() {
    const [selectedOption, setSelectedOption] = useState('trabajaConNosotros');

    const handleChangeOption = (option) => {
        setSelectedOption(option);
    };
    useEffect(() => {
        console.log(selectedOption);
    }, [selectedOption]);
    return (
        <>
            <HeroSection
                image="http://localhost:1337/uploads/slider2_09ab3d7b52.jpg"
                title={'Trabaja con nosotros'}
                subtitle="Where to grow your business as a photographer: site or social media?"
                position="center"
                size="50vh"
            />
            <div className="mx-auto w-full items-center justify-between py-10 bg-white">
                <Container maxW='6xl' className="p-2 flex items-center justify-center">
                    <div className="w-1/2 align-middle items-center content-center">
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
                        <div className="w-full flex flex-col justify-center px-12">
                            <h4 className="text-xl font-bold text-center text-secondaryshade5" >Somos una comunidad de más de 138 mil personas, a lo largo de los 33 países en donde operamos.</h4>
                            <p className="text-justify text-normal leading-8 mt-8">
                                La persona va al centro de todo lo que hacemos y convencidos de que la diversidad nos enriquece, brindamos acceso equitativo a oportunidades para construir el potencial de cada persona, creamos un entorno donde cada colaborador se siente valorado, respetado y parte de la empresa al compartir un propósito común: Alimentar un mundo mejor.
                            </p>
                        </div>
                    </div>
                </Container>
                <Container maxW='6xl' className="p-2 flex items-center justify-center">
                    <div className="cursor-pointer hover:bg-primaryshade2 hover:text-white w-1/2 align-middle items-center content-center h-24 border-b-4 border-primaryshade4 duration-500 rounded-md" onClick={() => setSelectedOption('trabajaConNosotros')}>
                        <div className="flex px-4">
                            <div className="w-24">
                                <img
                                    src="http://localhost:1337/uploads/icono_botella_fa8d49c70d.jpg"
                                    alt="producto"
                                    className="w-18 h-18 object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <h3 className="text-4xl font-bold text-center text-primaryshade3">
                                    Trabaja con nosotros
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer hover:bg-secondaryshade3 hover:text-white w-1/2 align-middle items-center content-center h-24 border-b-4 border-secondaryshade3 duration-500 rounded-md" onClick={() => setSelectedOption('seUnDistribuidor')}>
                        <div className="flex px-4">
                            <div className="w-24">
                                <img
                                    src="http://localhost:1337/uploads/icono_botella_fa8d49c70d.jpg"
                                    alt="producto"
                                    className="w-18 h-18 object-cover rounded-lg"
                                />
                            </div>
                            <div className="w-full flex justify-center items-center">
                                <h3 className="text-4xl font-bold text-center text-secondaryshade2">
                                    Se un distribuidor
                                </h3>
                            </div>
                        </div>
                    </div>
                </Container>
                {selectedOption === 'trabajaConNosotros' &&
                    <Container maxW='6xl' className="p-2 flex items-center justify-center">
                        <div className="w-1/2 ">
                            <div className="sobre-nosotros-image py-8">
                                <div className="w-[520px] rounded-lg">
                                    <h3 className="text-2xl font-bold text-left py-4 text-primaryshade3">
                                        Trabaja con nosotros
                                    </h3>
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full flex flex-col justify-center px-12">
                                <ContactForm />
                            </div>
                        </div>
                    </Container>
                }
                {selectedOption === 'seUnDistribuidor' &&
                    <Container maxW='6xl' className="p-2 flex items-center justify-center">
                        <div className="w-1/2">
                            <div className="w-full flex flex-col justify-center px-12">
                                <DistribuidorForm />
                            </div>
                        </div>
                        <div className="w-1/2 ">
                            <div className="sobre-nosotros-image py-8">
                                <div className="w-[520px] rounded-lg">
                                    <h3 className="text-2xl font-bold text-right py-4 text-secondaryshade3">
                                        Se un distribuidor
                                    </h3>
                                    <img
                                        src="http://localhost:1337/uploads/panintegral1_fd9a0cd578.jpg"
                                        alt="producto"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                }



            </div>

        </>
    )
}
export default Trabaja