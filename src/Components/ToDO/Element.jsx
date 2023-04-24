import { useState } from 'react'
import s from './ToDo.module.css'
export const Element = ({isActive, text, id, changeCheckbox, removeElem, seveTextR}) => {

  const [ischange, setISChange] = useState(false)

  const [textInput, setTextInput] = useState(text)
   
    const saveText = () => {
        seveTextR(textInput, id)
    }

    return <div>
        <div className={s.elemCont}>
            <input type="checkbox" checked={isActive}
                onChange={() => changeCheckbox(id)}
            />
            {ischange === false ? <p
                onDoubleClick={() => setISChange(true)}
            >{textInput}</p> : <input type='text' value={textInput} autoFocus={true}
                onBlur={() => {
                    setISChange(false)
                    saveText()
                }}
                onChange={(e) => setTextInput(e.target.value)}
            />}
            <button 
                onClick={() => removeElem(id)}
            >X</button>
        </div>
    </div>
}



