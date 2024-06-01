import React from 'react';
import { Outlet } from 'react-router-dom';
import Cabecera from './Componentes/Header/index.jsx';

function App() {
  return (
    <div>
      <Cabecera />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
