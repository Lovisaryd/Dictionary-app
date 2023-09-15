import { useState } from 'react';
import '../style.css'

export const Description = ({meaning}) => {
    const descriptions = Array.isArray(meaning.definitions) ? meaning.definitions : [];
    const [visible, setVisible] = useState([descriptions[0]])
    return(
        <div>
            <h3>Definitions <span>{descriptions.length}</span></h3>
            <ul id='definitions'>
            {visible.map((desc, index)=> {
                return(
                    <li key={index}>
                        <p><span>{index+1}.</span> {desc.definition}</p>
                    </li>
                )
            })}
            </ul>
            { descriptions.length > 1 && <h6 data-testid="collapse" onClick={() => setVisible(visible.length === 1 ? descriptions : [descriptions[0]])}>...</h6>}
        </div>
    )
}