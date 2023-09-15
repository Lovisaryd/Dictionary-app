import { useState } from "react";

const Synonyms = ({meaning}) => {
    
    const synonyms = Array.isArray(meaning.synonyms) ? meaning.synonyms : [];
    const [visible, setVisible] = useState([synonyms[0], synonyms[1], synonyms[2], synonyms[3]])
    return(
        <div>
            <h3>Synonyms <span>{synonyms.length}</span></h3>
            <ul>
            {visible.map((desc, index)=> {
                return(
                    <li key={index}>
                        <p>{desc}</p>
                    </li>
                )
            })}
            </ul>
            { synonyms.length > 4 && <h6 onClick={() => setVisible(visible.length === 4 ? synonyms : [synonyms[0], synonyms[1], synonyms[2], synonyms[3]])}>...</h6>}

        </div>
    )
}

export default Synonyms