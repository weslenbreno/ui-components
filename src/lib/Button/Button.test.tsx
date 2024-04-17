import { render } from '@testing-library/react'
import Button from './Button'

test('render Button', () => {
    const { getByText } = render(<Button label='Teste' />)
    const element = getByText(/Teste/i)
    expect(element).toBeInTheDocument()
})
