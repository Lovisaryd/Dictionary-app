import { useState } from "react";

const Acronyms = ({meaning}) => {
    
    const acronyms = Array.isArray(meaning.acronyms) ? meaning.acronyms : [];
    const [visible, setVisible] = useState([acronyms[0], acronyms[1], acronyms[2], acronyms[3]])
    return(
        <div id="acro">
            <h3>Acronyms <span>{acronyms.length}</span></h3>
            <ul>
            {visible.map((desc, index)=> {
                return(
                    <li key={index}>
                        <p>{desc}</p>
                    </li>
                )
            })}
            </ul>
            { acronyms.length > 4 && <h6 onClick={() => setVisible(visible.length === 4 ? acronyms : [acronyms[0], acronyms[1], acronyms[2], acronyms[3]])}>...</h6>}

        </div>
    )
}

export default Acronyms