
const functions = require('../js/checkURL');

describe('Test check url functionality', () => {
    test('Testing the checkUrl function defined or not', () => {
        expect(functions.checkURL("https://www.udacity.com/blog/2021/03/javascript-operators.html")).toBeDefined();

    })

    test('Testing the checkUrl function return false for invalid url', () => {
        expect(functions.checkURL("not a url")).toBeFalsy();

    })

    test('Testing the checkUrl function return true for valid url', () => {
        expect(functions.checkURL("https://www.udacity.com/blog/2021/03/javascript-operators.html")).toBeTruthy();
    })
})
