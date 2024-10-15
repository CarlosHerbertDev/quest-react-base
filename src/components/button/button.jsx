import PropTypes from "prop-types";

const Button = ({label, showLabelButton}) => {
    return <button onClick={() => showLabelButton(label)}>{label}</button>
}


Button.proType = {
    lanbel: PropTypes.string,
    showLabelButton: PropTypes.func,
}



export default Button