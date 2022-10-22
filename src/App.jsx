import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ForgotPass from './Components/ForgotPass'
import Login from './Components/Login'
import Registro from './Components/Registro'
import './assets/Index.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login/> }/>
      <Route path='registro' element={ <Registro/> }/>
      <Route path='password' element={ <ForgotPass/> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
