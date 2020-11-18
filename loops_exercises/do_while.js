let myChoice;
do {
  rlSync = require('readline-sync');
  myChoice = rlSync.question("But why?");
} while (myChoice !== 'i give up');