let greet = (code) => {
  switch (code) {
    case 'en' : 
      console.log('Hi!');
      break;
    case 'fr' : 
      console.log('Salut!');
      break;
    case 'pt' : 
      console.log('Olá!');
      break;
    case 'de' : 
      console.log('Hallo!');
      break;
  case 'sv' : 
      console.log('Hej!');
      break;
  case 'af' : 
      console.log('Haai!');
      break;
  default:
      console.log('Language unknown. Try again.');
      break;
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'


/*

launch school solution

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

 Note that if we use return statements in the clauses, 
 we don't need to include additional break statements, 
 because return will immediately exit from the function anyway

*/