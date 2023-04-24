

 const Style = ({theme}) => {  ///  {props : ...}

    console.log(theme);

    return <style>{`
        body { 
            background : ${theme.body};
            color : ${theme.color};
            
        }
        button {
            background : ${theme.button};
        }
        a {
            color : ${theme.color};
        }

    `}</style>
}


export default Style