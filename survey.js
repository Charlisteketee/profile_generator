/*to use the promise-based APIs
import * as readline from 'node:readline/promises';
const readline = require('node:readline/promises');
//to use the callback and sync APIs
import * as readline from 'node:readline';
const readline = require('node:readline');

**createInterface:
Instances of the InterfaceConstructor class are constructed using the readlinePromises.createInterface()
or readline.createInterface() method. Every instance is associated with a single input Readable stream and a single output Writable stream.
The output stream is used to print prompts for user input that arrives on, and is read from, the input stream.

**close:
The 'close' event is emitted when one of the following occur:

The rl.close() method is called and the InterfaceConstructor instance has relinquished control over the input and output streams;
The input stream receives its 'end' event;
The input stream receives Ctrl+D to signal end-of-transmission (EOT);
The input stream receives Ctrl+C to signal SIGINT and there is no 'SIGINT' event listener registered on the InterfaceConstructor instance.
The listener function is called without passing any arguments.

The InterfaceConstructor instance is finished once the 'close' event is emitted.
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// start of callback hell - enter if you dare!
const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)?",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

// creat empty object to store answers
const answers = {};

//function askQuestion - takes index parameter representing questions. keep asking until question array length is empty
//use rl.question to ask line by line
//store answers in answer object using current question key
//when all questions are asked, displayAnswers() and closes readline interface
function askQuestion(index) {
  if (index < questions.length) {
    rl.question(questions[index] + ' ', (answer) => {
      answers[questions[index]] = answer;
      askQuestion(index + 1);
    });
  } else {
    rl.close();
    displayAnswers();
  }
}
//displayAnswers function to format the response with collected answers as a sentence
function displayAnswers() {
  const { name, activity, music, meal, favoriteFood, sport, superpower } = answers;
  console.log(`${name} loves ${music} while ${activity}, devours ${favoriteFood} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
}
//start survey
askQuestion(0);


