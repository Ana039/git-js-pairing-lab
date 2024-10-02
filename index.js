const fiveToOneHundred = () => {
  for (let i = 5; i <= 100; i++) {
    console.log(i);
  }
}

// test functions
//fiveToOneHundred();


const multiplesOfThree =() => {
  for (let i = 0; i <= 100; i++ ) {
    if(i % 3 == 0) {
      console.log(i);
    }
  }
}

const multiplesOfThreeOrFive =() => {
  for (let i = 0; i <= 100; i++ ) {
    if(i % 3 == 0) {
      console.log(i);
    } else if (i % 5 == 0) {
      console.log(i);
    }
  }
}

//multiplesOfThreeOrFive();

const untilNum =(x) => {
    for(let i = 1; i <= x; i++){
        console.log(i);
    }
}
// untilNum(5);
// untilNum(9);
// untilNum(42);

const multiply = (x, y) => {
  return x * y;
}

// console.log(multiply(2,4));
// console.log(multiply(10, -5));
// console.log(multiply(3, 7.5));

const add =(x, y) => {
    if(x == y) {
        return x * 3;
    } else {
        return x + y;
    }
}
//console.log(add(2, 4));    //returns 6
// add(10, -5)   //returns 5
// add(3, 7.5)   //returns 10.5
// console.log(add(5, 5));     //returns 30 because the sum of 5 + 5 = 10 and 30 is triple that
// add(6, 6)     //returns 36 because the sum of 6 + 6 = 12 and 36 is triple that)

const isNegative = (x) => {
  if (x < 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isNegative(3));
// console.log(isNegative(-2));

const triangleArea = (height, base) => {
    return height * base / 2;
}
// console.log(triangleArea(5, 7));
// console.log(triangleArea(6, 8));

const betweenTwentyAndFourty = (x) => {
  if (x > 20 && x < 40) {
    return true;
  } else {
    return false;
  }
}

// console.log(betweenTwentyAndFourty(20));
// console.log(betweenTwentyAndFourty(21));
// console.log(betweenTwentyAndFourty(39));
// console.log(betweenTwentyAndFourty(40));

const largest = (a, b, c) => {
    return Math.max( a, b, c );
    
}
// console.log(largest(8, 6, 4));
// console.log(largest(41, 108, 86));