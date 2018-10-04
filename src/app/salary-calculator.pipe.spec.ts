import { SalaryCalculatorPipe } from './salary-calculator.pipe';

describe('SalaryCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new SalaryCalculatorPipe();
    expect(pipe).toBeTruthy();
  });
});
