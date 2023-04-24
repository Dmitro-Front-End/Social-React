import { connect } from "react-redux"
import  Settings  from "./Settings"
import { changeTehemaR } from "../../redux/settings/settingsReducer"

export const mapStateProps = (state) => {
  
    return {
        theme : state.styles.theme,
    }
}


export default connect(mapStateProps,{changeTehemaR})(Settings)