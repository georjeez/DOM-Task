
function roundUp(x) {
    return Math.ceil(x);
}

function CalculateMagic(a, b) {
    let number = a + b + b;
    
    number = number + 90; // add 90
    
    number = number / 10; // divide by 10
    
    if(number % 5 === 0){ // check if number is divisible by 5
        number = number - 8; // if multiple of 5, subtract 8
    }
    else {
        number = number + 9; // if not mmultiple of 5, add 9
    }

    number = number * number; // square the answer

    let G = number / 3; // divide by 3, create variable named "G"

    return roundUp(G);
}