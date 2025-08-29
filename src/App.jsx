import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './Layout';
import TestContext from './pages/TestContext';

import MyContext from './context/MyContext';

const routers = createBrowserRouter([
  {
    path: "/rt-test",
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
        path: "test-context",
        element: <TestContext />
      }
    ]
  }
]);

const contextData = {
  data: "This is my data",
  name: "my name is Prince",
  age: 36
}

function App() {
  return( 
    <Provider store={store}>
      <MyContext.Provider value={contextData}>
        <RouterProvider router={routers} />
      </MyContext.Provider>
    </Provider>
  )
}

export default App
