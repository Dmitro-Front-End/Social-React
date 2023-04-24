
import { connect } from "react-redux"
import  Home  from "./Home"

export const mapStateProps = (state) => {
    return {
        data : state.data,
        test : 'hello'
    }
}



export default connect(mapStateProps)(Home)