import PropTypes from "prop-types";
 
const Paragrafo = ({children, color, textColor, textType}) => {
    return <p style={{ backgroundColor: color, textTransform: textType, color: textColor }}>{children}</p>
}

Paragrafo.propTypes = {
   children: PropTypes.string,
   color: PropTypes.string,
   textColor: PropTypes.string,
   textType: PropTypes.string,
}

export default Paragrafo;