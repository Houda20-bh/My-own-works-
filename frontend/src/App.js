
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Componants/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/user/register' element={<Register/>} />
      <Route path='/user/login' element={<Login/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
