import { CalculatorAdapter } from './adapters/CalculatorAdapter'


export class Calculator {
    private calculatorAdapter: CalculatorAdapter

    constructor(calculatorAdapter: CalculatorAdapter) {
        this.calculatorAdapter = calculatorAdapter
    }
  
    add(num1: number, num2: number): number {
        return num1 + num2
    }

    subtract(num1: number, num2: number): number {
        return num1 - num2
    }

    multiply(num1: number, num2: number): number {
        return num1 * num2
    }

    divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("nao divide por 0")
        }
        return num1 / num2
    }
}