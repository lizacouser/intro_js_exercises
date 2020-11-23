
function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

let extractLanguage = locale => {
  return locale.slice(0, 2);
}

let extractRegion = locale => {
  return locale.slice(3, 5);
}

let localGreet = locale => {
  let lang = extractLanguage(locale);
  let country = extractRegion(locale);
  if (lang === 'en') {
    switch (country) {
      case 'US' : return 'Hey!';
      case 'UK' : return 'Hello!';
      case 'AU' : return 'Howdy!';
      default : return 'Hi!';
    }
  } else {
    return greet(lang);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8'));// 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8'));
console.log(localGreet('fr_CA.UTF-8'));
console.log(localGreet('fr_MA.UTF-8'));

/*
a BETTER solution!

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language); // no if statement, way less wordy!
  }
}


*/