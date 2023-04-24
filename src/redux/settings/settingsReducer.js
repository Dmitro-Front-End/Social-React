
const styles = {
    theme : {
        body : 'black',
        color : 'white',
        button : 'green',
        a : 'white'
    },
    isAdmin : true,
    isAutorisation : true,
     
}

export const T = {
    SETINGS_CHANGE_THEME : 'SETINGS_CHANGE_THEME',
}


export const settingR = (state = styles, action) => {
    switch(action.type) {
        case T.SETINGS_CHANGE_THEME : return {...state, theme : action.el}
        default : return state
    }
}


export const changeTehemaR = (el) => {
    return {
        type : T.SETINGS_CHANGE_THEME,
        el : el,
    }
}