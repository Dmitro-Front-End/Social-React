import { connect } from "react-redux"
import LogOut from "./LogOut"


export const mapStateprops = (state) => {
    return {
        obj : state.obj,
        name : 'dima',
    }
}


export default connect(mapStateprops)(LogOut)