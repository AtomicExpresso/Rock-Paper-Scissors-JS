let text = document.getElementById('win'); //display outcome text (Win / Lose)
let result = document.getElementById('win'); //for win text
let result2 = document.getElementById('win'); //for lose text

let playerChoice = (playerChoice) => {
  let computerChoice = () => { //generate computers choice
    return Math.floor(Math.random() * 3);
  };

  let computerResult = computerChoice();

  switch (computerResult) {
    case 0:
      //computer chooses rock
      if (playerChoice === 'Paper') {
        console.log(`${computerResult}`);
        console.log('You win');
        let text = (document.getElementById('win').textContent = 'Winner');
        let result = document.getElementById('win').classList.add('winetext'); //adds green text
        let result2 = document.getElementById('win').classList.remove('losetext'); //removes red text
      } else if (playerChoice === 'Scissors') {
        console.log(`${computerResult}`);
        console.log('You lose');
        let text = (document.getElementById('win').textContent = 'Losser');
        let result = document.getElementById('win').classList.add('losetext'); //adds red text
      }
      break;

    case 1:
      //computer chooses paper
      if (playerChoice === 'Scissors') {
        console.log(`${computerResult}`);
        console.log('You win');
        let text = (document.getElementById('win').textContent = 'Winner');
        let result = document.getElementById('win').classList.add('wintext');
        let result2 = document.getElementById('win').classList.remove('losetext');
      } else if (playerChoice === 'Rock') {
        console.log(`${computerResult}`);
        console.log('You lose');
        let text = (document.getElementById('win').textContent = 'Losser');
        let result = document.getElementById('win').classList.add('losetext');

      }
      break;

    case 2:
      //computer chooses scissors
      if (playerChoice === 'Rock') {
        console.log(`${computerResult}`);
        console.log('You win');
        let text = (document.getElementById('win').textContent = 'Winner');
        let result = document.getElementById('win').classList.add('wintext');
        let result2 = document.getElementById('win').classList.remove('losetext');
      } else if (playerChoice === 'Paper') {
        console.log(`${computerResult}`);
        console.log('You lose');
        let text = (document.getElementById('win').textContent = 'Losser');
        let result = document.getElementById('win').classList.add('losetext');
      }
      break;
  }
};
