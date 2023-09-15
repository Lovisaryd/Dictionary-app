import SearchBar from "./SearchBar"
import { useState } from "react"
import { search } from "./searchFunction"
import likesvg from '../iconmonstr-favorite-3.svg'

const SearchPage = ({setSearchedWords, searchedWords, setFavoriteWords, setView, setWord, darkmode, favoriteWords}) => {
    const [input, setInput] = useState('')
    const [foundWord, setFoundWord] = useState([])
    const [noWord, setNoWord] = useState(false)

    return(
      
       <div className="start">
        <div className="theme"></div>
        <i onClick={darkmode} className="gg-dark-mode custom-color"></i>
        <div className="column-container">
        <div className="column">
        <h1>Dictionary</h1>
        <SearchBar input={input} setInput={setInput} foundWord={foundWord} setFoundWord={setFoundWord} noWord={noWord} setNoWord={setNoWord} setSearchedWords={setSearchedWords} setFavoriteWords={setFavoriteWords} setView={setView} setWord={setWord} searchedWords={searchedWords}/>
        <h3>Recent</h3>
        <ul>
        {searchedWords.length !== 0 &&
          searchedWords.map((word, index) => (
              <li key={index}>
                <p onClick={() => search(word, setFoundWord, setNoWord, setSearchedWords, searchedWords)}>{word}</p>
              </li>
            ))}
        </ul>
         </div> 
         <div className="column" id="column2">
         <h3 id="recentsearch">Liked words<img className="heart-color" id="liked" src={likesvg} alt='liked' style={{fill: "purple"}}></img></h3>
          <ul>
          {favoriteWords.length !== 0 && favoriteWords.map((word, index) => (
              <li key={index} onClick={() => {setWord(word); setView('result')}}><p>{word.word}</p></li>
          ))}
          {favoriteWords.length === 0 && <p>Like a word to see it here</p>}
          </ul>
          
         </div></div> 
       </div>
    )
}

export default SearchPage