export const evenOrOdd = (num1:string, num2:string, num3:string) => {
 const n1 = parseInt(num1)%2;
 const n2 = parseInt(num2)%2;
 const n3 = parseInt(num3)%2;
 let Is1: number = 0;
 let Is0: number = 0;
 const set:any = [n1,n2,n3];

 for(let i = 0;i < 3;i++){
    if(set[i] === 1){
        Is1++;
    }
    if(set[i] === 0){
        Is0++;
    }
 }

 if(Is1 > Is0){
    return 'Odd';
 }
 else{
    return 'Even';
 }
 };