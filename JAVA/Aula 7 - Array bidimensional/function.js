function soma(num1=15,num2=45) {
    return num1+num2;    
}


console.clear();

const hello =() => {
    return 'Olá Arrow Function';
};

const addnums =(num3=1,num4=1) =>
    {
return num3+num4;
};

console.log (hello());

console.clear();

const addnums2 = (num1=1,num2=2) => {
    return num1+num2;
};

let adicao = addnums2(5,10);
console.log(adicao);