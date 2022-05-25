const fibonacci= function(number){
    if(number<0){
        number=number*-1;
    }
    if( number<=2){
        return 1;
    }else {
        return fibonacci(number-1)+fibonacci(number-2);
    }
}
console.log("Fibonacci of 42 is ", fibonacci(42));
console.log("Fibonacci of -15 is ", fibonacci(-15));
