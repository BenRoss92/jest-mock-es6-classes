import { forEach } from "./foreach";


describe('forEach', () => {
    // given
    const numbers = [5, 10, 15];

    /**
     * `jest.fn`
     * 
     * Creates a spy - a.k.a a Jest "mock function".
     * 
     * Optionally takes an argument: the "mock implementation". i.e. What you want the mock to do when it's called (e.g. return a value).
     * 
     * If you don't give it an explicit Jest implementation, it will return `undefined` when called.
     * 
     * Examples:
     * 
     * ```js
     * const mockFunction = jest.fn();
     * 
     * mockFunction() // => undefined
     * 
     * expect(mockFunction).toHaveBeenCalled();
     * ```
     * 
     * ```js
     * // `arg` - the argument that is passed into `mockFunction` when it's called
     * const mockFunction() = jest.fn((arg) => arg * 2);
     * 
     * expect(mockFunction(3)).toEqual(6);
     * 
     * expect(mockFunction).toHaveBeenCalled();
     * ```
     */
    const mockCallBack = jest.fn((number) => number + 1);

    // when
    forEach(numbers, mockCallBack);

    test('The mock function is called twice', () => {
        // then
        expect(mockCallBack).toHaveBeenCalledTimes(3);
        // the above is the same as:
        // `.mock` - provides access to the mock's metadata
        expect(mockCallBack.mock.calls.length).toEqual(3);
    });

    test('The first argument of the first call to the function was 0', () => {
        // `calls` - a two-dimensional array containing an array of calls, and within each call, an array of arguments received by each call.
        // `calls[0][0]` - first `0` represents the first call to the function.
        // Second `0` represents the first argument received (in the first call). 
        expect(mockCallBack.mock.calls[0][0]).toEqual(5);
    });

    test('The first argument of the second call to the function was 1', () => {
        expect(mockCallBack.mock.calls[1][0]).toEqual(10);
    });

    test('The return value of the first call to the function was 6', () => {
        /**
         * Instead of invoking the mocked callback directly:
         * ```js
         * expect(mockCallBack(5)).toEqual(6);
         * ```
         * 
         * ...you can instead spy on each call made to the callback when forEach() was called.
         * 
         * You must return a value in your callback function, otherwise you cannot access this value (will be undefined).
         * 
         * ```js
         * // get the return values for all of the times that the callback function was invoked:
         * mockCallBack.mock.results
         * ```
         * 
         * e.g. When the callback is called the second time, check the return value is correct: 
         * expect(mockCallback.mock.results[1].value).toEqual(16);
         */
        expect(mockCallBack.mock.results[0].value).toEqual(6)
    });
});
