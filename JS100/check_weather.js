
/* 
part 1 (if statement)

let checkWeatherIf = weather => {
  if (weather === 'sunny') {
    console.log('It\'s a beautiful day!');
  } else if (weather === 'rainy') {
    console.log('Grab your umbrella.');
  } else {
    console.log('Let\'s stay inside.');
  }
}
*/

// Part 2 (switch statement)
let checkWeatherSwitch = weather => {
  switch (weather) { 
    case 'sunny':
      console.log('It\'s a beautiful day!');
      break;
    case 'rainy':
      console.log('Grab your umbrella.');
      break;
    default:
      console.log('Let\'s stay inside.');
  }
}


let weather = 'sunny';
checkWeatherSwitch(weather);
weather = 'rainy';
checkWeatherSwitch(weather);
weather = 'cloudy';
checkWeatherSwitch(weather);
