import { useEffect, useState} from "react";
import { Meanings } from "./Meanings";
import { Description } from "./Descriptions";
import Synonyms from "./Synonyms";
import Acronyms from "./Acronyms";
import '../style.css'
import Audio from "./Audio";
import likesvg from '../iconmonstr-favorite-3.svg'
import { LikeBtn } from "./LikeBtn";

const Result = ({word, setView, darkmode, setFavoriteWords, favoriteWords}) => {
    const [selected, setSelected] = useState(word.meanings[0].partOfSpeech)
    const [audioIndex, setAudioIndex] = useState([])
    const meanings = Array.isArray(word.meanings) ? word.meanings : [];

    useEffect(() => {
      const filteredPhonetics = word.phonetics.filter(phonetic => phonetic.audio !== '');
    setAudioIndex(filteredPhonetics)
    },[])

    if (meanings.length > 1) {
        const uniquePartOfSpeech = new Set();
        meanings.forEach((meaning, index) => {
            if (uniquePartOfSpeech.has(meaning.partOfSpeech)) {
                let newName = `${meaning.partOfSpeech} ${index+1}`;
                while (uniquePartOfSpeech.has(newName)) {
                    newName = `${newName} 2`;
                }
                meanings[index] = { ...meaning, partOfSpeech: newName };
            }
            uniquePartOfSpeech.add(meaning.partOfSpeech);
        });
    }

    const goBack = () => {
        setView('start')
    }

    return(

        <div className="main">
          <i onClick={darkmode} className="gg-dark-mode custom-color"></i>
        <div>
            <p onClick={goBack}>Back to search</p>
            <div id="like">
            <h1>{word.word}</h1>
            <LikeBtn word={word} setFavoriteWords={setFavoriteWords} favoriteWords={favoriteWords} likesvg={likesvg}/>
            </div>
            <div id="sound">
        <ul className="list">
          {audioIndex.map((aud, index) => {
            return <li key={index}><Audio aud={aud} index={index}/></li>
          })}
          </ul>
          </div>
         <ul className="category">
            {meanings.map((meaning, index)=> {
                return(
                    <li className="categorylist" key={index}><Meanings meaning={meaning} selected={selected} setSelected={setSelected}/></li>
                )
            })}
            </ul>
            
        </div>
       
         <div className="description">
         {meanings.map((meaning, index) => {
           return (
             <div key={index}>
               {selected === meaning.partOfSpeech && <Description meaning={meaning} />}
             </div>
           )
         })}
       </div> 
       <div className="list">
       {meanings.map((meaning, index) => {
           return (
             <div key={index}>
               {selected === meaning.partOfSpeech && <Synonyms meaning={meaning} />}
             </div>
           )
         })}
         <div>
         {meanings.map((meaning, index) => {
          return(
            <div key={index}>
              {selected === meaning.partOfSpeech && <Acronyms meaning={meaning}/>}
              </div>
          )
         })}</div>
     </div>
     </div>
    )
}

export default Result