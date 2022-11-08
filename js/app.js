let userNames = [`Boo`, `Snoop`, `Nines`, `Beans`, `Kalley`, `Kate`, `Anna`, `Ally`, `Molly`, `Andie`];
let userAges = [8, 2, 2, 1, 11, 22, 18, 18, 16, 9];

// counter = 0;
// while (counter < userAges.length){
//   if (userAges[counter] >= 18){
//     console.log(userNames[counter]);
//     }
//     counter++;
//  }

for(let counter = 0; counter < userAges.length; counter++){
    if (userAges <= 18) {
        console.log(userNames[counter]);
}
}
