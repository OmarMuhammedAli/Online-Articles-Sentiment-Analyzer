import 'babel-polyfill'
import { handleSubmit } from '../js/formHandler'

describe('Client Test', () => {
    test('Testing to see whether handleSubmit function is defined or not', () => {
        expect(handleSubmit).toBeDefined()
    })
})
