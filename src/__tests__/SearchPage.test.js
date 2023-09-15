import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';
import SearchPage from '../components/SearchPage';

describe('SearchBar Component', () => {

  });

  it('checks placeholder text', () => {
    const input = 'Test input';
     const setInput = jest.fn();
  const foundWord = [];
  const setFoundWord = jest.fn();
  const noWord = false;
  const setNoWord = jest.fn();
  const setSearchedWords = jest.fn();
  const setFavoriteWords = jest.fn();
  const setView = jest.fn();
  const setWord = jest.fn();
  const searchedWords = [];

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
    expect(inputElement).toBeInTheDocument();
  });


describe('SearchPage Component', () => {
  const initialSearchedWords = [];
  const wordToAdd = 'die';

  it('displays searched words', () => {
    render(
      <SearchPage
        setSearchedWords={(newWords) => {
          expect(newWords).toContain(wordToAdd);
        }}
        searchedWords={initialSearchedWords}
        setFavoriteWords={jest.fn()}
        favoriteWords={[]}
        setView={jest.fn()}
        setWord={jest.fn()}
        darkmode={jest.fn()}
      />
    );

    //checks if searched word shows up in 'recent'

    const searchInput = screen.getByPlaceholderText('Search and find out...');
    fireEvent.change(searchInput, { target: { value: 'die' } });
    const inputElement = screen.getByDisplayValue(/die/);
    expect(inputElement).toBeInTheDocument();
  });

  it('checks if word exist', async () => {
  const user = userEvent.setup()
  const wordToSearch = 'sten'

    render(
      <SearchPage
        searchedWords={[]}
        setFavoriteWords={jest.fn()}
        setView={jest.fn()}
        setWord={jest.fn()}
        setSearchedWords={jest.fn()}
        favoriteWords={[]}
        darkmode={jest.fn()}
      />
    );
    const inputElement = screen.getByPlaceholderText('Search and find out...');
    await act(async () => await user.type(inputElement, `${wordToSearch}{Enter}`))
    
    await waitFor(() => {
      const errorMessage = screen.getByText("Word doesn't exist");
      expect(errorMessage).toBeInTheDocument();
    });
  })
});
