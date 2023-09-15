import { useEffect, useState } from "react";
import SearchPage from "./components/SearchPage";
import Result from "./components/Result";

function App() {
  const [searchedWords, setSearchedWords] = useState([])
  const [favoriteWords, setFavoriteWords] = useState([])
  const [word, setWord] = useState({})
  const [view, setView] = useState('start')

  // checking theme preferences and sets session storage for favorite words storing
  useEffect(() => {
  const existingArray = JSON.parse(sessionStorage.getItem('favoriteWords')) || []; //creating favoriteWords in session storage if it doesn't exist
    sessionStorage.setItem('favoriteWords', JSON.stringify(existingArray));
    const element = document.body;
    const dark = localStorage.getItem('theme');
    element.classList.add(dark)
  },[])

  //gets saved favorite words
  useEffect(() => {
    const storedWords = JSON.parse(sessionStorage.getItem('favoriteWords'));
    setFavoriteWords(storedWords)
  },[setFavoriteWords])

  const darkmode = () => {
    const element = document.body;
  element.classList.toggle("dark-mode");
  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark-mode") {
  localStorage.setItem("theme", "light");
  } else {
  localStorage.setItem("theme", "dark-mode");
  }
  }
  
    switch(view){
      case 'result':
        return <Result word={word} setView={setView} darkmode={darkmode} setFavoriteWords={setFavoriteWords} favoriteWords={favoriteWords}/>;
        default:
          return <SearchPage setSearchedWords={setSearchedWords} setFavoriteWords={setFavoriteWords} setView={setView} setWord={setWord} searchedWords={searchedWords} darkmode={darkmode} favoriteWords={favoriteWords}/>;
    }
}

export default App;
