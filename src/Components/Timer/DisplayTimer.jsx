import s from './Timer.module.css'


export const DisplayTimer = ({
    seconds,
    minutes,
    hours,
    timertOn,
    timerOff,
    addHistory,
    isStart,
    clearDisplayTimer,
    text,
  }) => {
  
  
  
    return (
  
        <div className={s.displayTimer}>
        <p className={s.num} style={{color:text}}>
          <span style={{color:text}} >{hours <= 9 ? "0" + hours : hours}</span>
          <span style={{color:text}} >:</span>
          <span style={{color:text}} >{minutes <= 9 ? "0" + minutes : minutes}</span>
          <span style={{color:text}} >:</span>
          <span style={{color:text}} >{seconds <= 9 ? "0" + seconds : seconds}</span>
        </p>
        <div className={s.btns}>
          <button  onClick={timertOn}>go</button>
  
        { isStart === true 
          ? <button onClick={addHistory}>check</button>
          : <button onClick={clearDisplayTimer}>clear</button>}
  
          <button onClick={timerOff}>stop</button>
        </div>
      </div>
   
      
    );
  };
  