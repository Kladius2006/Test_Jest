import { calculatet} from './calculateText';
 export const calculateg = (num1:string, operator:string, num2:string) => {
 const n1 = parseFloat(num1);
 const n2 = parseFloat(num2);

 let calcResult: number = 0;

 switch (operator) {
 case '+':
    calcResult = n1 + n2;
    break;
 case '-':
    calcResult = n1 - n2;
    break;
 case '*':
    calcResult = n1 * n2;
    break;
 case '/':
    calcResult = n1 / n2;
    break;
 }
 return calcResult.toString();
 };

 export const vatg = (result:any) => {
   const num = parseFloat(result);
   let calcResult = num +(num * 0.07);
   return calcResult.toString();
 }