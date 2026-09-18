import {calculateg,vatg} from './calculateGraphic';
export const calculatet = (num1:string, operator:string, num2:string) => {
    const result = calculateg(num1, operator, num2);
    console.log(result);
    return result;
}
export const vat = (num:any) => {
    const result = vatg(num)
    console.log(result)
    return result;
}