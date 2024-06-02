import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Inicio from './Pages/Inicio/index.jsx'
import Historia from './Pages/Historia/index.jsx'
import Nosotros from './Pages/Nosotros/index.jsx'
import Productos from './Pages/Productos/index.jsx'
import Sostenibilidad from './Pages/Sostenibilidad/index.jsx'
import Trabaja from './Pages/Trabaja/index.jsx'
import NotFound from './Pages/notFound/index.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/historia', element: <Historia /> },
      { path: '/nosotros', element: <Nosotros /> },
      { path: '/productos', element: <Productos /> },
      { path: '/sostenibilidad', element: <Sostenibilidad /> },
      { path: '/trabaja', element: <Trabaja /> },
    ]
  },
  { path: '*', element: <NotFound /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
)
