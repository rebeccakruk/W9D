let userNames = [`Boo`, `Snoop`, `Nines`, `Beans`, `Kalley`, `Kate`, `Anna`, `Ally`, `Molly`, `Andie`];
let userAges = [8, 2, 2, 1, 11, 22, 18, 18, 16, 9];


// the while loop contains ages of AT LEAST 18, including 18
counter = 0;
while (counter < userAges.length){
  if (userAges[counter] >= 18){
    console.log(userNames[counter]);
    }
    counter++;
 }


// the for loop only has those who are under 18
for(let counter = 0; counter < userAges.length; counter++){
    if (userAges[counter] < 18) {
        console.log(userNames[counter]);
}
}
