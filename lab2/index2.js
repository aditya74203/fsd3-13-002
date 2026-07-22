const toWords =(digit)=>{
    switch (digit){
     case 1:
            return "One";
        case 2:
            return "Two";
        case 3:
            return "Three";
        case 4:
            return "Four";
        case 5:
            return "Five";
        case 6:
            return "Six";
        case 7:
            return "Seven";
        case 8:
            return "Eight";
        case 9:
            return "Nine";
        case 10:
            return "Ten";
    };
}
const rollNum ="2025b01010727";
const digits =String(rollNum).split("");
console.log(digits);

let inWords='';
digits.forEach((d)=>{
    inWords += " "+toWords(Number(d));
}
);
console.log(inWords);