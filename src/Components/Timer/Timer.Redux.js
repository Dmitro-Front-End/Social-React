import { connect } from "react-redux"
import  Timer  from "./Timer"
import { addHistoryR, timeSecondsR, timerMinutesR, timerHoursR, timerStartR, clearDisplayR, deleteElementTimeR} from "../../redux/timer/action"

export const mapStateProps = (state) => {
    const {isStart, seconds, minutes, hours, arrayTimes} = state.timer;
    return {
        
        seconds : seconds,
        minutes : minutes,
        hours : hours,
        isStart : isStart,
        arrayTimes : arrayTimes
       
    }
}


export default connect(mapStateProps,{addHistoryR, timeSecondsR, timerMinutesR, timerHoursR, timerStartR, clearDisplayR, deleteElementTimeR})(Timer)