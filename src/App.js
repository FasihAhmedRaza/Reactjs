import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from './screens/Register';
import { Provider } from 'react-redux'
import store from './Store/Store';
import Contact from './screens/Contact';

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/",
    element: <div>helllo  world!</div>,
  }
]);

function App() {
  return (
    <div>
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
        
    </div>
  );

}

export default App;
