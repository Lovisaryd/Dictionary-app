export const LikeBtn = ({word, setFavoriteWords, favoriteWords, likesvg}) => {
    const description = word.meanings[0].definitions[0].description
    const found = favoriteWords ? favoriteWords.find((obj) =>obj.word === word.word && obj.meanings[0].definitions[0].description === description ) : null;
const foundIndex = favoriteWords ? favoriteWords.findIndex((obj) =>obj.word === word.word && obj.meanings[0].definitions[0].description === description ) : -1;

    const like = () => {
      const newArr = [...favoriteWords, word]
      setFavoriteWords(newArr)
      const existingArray = JSON.parse(sessionStorage.getItem('favoriteWords')) || [];
      existingArray.push(word);
      sessionStorage.setItem('favoriteWords', JSON.stringify(existingArray));
    }

    const unlike = () => {
      if (foundIndex !== -1) {
        const newArr = favoriteWords.filter((obj, index) => index !== foundIndex);
        setFavoriteWords(newArr);
        const favoriteWordsArr = JSON.parse(sessionStorage.getItem('favoriteWords'));
        // there's no ID:s on these word objects so used first description to see if it's the same
        const wordToRemove = favoriteWordsArr.findIndex((item) => item.word === word.word && item.meanings[0].definitions[0].description === description);
        if (wordToRemove !== -1) {
            favoriteWordsArr.splice(wordToRemove, 1);
                    sessionStorage.setItem('favoriteWords', JSON.stringify(favoriteWordsArr));
    
      }else{

      }
    }}

    if(found){
      return(<img className="heart-color" id="liked" onClick={unlike} src={likesvg} alt='liked' style={{fill: "purple"}}></img>)
    }else {
      return(<i onClick={like} className="gg-heart heart-color"></i>)
    }
  }