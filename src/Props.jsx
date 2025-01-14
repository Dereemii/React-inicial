import PropTypes from 'prop-types'

export const Props = ({name, number}) => {
  return (
    <div>Ejemplo props: {name} & {number}</div>
  )
}

Props.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
}

