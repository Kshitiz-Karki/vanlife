import PropTypes from "prop-types"

const Label = ({ vanType }) => {

  let background

  switch (vanType) {
    case "simple":
      background = "#E17654"
      break;
    case "rugged":
      background = "#115E59"
      break;
    default:
      background = "#161616"
      break;
  }

  const style = {
    background
  }
  return (
    <>
      <span style={style} className='van__type'>{vanType}</span>
    </>
  )
}

Label.propTypes = {
  vanType: PropTypes.string,
};

export default Label