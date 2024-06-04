import { Container } from "@chakra-ui/react"
import logo from '../../assets/logosinfondopng.png';
import { NavLink } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import './index.css'


function Footer() {
    return (
        <div className="mx-auto w-full items-center justify-between py-10 bg-secondaryshade4 footer-border">
            <Container maxW='6xl' className="">
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-white">
                        <img src={logo} alt="MiLogo" className="h-24" />
                    </div>
                    <div className="grid px-16">
                        <div className="title-section-footer text-center mb-4">
                            <h3 className="text-white font-bold text-xl">
                                Acerca de San Luis
                            </h3>
                        </div>
                        <div className="content-section-footer text-start">
                            <div className="grid">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? "text-white font-bold" : "text-white hover:text-infoshade2 hover:font-medium"
                                    }
                                    end
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    to="/nosotros"
                                    className={({ isActive }) =>
                                        isActive ? "text-white font-bold" : "text-white hover:text-infoshade2 hover:font-medium"
                                    }
                                >
                                    Nosotros
                                </NavLink>
                                <NavLink
                                    to="/productos"
                                    className={({ isActive }) =>
                                        isActive ? "text-white font-bold" : "text-white hover:text-infoshade2 hover:font-medium"
                                    }
                                >
                                    Productos
                                </NavLink>
                                <NavLink
                                    to="/sostenibilidad"
                                    className={({ isActive }) =>
                                        isActive ? "text-white font-bold" : "text-white hover:text-infoshade2 hover:font-medium"
                                    }
                                >
                                    Sostenibilidad
                                </NavLink>
                                <NavLink
                                    to="/trabaja"
                                    className={({ isActive }) =>
                                        isActive ? "text-white font-bold" : "text-white hover:text-infoshade2 hover:font-medium"
                                    }
                                >
                                    Trabaja con Nosotros
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col px-16 items-start">
                        <div className="title-section-footer text-center mb-2">
                            <h3 className="text-white font-bold text-xl">
                                Servicio al Cliente
                            </h3>
                        </div>
                        <div className="content-section-footer text-start">
                            <div className="grid">
                                <h4 className="text-white">
                                    De Lunes a Sábado
                                </h4>
                                <h4 className="text-white">
                                    9:00 am a 7:00 pm
                                </h4>
                            </div>
                        </div>
                        <div className="title-section-footer text-center mb-2 mt-8">
                            <h3 className="text-white font-bold text-xl">
                                Redes Sociales
                            </h3>
                        </div>
                        <div className="content-section-footer text-start">
                            <div className="grid">
                                <SocialLinks
                                    titulo="Facebook: www.facebook.com"
                                    link="http://www.facebook.com"
                                />
                                <SocialLinks
                                    titulo="Instagram: www.instagram.com"
                                    link="http://www.instagram.com"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer
