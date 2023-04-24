
import { connect } from "react-redux"
import AboutMe from './AboutMe'


export const mapStateProps = (state) => {
        
    return {
        array : state.array
    }
}


export default connect(mapStateProps)(AboutMe)