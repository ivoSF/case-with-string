let userName = 'ivo';
let userQuestion =`is ${userName} weighting over 100 kilo?`;
//let userQuestionArray = Array.from(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

userName ? console.log(`hello, ${userName}!`) : console.log('hello!');

console.log(`${userQuestion.slice(0, 2)} ${userName}${userQuestion.slice(6)}`);

switch (randomNumber) {
case 0:
  eightBall = 'It is certain';
  break;
case 1:
  eightBall = 'It is decidedly so';
  break;
case 2:
  eightBall = 'Reply hazy try again';
  break;
case 3:
  eightBall = 'Cannot predict now';
  break;
case 4:
  eightBall = 'Do not count on it';
  break;
case 5:
  eightBall = 'My sources say no';
  break;
case 6:
  eightBall = 'Outlook not so good';
  break;
case 7:
  eightBall = 'Signs point to yes';
  break;
}

console.log(eightBall);

