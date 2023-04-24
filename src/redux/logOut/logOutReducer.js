export const obj = {
    'sa21dda' : {
        text : 'HTML',
        isActive : true,
    },
    'laskj12' : {
        text : 'CSS',
        isActive : false,
    },
    'akjsdhas' : {
        text : 'JS',
        isActive : true,
    },
    'lsajdls' : {
        text : 'React',
        isActive : true,
    },
}



export const objReducer = (state = obj, active) => {
    switch(active.type) {
        default : return state
    }
}