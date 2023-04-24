import { NewElem } from "./NewElem";
import { Element } from "./Element";
import s from "./ToDo.module.css";
import { useMemo, useState } from "react";



const ToDo = ({ text, todo, addElementR, changeCheckboxR, removeElemR,seveTextR, addTextR }) => {



  const memoToDo = useMemo(
    () =>
      todo.reduce(
        (acum, elem) => {
            acum[(elem.isActive ? 'c' : 'noC') + 'heck'].push(<Element key={elem.id} {...elem} seveTextR={seveTextR} changeCheckbox={changeCheckboxR} removeElem={removeElemR}/>)
            return acum; 
        },

        {
          check: [],
          noCheck: [],
        }
      ),
    [todo]
  );

  return (
    <div>
    
      <NewElem  addText={addTextR} textfromI={text} key={todo.id} addElement={addElementR}/>

      <div className={s.container}>
        {memoToDo.check}
        {memoToDo.noCheck}
      </div>
    </div>
  );
};

export default ToDo;
