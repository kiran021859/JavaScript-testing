import { describe, test, it, expect } from "vitest";
import {max, fizzBuzz} from "../src/intro"

describe('max', () => {
    test('should return first argument if it is greater',() => {
        // // Arrange:
        // const a = 10;
        // const b = 11;
        // //Act:
        // const result = max(a, b)
        // //Assert
        // expect(result).toBe(11)
        expect(max(2,1)).toBe(2)
    })

    test('should return first argument if it is greater', () => {
        expect(max(1,2)).toBe(2)
    })

    test('should return first argument if it is greater', () => {
        expect(max(1,1)).toBe(1)
    })
})

describe('fizzbuzz', () => {
    test("should return FizzBuzz", () => {
        const a = 15

        const response = fizzBuzz(a)

        expect(response).toBe("FizzBuzz")
    })

    test("should return Fizz", () => {
        expect(fizzBuzz(3)).toBe("Fizz")
    })

    test("should return Buzz", () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    })

    test("should return input", () => {
        expect(fizzBuzz(7)).toBe("7")
    })
})