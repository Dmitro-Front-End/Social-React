import './settings.scss'

const data = [
   {
     body : 'black',
    color : 'white',
    button : 'green',
    a : 'white'
    },
   {
    body : 'white',
    color : 'black',
    button : 'red',
    a : 'black'
    },
]


 const Settings = ({theme, changeTehemaR}) => {

    
    return <div className={'container flex-beetween'}>
        {data.map(el => {
           return <div key={el.color} className={'thema center'} style={{background : el.body}}>
                <button  className={'btn'} style={{background : el.button, color : el.color}}
                   onClick={() => changeTehemaR(el)}
                >white</button>
            </div>
        })}

    </div>
}


export default Settings