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
untilNum(5);
untilNum(9);
untilNum(42);