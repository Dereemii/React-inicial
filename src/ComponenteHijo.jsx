import PropTypes from 'prop-types'

export const ComponenteHijo = ({children}) => {
  return (
    <>
    <h1>Componente Hijo </h1>
    {children}
    </>
  
  )
}

ComponenteHijo.propTypes = {
    children: PropTypes.node
}

