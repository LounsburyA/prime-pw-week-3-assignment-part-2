console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<=3; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
for (let i=0; i<=5; i++) {
  console.log(i);
}
console.log('count from 0 to 5');
// need to change the initiliaztion "0" and condition "5"

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<=5; i++) {
  console.log(i);
}
// need to change the initiliaztion "3" and the condition "5"

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
/*for (let i=1; i<=10; i++) {
  if(i % 2 == 0){
    console.log(i);
  }
}
tried this, it works, but too complicated/not what i wanted
*/
for (let i=2; i<=10; i+=2) {
  console.log(i);
}
//need to change initiliaztion "2", condition "10", and final expression "+=2"

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i> -1; i--) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

for (let star of stars){
  console.log(star);
}

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
// console.log('Some stars:');
// for (let i=0; i <stars.length ; i++) {
//   console.log(stars[i]);
// }

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let k = 0;
while (k < stars.length) {
  console.log(stars[k]);
  k++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let i = 0;
while (i<5) {
  i++;
  console.log(i);
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let j = 10;
while (j >=5) {
console.log(j);
  j--;
}
