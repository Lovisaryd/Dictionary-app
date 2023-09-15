import { render, screen } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/react';

describe('Word not found', () => {
    const input = 'Test input';
  const setInput = jest.fn();
  const foundWord = [];
  const setFoundWord = jest.fn();
  const setNoWord = jest.fn();
  const setSearchedWords = jest.fn();
  const setFavoriteWords = jest.fn();
  const setView = jest.fn();
  const setWord = jest.fn();
  const searchedWords = [];



    it('sees error message shows when noWord is true', async () => {
        render(
            <SearchBar
              input={input}
              setInput={setInput}
              foundWord={foundWord}
              setFoundWord={setFoundWord}
              noWord={true}
              setNoWord={setNoWord}
              setSearchedWords={setSearchedWords}
              setFavoriteWords={setFavoriteWords}
              setView={setView}
              setWord={setWord}
              searchedWords={searchedWords}
            />
          );
          await waitFor(() => {
            const errorMessage = screen.getByText("Word doesn't exist");
            expect(errorMessage).toBeInTheDocument();
          });
    })

    it('checks that you write in input field', async () => {
      const user = userEvent.setup()
      const noWord = false
      render(
        <SearchBar
          input={input}
          setInput={setInput}
          foundWord={foundWord}
          setFoundWord={setFoundWord}
          noWord={noWord}
          setNoWord={setNoWord}
          setSearchedWords={setSearchedWords}
          setFavoriteWords={setFavoriteWords}
          setView={setView}
          setWord={setWord}
          searchedWords={searchedWords}
        />
      );
      const inputElement = screen.getByPlaceholderText('Search and find out...');
      const wordToSearch= 'kingen'
      await user.type(inputElement, `${wordToSearch}`)
      await waitFor(() => expect(wordToSearch).toBeTruthy())
    })
  });
