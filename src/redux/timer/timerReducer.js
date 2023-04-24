import { T } from "../types";

export const timer = {
isStart: false,
  seconds: 0,
  minutes: 0,
  hours: 0,
  arrayTimes : [],
};



export const timerReducer = (state = timer, action) => {

  switch (action.type) {
    case T.TIMER_SECONDS:
      return {
        ...state,
        seconds: state.seconds === 59 ? 0 : state.seconds + 1,
      };

    case T.TIMER_MINUTES:
      return {
        ...state,
        minutes: state.minutes === 59 ? 0 : state.minutes + 1,
      };

    case T.TIMES_HOURS:
      return { ...state, hours: state.hours === 24 ? 0 : state.hours + 1 };

    case T.TIMERS_CLEAR_DISPLAY:
      return { ...timer };
    //   return { ...state, hours : 0, minutes : 0, seconds : 0 };

    case T.TIMERS_START : return {...state, isStart : action.isStart}  

    case T.TIMER_ADD_HISTORY : return {...state, arrayTimes : [...state.arrayTimes,`
    ${action.hours <= 9 ? '0' + action.hours : action.hours}:
    ${action.minutes <= 9 ? '0' + action.minutes : action.minutes}:
    ${action.seconds <= 9 ? '0' + action.seconds : action.seconds}`]}

    case T.TIMES_DELETE_ELEMENT : return {...state, arrayTimes : state.arrayTimes.filter((el,index) => index !== action.index)}
    default:
      return state;
  }
};
