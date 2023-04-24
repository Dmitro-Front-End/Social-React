
export const data = [  
    {
        text : 'HTML',
        isActive : true,
        id : 'aslkd9201'
    },
    {
        text : 'CSS',
        isActive : false,
        id : 'kaslad0912'
    },
    {
        text : 'JS',
        isActive : true,
        id : 'okaed0-q'
    },
    {
        text : 'React',
        isActive : true,
        id : 'kl0d-oadq'
    },
]


export const dataReducer = (state = data, active) => {
    switch(active.type) {
        default : return state
    }
}