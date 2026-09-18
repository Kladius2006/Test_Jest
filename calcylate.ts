import { calculatet, vat } from './calculateText';
import { evenOrOdd } from './evenOrOdd';

describe('calculator', () => {
  it('calculate', () => {
    expect(calculatet('10', '+', '5')).toBe('15');
    expect(calculatet('10', '-', '5')).toBe('5');
  });

  it('vat', () => {
    expect(vat(100)).toBe('107'); 
  });

  it('evenOrOdd', () => {
    expect(evenOrOdd('1', '2', '3')).toBe('Odd'); 
  });
});