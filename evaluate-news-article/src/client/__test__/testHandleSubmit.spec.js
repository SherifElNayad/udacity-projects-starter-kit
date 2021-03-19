// to solve ReferenceError: regeneratorRuntime is not defined
// https://knowledge.udacity.com/questions/174638
import 'babel-polyfill'
import { handleSubmit } from "../js/formHandler";

describe('Client Test', () => {
    describe("Test the handlesubmit function", () => {
      test("Testing that it is defined", () => {
        expect(handleSubmit).toBe();
      });
    });
});
