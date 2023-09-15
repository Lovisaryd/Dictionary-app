import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// from searching word until click to result page
describe('test the user interaction', () => {

    const user = userEvent.setup()

    it('searches for word and checks response', async () => {
        render(
            <App />
        )
        const header = screen.getByText('Dictionary')
        expect(header).toBeInTheDocument()
        const inputElement = screen.getByPlaceholderText('Search and find out...')
        const wordToSearch = 'queen'
        await act(async () => await user.type(inputElement, `${wordToSearch}{Enter}`))
        await waitFor(() => expect(screen.getByText('queen')))
        const word = await screen.findByTestId("result"); // didn't know which one to click on with getByText
        await act(async () => await user.click(word))
        await waitFor(() => expect(screen.getByText('Definitions')))
        const result = await screen.findByText('Definitions')
        expect(result).toBeInTheDocument()
    })
})