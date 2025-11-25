import { sum } from "../sum"

test('Check the sum of 2 nos.', () => { 
    const result = sum(3,4)

    //Assertion
    expect(result).toBe(7);
 })