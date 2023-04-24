import id from 'shortid'

const data = {
  array :  [
    {
      text: "HTML",
      isActive: true,
      id: "aslkd9201",
    },
    {
      text: "CSS",
      isActive: false,
      id: "kaslad0912",
    },
    {
      text: "JS",
      isActive: true,
      id: "okaed0-q",
    },
    {
      text: "React",
      isActive: true,
      id: "kl0d-oadq",
    },
  ],
  text : ''
}



export const T = {
  TODO_ADD_ELEMENT : 'TODO_ADD_ELEMENT',
  TODO_CHANGE_CHECKBOX : 'TODO_CHANGE_CHECKBOX',
  TODO_REMOVE_ELEMENT : 'TODO_REMOVE_ELEMENT',
  TODO_ELEM_SAVE_TEXT : 'TODO_ELEM_SAVE_TEXT',
  TODO_ADD_TEXT : 'TODO_ADD_TEXT',
}



export const toDoR = (state = data, action) => {
 
  switch (action.type) {
    case T.TODO_ADD_ELEMENT : return {...state, array :[...state.array,{text : state.text, isActive : false, id : id()}], text : ''}
    
    case T.TODO_CHANGE_CHECKBOX : return {...state, array : state.array.map((el) => {
      if (el.id === action.id) return {...el, isActive : !el.isActive} 
      return el
    })}

    case T.TODO_REMOVE_ELEMENT : return {...state, array : state.array.filter(el => {
      if (el.id === action.id) return  false
      return true
    
    })
    }

   case T.TODO_ELEM_SAVE_TEXT : return {...state , array : state.array.map(el => {
    if (el.id === action.id)  return {...el, text : action.text}
    return el
   })}

   case T.TODO_ADD_TEXT : return {...state, text : action.val}

    default:
      return state;
  }
};

export const addTextR = (val) => {
  return {
    type : T.TODO_ADD_TEXT,
    val : val
  }
}

export const addElementR = () => {
  return {
    type : T.TODO_ADD_ELEMENT,
   
  }
}


export const changeCheckboxR = (id) => {
  return {
    type : T.TODO_CHANGE_CHECKBOX,
    id : id
  }
}



export const removeElemR = (id) => {
  return {
    type : T.TODO_REMOVE_ELEMENT,
    id :id
  }
}


export const seveTextR = (text, id) => {
  return {
    type : T.TODO_ELEM_SAVE_TEXT,
    text : text,
    id : id,
  }
}