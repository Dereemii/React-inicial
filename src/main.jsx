import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Clase } from './Clase.jsx'
import {Props} from './Props.jsx'
import { BrowserRouter, Route, Routes } from "react-router";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <Props name='hola' number={8}/>
     <Props name='capibara'  number={10}/>
    <Clase/> */}
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/clase" element={<Clase />} />
    <Route path="/props" element={<Props />} />
    </Routes>
   
    </BrowserRouter>
  </StrictMode>,
)
