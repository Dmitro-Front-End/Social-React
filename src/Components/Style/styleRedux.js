import { connect } from "react-redux"
import  Style  from "./Style"

export const mapStateProps = (state) => {
    return {
        theme : state.styles.theme
    }
}



export default connect(mapStateProps)(Style) //