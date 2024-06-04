import { NavLink } from "react-router-dom";
import logo from '../../assets/logosinfondopng.png';
import { Container } from "@chakra-ui/react";


function Cabecera() {
  return (
    <div className="bg-white sticky top-0 z-[20] mx-auto w-full items-center justify-between p-2 h-[90px]">
      <Container maxW='6xl' className="">
        <nav className="p-4">
          <div className="container mx-auto flex justify-between items-center">
            <NavLink to="/" className="text-gray-700 text-lg font-semibold">
              <img src={logo} alt="MiLogo" className="h-10" />
            </NavLink>
            <div className="flex space-x-4">
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
