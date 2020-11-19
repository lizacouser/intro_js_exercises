let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];


//for loop
for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);
  if (fish[i] === 'Nemo') break;
}


// while loop
let index = 0;
while (index < fish.length) {
  console.log(fish[index]);
  if (fish[index] === 'Nemo') break;
  index += 1;
}
