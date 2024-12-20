let index = 1;

for (index = 1; index <= 100; index++) {

    let resto3 = index % 3;
    let resto5 = index % 5;

    if (resto3 === 0 && resto5 === 0) {
        console.log("FizzBuzz");
    }
    else if (resto3 === 0) {
        console.log("Fizz");
    }
    else if (resto5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(index);
    }

}