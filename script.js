'use strict';

console.log(document.querySelector('.message').textContent); // textContent - paima tik texta, siuo atveju "start guesing..." ir ji iraso i console.

// 71 LESSON - What's the DOM and DOM Manipulation

// dom - leidzia js'ui interactinti su web page'u. dom - document object model it allows js to access html elements and styles to manipulate them. e.g. change text, html attributes, css styles. It's like a connection point between JS and HTML. DOM it's not part of JS, it is WEB APIs - like libraries that browsers implements and that we cane access ofr our js code.

// 72 LESSON - Selecting and manipulating elements

// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// 73 LESSON - HANDLING CLICK EVENTS - event listeners!

// pries listen to event, turime pasirinkti kur event should happen (siuo atveju bus Check! button, t.y. kai ji paspausime, kazkas ivyks):

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value); // - vertimas - tik kai kai paspausime click, tuomet bus callinama  f-ja, kuri mums consoleje parodys .guess value (tai ka ivesime i input laukeli)
// });

// // real game:

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   } // CIA JEI SUVESIM "0", kas nera traktuojama kaip skaicius, tuomet ismes mums message skiltyje, 'jog no number!'
// });

// 73 LESSON impelementing the Game Logic

// visu pirma reikia apibrezti  spejama skaiciu. we should do it outside of handling function, nes jei darytume viduje, tai kiekviena karta paspaudus check gautume vis kita skaiciu:
// const secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// document.querySelector('.number').textContent = secretNumber;
// console.log(secretNumber);

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';
//   }
//   // how to compare random secretNumber to guess secretNumber
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose!';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose!';
//     }
//   }
// });

// how to decrease a score - sukuriam score = 20 kintamaji, tuomet prie too high ir too low sukuriam score = 20 - 1 arba score-- ir po jais sukuriam, jog kiekviena karta jei yra too low ar too high - pasikeistu .score irasas (virsuj kodas jau aprasytas)

// kai pasiekia score 0, mums reikia if statement papildomo prie else if situaciju su too high ir too low situacijomis. t.y. idedame, kad jei score > 1 tai tuomet bus too high arba too low, ir tada else ir irasom kokia bus situacija jei lygu arba maziau nei 0

// 75 LESSON Manipulating CSS Styles

// with DOM manipulation can although change styles
// to change background  and make number wider when player wins:

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highscore = 0; // kadangi highscore visada bus daugiau nei 0.

// document.querySelector('.number').textContent = '?';
// console.log(secretNumber);

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // when there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!';

//     // When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347'; // cia keiciam spalva
//     document.querySelector('.number').style.width = '30rem'; // plotis. visda kai keiciam style, reikia ideti i string.

//     // cia highscore f-ja:
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }

//     // when guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose!';
//     }

//     // when guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lose!';
//     }
//   }
// });

// // CODING CHALLENGE #1

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   console.log(secretNumber);
//   document.querySelector('.message').textContent = 'Start guessing again!';
//   document.querySelector('.score').textContent = score;

//   document.querySelector('.number').textContent = '??';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('body').style.backgroundColor = '#222';
// });

// 77 Implementing HIGHSCORES

// sukuriam let highscore = 0
// tuomet prie player wins cuirm if(score > highscore) f-ja - pavaizduota auksciau

// 78 LESSON REFACTORING OUR CODE: THE DRY PRINCIPLE

// cia bus keiciama when the guess is too high ir too low. Dublicate code is bad because when we need to change code, we then we should replace it in multiple places. Kai parasom koda pirma karta, nieko tokio jei ji dubliuojam, bet in the final edition, we should make it by DRY principle. Refactoring = restructure code without change it like it works.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0; // kadangi highscore visada bus daugiau nei 0.
// kaip pakeisti .message vietas, kurios kode dubliuojasi 5x:
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';  - nebereikalinga del DRY
    displayMessage('No number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!'; - nebereikalinga del DRY
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; // cia keiciam spalva
    document.querySelector('.number').style.width = '30rem'; // plotis. visda kai keiciam style, reikia ideti i string.

    // cia highscore f-ja:
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!'; // cia pokytis ivyksta. Ar secretNumber yra daugiau nei guess? Jei taip - too high, o jei mazesnis - too low
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lose!'; - nebereikalinga del DRY
      displayMessage('You lose!');
    }
  }
  //   // when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose!';
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose!';
  //   }
  // }
});

// CODING CHALLENGE #1

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  // document.querySelector('.message').textContent = 'Start guessing again!'; - nebereikalinga del DRY
  displayMessage('Start guessing again!');
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '??';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});

// 78 LESSON PROJECT #2: MODAL WINDOW
