//Part 1

let extractLanguage = locale => {
  return locale.slice(0, 2);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

/*
A better solution:

function extractLanguage(locale) {
  console.log(locale.split('_')[0]);
}

*/

//Part 2


let extractRegion = locale => {
  return locale.slice(3, 5);
}


extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

/*
Alternatively

function extractRegion(locale) { 
  return locale.split('.')[0] //splits into 2 strings before and after period, and references the first
               .split('_')[1]; //splits into 2 strings before and after underscore, & references later
}


*/
