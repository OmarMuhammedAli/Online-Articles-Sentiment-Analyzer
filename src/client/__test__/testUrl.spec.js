import { checkURL } from '../js/checkURL'

describe('Test check url functionality', () => {
    test('Testing to see whether checkURL function is defined or not', () => {
        expect(checkURL).toBeDefined()
    })

    test('Testing invalid URL output', () => {
        expect(checkURL('Invalid URL')).toBeFalsy()
    })

    test('Testing valid URL output', () => {
        expect(checkURL('https://jestjs.io/docs/getting-started')).toBeTruthy()
    })
})
