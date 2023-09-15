export const search = async (input, setFoundWord, setNoWord, setSearchedWords, searchedWords) => {
    const newinput = input.toLocaleLowerCase()
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${newinput}`)
   if(response.status === 200){
    const result = await response.json()
     setNoWord(false)
       setFoundWord(result)
       //recent searches
       setSearchedWords((searchedWords) => {
        if (searchedWords.length === 5) {
          searchedWords.pop(); // removes last item in array if it's longer than 5 items
        }
        return [newinput, ...searchedWords];
      });
   }
    
    if(response.status === 404){
        setNoWord(true)
        setFoundWord([])
    }else {
       
    }
    
}