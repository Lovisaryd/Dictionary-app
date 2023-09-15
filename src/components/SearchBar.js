import {search} from './searchFunction'

const SearchBar = ({setSearchedWords, setFavoriteWords, setWord, setView, searchedWords, input, setInput, setFoundWord, foundWord, noWord, setNoWord}) => {

    const keyHandler = (key) => {
        if(key.code === 'Enter'){
            //enter click triggers search function
            search(input, setFoundWord, setNoWord, setSearchedWords, searchedWords)
        }
    }
        // saves result in state and takes to result page with descriptions
    const chooseWord = (word) => {
        setWord(word)
        setView('result')
    }

    const Word = ({word}) => {
        return(
            <div>
               <p data-testid='result' onClick={()=> chooseWord(word)}>{word.word} [{word.phonetic}]</p>
            </div>
           
        )
    }
    
    return(
        <div>
            <input type='text' placeholder="Search and find out..." onChange={(event) => setInput(event.target.value)} onKeyDown={(key) => keyHandler(key)}></input>
            <ul>
                {noWord && <p>Word doesn't exist</p>}
            {!noWord && foundWord.map((word, index) => {
                return(
                  <li key={index}><Word word={word}/></li>
                ) 
            })}
            </ul>
        </div>
    )
}

export default SearchBar