//for loop
console.log('for loop');
for (let step = 0; step < 5; step++) {
  console.log("Walking east one step",step);
}

//do-while loop
console.log('do while loop');
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

//while
// Program to display numbers from 1 to 3
console.log('while loop');
 i = 1;

while (i < 4) {
    console.log(i);
    i += 1;
}

//break
// program to print the value of i<2 and break if it is 3
console.log('break');
for (let i = 1; i <= 5; i++) {
       
    if (i == 3) {
        break;
    }
    console.log(i);
}

//continue
console.log('continue');
for (let i = 1; i <= 5; i++) {
   
    if (i == 3) {
        continue;
    }

    console.log(i);
}