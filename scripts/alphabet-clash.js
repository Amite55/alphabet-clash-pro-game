// function clickPlayNowBtn(){
//    const homeScreen = document.getElementById('home-screen');
//    homeScreen.classList.add('hidden');

//    const playGround = document.getElementById('play-ground');
//    playGround.classList.remove('hidden');
// }

function handleKeyBtnPress(event){
   const playerPress = event.key;
   console.log('player pressed', playerPress);

   if(playerPress === 'Escape'){
      gameOver();
   }
   

   const currentAlphabetElement = document.getElementById('current-alphabet');
   const currentAlphabet = currentAlphabetElement.innerText;
   console.log(playerPress, currentAlphabet);

   if(playerPress === currentAlphabet){
      console.log('You got a point');

      const currentScore = getElementValueById('current-score')
      const newScore = currentScore + 1;
      setTextElementByValue('current-score', newScore)

      // =========================diffarent way========================

      // const currentElementScore = document.getElementById('current-score');
      // const currentScoreText = currentElementScore.innerText;
      // const currentScore = parseInt(currentScoreText);
      // // console.log(currentScore);

      // const newScore = currentScore + 1;
      // console.log(newScore);
      // currentElementScore.innerText= newScore;

      console.log('You have pressed correctly', playerPress);
      removeBackgroundColorById(currentAlphabet);
      continueGame();
   }
   else{
      console.log('Ow! You missed');

      const currentLife = getElementValueById('current-life');
      const newLife = currentLife - 1;
      setTextElementByValue('current-life', newLife);

      if(currentLife === 0){
         gameOver();
      }


      // =========================diffarent way ===================================

      // const currentElementLife = document.getElementById('current-life');
      // const currentLifeText = currentElementLife.innerText;
      // const currentLifeScore =parseInt(currentLifeText);
      // console.log(currentLifeScore);

      // const newLife = currentLifeScore - 1;

      // currentElementLife.innerText=newLife;
   }
}
document.addEventListener('keyup', handleKeyBtnPress)

function continueGame(){
   const alphabet = getRendomAlphabet()
   // console.log('random alphabet', alphabet);

   const currentAlphabet = document.getElementById('current-alphabet');
   currentAlphabet.innerText= alphabet;

   addBackgroundColorById(alphabet);
}


// function use for add and remove
function clickPlayNowBtn(){
   hideElementById('home-screen');
   hideElementById('score-section');
   showElementById('play-ground');

   setTextElementByValue('current-life', 5);
   setTextElementByValue('current-score', 0);
   continueGame();
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('score-section');

   const lastScore = getElementValueById('current-score');
   console.log(lastScore);
   setTextElementByValue('last-score', lastScore);

   const currentAlphabet = getElementTextById('current-alphabet');
   removeBackgroundColorById(currentAlphabet);
}
