import { connect } from "react-redux"
import  ToDo  from "./ToDo"
import { addElementR, changeCheckboxR, removeElemR, seveTextR, addTextR } from "../../redux/toDo/toDoReducer"

export const mapStateProps = (state) => {
    return {
        todo : state.todo.array,
        text : state.todo.text,
    }
}


export default connect(mapStateProps,{addElementR, changeCheckboxR, removeElemR, seveTextR, addTextR})(ToDo)

