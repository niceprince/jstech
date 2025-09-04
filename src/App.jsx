import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './Layout';
import WebDevelopment from './pages/WebDevelopment';
import GraphicDesigns from './pages/GraphicDesigns';
import PrintingServices from './pages/PrintingServices';

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "web-development",
        element: <WebDevelopment />
      },
      {
        path: "graphic-designs",
        element: <GraphicDesigns />
      },
      {
        path: "printing-services",
        element: <PrintingServices />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

function App() {
  return( 
    <RouterProvider router={routers} />
  )
}

export default App
