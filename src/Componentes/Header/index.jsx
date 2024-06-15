import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logosinfondopng.png';
import { Container } from "@chakra-ui/react";

function Cabecera() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white sticky top-0 z-[20] mx-auto w-full items-center justify-between p-2 h-[90px]">
      <Container maxW='6xl'>
        <nav className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <NavLink to="/" className="text-gray-700 text-lg font-semibold">
              <img src={logo} alt="MiLogo" className="h-10" />
            </NavLink>
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
            <div className={`flex-col md:flex md:flex-row md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-sanluisgrey font-bold" : "text-sanluisgrey hover:text-sanluisdgrey hover:font-medium"
                }
                end
              >
                Inicio
              </NavLink>
              <NavLink
                to="/nosotros"
                className={({ isActive }) =>
                  isActive ? "text-sanluisgrey font-bold" : "text-sanluisgrey hover:text-sanluisdgrey hover:font-medium"
                }
              >
                Nosotros
              </NavLink>
              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  isActive ? "text-sanluisgrey font-bold" : "text-sanluisgrey hover:text-sanluisdgrey hover:font-medium"
                }
              >
                Productos
              </NavLink>
              <NavLink
                to="/sostenibilidad"
                className={({ isActive }) =>
                  isActive ? "text-sanluisgrey font-bold" : "text-sanluisgrey hover:text-sanluisdgrey hover:font-medium"
                }
              >
                Sostenibilidad
              </NavLink>
              <NavLink
                to="/trabaja"
                className={({ isActive }) =>
                  isActive ? "text-sanluisgrey font-bold" : "text-sanluisgrey hover:text-sanluisdgrey hover:font-medium"
                }
              >
                Trabaja con Nosotros
              </NavLink>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}

export default Cabecera;
