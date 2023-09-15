import { useEffect, useState } from "react"

export const Meanings = ({meaning, selected, setSelected}) => {
    const [clicked, setclicked] = useState(false)
    useEffect(()=> {
        
        if(selected === meaning.partOfSpeech){
            setclicked(true)
        }else {
            setclicked(false)
        }
    },[meaning.partOfSpeech, selected])

    const click = (e) => {
        setSelected(meaning.partOfSpeech)
    }
    return(
        <div>
            <p className="type" id={clicked ? 'selected' : ''} onClick={(event)=> click(event)}>{meaning.partOfSpeech}</p>
        </div>
    )
}