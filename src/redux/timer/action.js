import { T } from "../types";

export const timeSecondsR = () => {
    return {
      type: T.TIMER_SECONDS,
    };
  };
  
  export const timerMinutesR = () => {
    return {
      type: T.TIMER_MINUTES,
    };
  };
  
  export const timerHoursR = () => {
    return {
      type: T.TIMES_HOURS,
    };
  };
  
  export const clearDisplayR = () => {
    return {
      type: T.TIMERS_CLEAR_DISPLAY,
    };
  };
  
  export const timerStartR = (isStart) => {
      return {
          type : T.TIMERS_START,
          isStart 
      }
  }
  
  export const addHistoryR = (h,m,s) => {
    return {
      type: T.TIMER_ADD_HISTORY,
      hours : h,
      minutes : m,
      seconds : s,
    };
  };
  
  
  export const deleteElementTimeR = (index) => {
      return {
          type :T.TIMES_DELETE_ELEMENT,
          index
      }
  }
  