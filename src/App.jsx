import { Outlet } from 'react-router-dom';
import Cabecera from './Componentes/Header/index.jsx';
import Footer from './Componentes/Footer/index.jsx';

function App() {
  return (
    <div>
      <Cabecera />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
