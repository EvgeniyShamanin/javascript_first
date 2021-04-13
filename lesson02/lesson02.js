// task 1

var a = 1, b = 1, c, d;
c = ++a;
// увеличиваем а на 1
console.log(c);
d = b++;
// постфиксная форма вначале присваевается в d значение b а потом происходит увеличение
console.log(d);           // 1
c = 2+ ++a;
// префиксная форма а уже один раз увеличивалась и теперь 2 теперь еще раз увеличивается на 1
console.log(c);      // 5

d = (2+ b++);
// b уже равно 2 и так как это постфикс то 2+2 = 4
console.log(d);      // 4

// а 2 раза инкриментился
console.log(a);                    // 3
// b 2 раза инкриментился
console.log(b);                    // 3


// task 2

var a = 2;
var x = 1 + (a *= 2);
console.log('answer:' +x)

//task 3

const a1 = 4;
const b1 = 3;

if( a1 >= 0 && b1 >= 0){
    console.log(a1 - b1)
}
else if (a1 < 0 && b1 < 0){
    console.log(a1 * b1)
}
else {
    console.log(a1 + b1)
}

//task 4

const a2 = 10;

switch (a2) {
    case 1 :
        console.log(1);
    case 2 :
        console.log(2);
    case 2 :
        console.log(2);
    case 3 :
        console.log(3);
    case 4 :
        console.log(4);
    case 5 :
        console.log(5);
    case 6 :
        console.log(6);
    case 7 :
        console.log(7);
    case 8 :
        console.log(8);
    case 9 :
        console.log(9);
    case 10 :
        console.log(10);
    case 11 :
        console.log(11);
    case 12 :
        console.log(12);
    case 13 :
        console.log(13);
    case 14 :
        console.log(14);
    case 15 :
        console.log(15);

}

//task 5

let a3 = 3;
let b3 = 4;

function sum(a, b) {
    return a+b
}
function minus(a, b) {
    return a-b
}
function divide(a, b) {
    return a/b
}
function multiply(a, b) {
    return a*b
}
console.log(sum(a3, b3));
console.log(minus(a3, b3));
console.log(divide(a3, b3));
console.log(multiply(a3, b3));

//task 6

function mathOperation(arg1, arg2, operation){
    if(operation === '+' || '-' || '/' || '*'){
        switch (operation) {
            case '+' :
                return sum(arg1, arg2);
                break;
            case '-' :
                return minus(arg1, arg2);
                break;
            case '/' :
                return divide(arg1, arg2);
                break;
            case '*' :
                return multiply(arg1, arg2);
                break;
        }

    }
    else {
        return 'wrong operation: ' +operation
    }

}
console.log(mathOperation(2, 4, '/'));



