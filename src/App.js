import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>

  );
}

export default App;
