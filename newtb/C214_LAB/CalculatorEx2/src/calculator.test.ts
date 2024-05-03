import { Calculator } from './Calculator'
import { CalculatorAdapter, CalculatorMock } from './adapters/CalculatorAdapter'


describe('Calculator', () => {
  it('soma dois numeros', () => {
    const calculator = new Calculator();
    expect(calculator.add(1, 2)).toBe(3);
  });

  it('subtrai dois numeros', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  it('multiplica dois numeros', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  it('divide dois numeros', () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 2)).toBe(3);
  });
});

