// დავალება 
// 1.
// for (let i = 5; i <= 100; i++) {
//     console.log(i); 
//   }


//   2.
// let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] > 0 && array1[i] < 10) {
//     console.log(array1[i]); 
//   }
// }


// 3.
// let array3 = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array3.length; i++) {
//   sum += array3[i];
// }

// console.log(sum);


// 4.
// let array4 = [1, 2, 3, 7, 6, 9];
// let sum = 0;

// for (let i = 0; i < array4.length; i++) {
//   sum += array4[i];
// }

// let average = sum / array4.length;

// console.log(average);



// 5.
// let user = {
//     firstname: "giorgi",
//     lastname: "smith",
//     age: 25,
//     studentstatus: "active"
//   };
  
//   console.log(user.studentstatus);
  

// 6.
let user = {
    name: 'giorgi',
    age: 20,
    studentstatus: 'active'
  };
  
  if (user.age < 18 && user.studentstatus === 'active') {
    console.log('hello');
  } else if (user.name === 'Levan') {
    console.log('hello levani');
  } else if (user.studentstatus === 'active' || user.age < 25) {
    console.log('hello world');
  } else {
    console.log('error');
  }
  