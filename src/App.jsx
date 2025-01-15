import { useEffect, useState } from 'react' // hook: que maneja un estado
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Item } from './Item'


function App() {
  const [count, setCount] = useState(0) // hook
  const [valor, setValor] = useState(10)

  // Hook de "efecto"
  useEffect(() => {
  
    return () => {
  
    }
  }, [])
  

  const myFunction = () => {
    setCount((count) => count + 1)
  }

  const myFunctionValor = () => {
    setValor(valor + 1)
  }
  


 // count : variable que almacena un valor 
 // setCount : la función que setea un nuevo valor o también
 // que "vigila" el nuevo valor que va a tener count
 // useState(0) : va a indicar el valor INICIAL de la variable

  return (
    <> 
    <h1>Lista</h1>
    <ul>
      <Item 
      name="uno"
      isPacked={true}
      />
      <Item
      name="perro"
      isPacked={false}
      />
    </ul>
      {/*Fragment  */}
      {/* <ComponenteHijo>
      <h3>hola soy el hijo</h3>
      </ComponenteHijo> */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div onClick={myFunctionValor}>
soy valor {valor}
      </div>
      <div className="card">
      <button onClick={myFunction}>
        {/* <button onClick={() => setCount((count) => count + 2)}> */}
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">

        Click on the Vite and React logos to learn more
      </p>
      
      
  
    </>
  )
}

export default App
