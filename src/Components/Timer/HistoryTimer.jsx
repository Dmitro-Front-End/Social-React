import s from './Timer.module.css'


export const HistoryTimer = ({arrayTimes,deleteElementTime}) => {




    return <div className={s.historyTimers}>
        {arrayTimes.map((el,ind) => {
            return <div onClick={() => deleteElementTime(ind)} className={s.timeDiv} key={ind}>{el}</div>
        })}
    </div>
}
