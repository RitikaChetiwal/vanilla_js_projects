const boxes = document.querySelectorAll('.box')
const playNew = document.querySelector(`.newGame`)
const reset = document.querySelector('.reset')
const resultCont = document.querySelector('.resultCont')
const result = document.querySelector('.result')

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
  [2, 5, 8],
  [1, 4, 7],
  [6, 7, 8],
  [3, 4, 5]
];

let turnO = true;
boxes.forEach((box) => {
  box.addEventListener('click',() => {
    if(turnO){
      box.innerText = '😁'
      turnO = false;
    }else{
      box.innerText = '🤕'
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  })
})

const checkWinner = () => {
  for (const pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText
    let pos2 = boxes[pattern[1]].innerText
    let pos3 = boxes[pattern[2]].innerText

    if(pos1 != '' && pos2 != '' && pos3 != ''){
      if(pos1 == pos2 && pos2 == pos3){
        showWinner(pos1 /*,pattern*/ );
//      return;
      }
    }
  }
}

const showWinner = (winner /*,pattern*/ ) => {
  result.innerText = `Congrats🤩! The Winner is ${winner}`
  resultCont.classList.remove('hide')
  disableBoxes();
//   setTimeout(() => {
//     drawLine(pattern); 
//   }, 300); 

}

// starting******************************************
// for drawing a line after the winning pattern matches

// const drawLine = (pattern) => {
//   // Get the positions for the winning triplet
//   const [start, middle, end] = pattern;

//   // Get the start and end box elements
//   const startBox = boxes[start];
//   const endBox = boxes[end];

//   // Calculate the line's position and dimensions
//   const startRect = startBox.getBoundingClientRect();
//   const endRect = endBox.getBoundingClientRect();

//   // Create a line element
//   const line = document.createElement('div');
//   line.style.position = 'absolute';
//   line.style.backgroundColor = 'black';
//   line.style.height = '5px';
//   line.style.zIndex = '1000';
//   line.style.transformOrigin = 'top left';

//   // Calculate the angle and length of the line
//   const angle = Math.atan2(
//     endRect.top - startRect.top,
//     endRect.left - startRect.left
//   );
//   const distance = Math.sqrt(
//     Math.pow(endRect.left - startRect.left, 2) +
//     Math.pow(endRect.top - startRect.top, 2)
//   );

//   // Set line dimensions and position
//   line.style.width = `${distance}px`;
//   line.style.transform = `rotate(${angle}rad)`;
//   line.style.left = `${startRect.left + startRect.width / 2}px`;
//   line.style.top = `${startRect.top + startRect.height / 2}px`;

//   // Add the line to the document body
//   document.body.appendChild(line);
// };

// ending*******************************************

const disableBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
}

const newGame = () => {
  turnO = true;
  enableBoxes();
  resultCont.classList.add('hide')
}

const enableBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = '';

  }
}

playNew.addEventListener('click',newGame)
reset.addEventListener('click',newGame)
