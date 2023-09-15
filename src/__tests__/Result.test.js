import Result from "../components/Result";
import { render, screen, act} from "@testing-library/react";
import mockWord from '../mocks/mockWord.json'
import userEvent from '@testing-library/user-event';

describe('checks that result is visible', () => {

    it('makes sure information is visble', async () => {
        const user = userEvent.setup()
        render(
            <Result
                word={mockWord}
                setView={jest.fn()}
                setFavoriteWords={jest.fn()}
                favoriteWords={[]}
            />
        )
            const header = screen.getByText('king')
            const dots = screen.getByTestId('collapse')
            const desc = screen.getByText("A male monarch; a man who heads a monarchy. If it's an absolute monarchy, then he is the supreme ruler of his nation.")
            expect(header).toBeInTheDocument()
            expect(desc).toBeInTheDocument()
            await act(async () => await user.click(dots))
            // if dots are clicked, more information is revealed
            const descriptions = await screen.findByText('A king skin.')
            expect(descriptions).toBeInTheDocument()
    })

    it('clicks on the part of speech', async () => {
        const user = userEvent.setup()
        render(
            <Result
                word={mockWord}
                setView={jest.fn()}
                setFavoriteWords={jest.fn()}
                favoriteWords={[]}
            />
        )
        const verb = screen.getByText('verb')
        expect(verb).toBeInTheDocument()
        await act(async () => user.click(verb))
        const desc = await screen.findByText("To crown king, to make (a person) king.") // need to wait until click is finished
        expect(desc).toBeInTheDocument()
    })
    it('tests audio file', async () => {
        const user = userEvent.setup()
        render(
            <Result
                word={mockWord}
                setView={jest.fn()}
                isPlaying={true}
                setFavoriteWords={jest.fn()}
                favoriteWords={[]}
            />
        )
        const button = screen.getByTestId('audioic1')
        await act(async () => user.click(button)) // clicks on the audio icon
        const audioElement = await screen.findByTestId('audio-element-1');
        expect(audioElement).toBeInTheDocument();

        const audioSourceElement = screen.getByTestId("audio-source1")
        expect(audioSourceElement).toHaveProperty("src", "https://api.dictionaryapi.dev/media/pronunciations/en/king-us.mp3")
    })

})