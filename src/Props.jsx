import PropTypes from 'prop-types'
import { Link } from "react-router";

export const Props = ({name, number}) => {
  return (
    <>
    <div>Ejemplo props: {name} & {number}</div>
    <Link to="/clase">
    Ir a clase
    </Link>
    </>

  )
}

Props.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
}

