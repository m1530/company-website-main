function findEvenOrOdd(number) {
    if ((number % 4 == 0 && number % 100 != 0) || number % 400 == 0) {
        return number + ' is leap year';
    } else {
        return number + ' is not leap year';
    }
}

var myNum = 1900;
var result = findEvenOrOdd(myNum);
console.log('you year:', result);