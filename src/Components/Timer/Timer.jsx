import s from './Timer.module.css'


import { DisplayTimer } from './DisplayTimer'
import { HistoryTimer } from './HistoryTimer'
import { useContext, useEffect, useState } from 'react'
// import { ThemeContext } from '../../data/theme'



let isStop = false;



 const Timer = ({ 
    isStart, 
    seconds, 
    minutes, 
    hours, 
    arrayTimes,
    timeSecondsR, 
    timerMinutesR, 
    timerHoursR, 
    timerStartR, 
    clearDisplayR, 
    addHistoryR, 
    deleteElementTimeR}) => {
   
  
  const addHistory = () => {
    addHistoryR(hours,minutes,seconds)
  }

  const deleteElementTime = (ind) => {
    deleteElementTimeR(ind)


}

   
    useEffect(()=>{
       if(isStart === false) return; 
        setTimeout(() => {  
            if (isStop === false) return 
                timeSecondsR() 
            if (seconds === 59) { 
               timerMinutesR()  
            } 
            if (minutes === 59 && seconds === 59) { 
                timerHoursR() 
            }
        },1000)
    },[seconds,isStart]) 


    const clearDisplayTimer = () => {
        clearDisplayR()
    }

    const timertOn = () => {isStop = true;timerStartR(true)}
    const timerOff = () => {isStop = false;timerStartR(false)}

    return <div className={s.fon}>
        <div className={s.timers}>
        <DisplayTimer 
        // text={thema.text}
         addHistory={addHistory}
         seconds={seconds} 
         minutes={minutes} 
         hours={hours} 
         timertOn={timertOn} 
         timerOff={timerOff} 
         isStart={isStart} 
         clearDisplayTimer={clearDisplayTimer} />
        <HistoryTimer arrayTimes={arrayTimes}   deleteElementTime={deleteElementTime}/>
    </div>
    </div>
    
}








export default Timer