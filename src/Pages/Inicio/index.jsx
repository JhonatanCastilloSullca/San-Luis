
import Certificaciones from '../../Sections/Certificaciones';
import NuestrosProductos from '../../Sections/NuestrosProductos';
import Productos from '../../Sections/Productos';
import SliderSection from '../../Sections/SliderSection';
import SobreNosotros from '../../Sections/SobreNosotros';
import Sostenibilidad from '../../Sections/Sostenibilidad';
import TrabajaNosotro from '../../Sections/TrabajaNosotros';

function Inicio() {
    return (
        <>
            <SliderSection />
            <NuestrosProductos />
            <Productos />
            <Certificaciones />
            <SobreNosotros />
            <Sostenibilidad />
            <TrabajaNosotro />
        </>
    )
}
export default Inicio