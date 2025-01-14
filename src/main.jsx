import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Clase } from './Clase.jsx'
import {Props} from './Props.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Props name='hola' number={8}/>
     <Props name='capibara'  number={10}/>
    <Clase/>
    <App />

   
  </StrictMode>,
)
