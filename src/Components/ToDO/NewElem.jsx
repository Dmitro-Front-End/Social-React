

export const NewElem = ({ addElement, addText, textfromI}) => {

    
    
    return <div>
        <input type="text" value={textfromI}
            onChange={(e) => addText(e.target.value)}
        />
        <button
            onClick={addElement}
        >add-elem</button>
    </div>
}