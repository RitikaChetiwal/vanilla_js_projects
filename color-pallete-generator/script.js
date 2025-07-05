
// Access all necessary elements.
const button = document.querySelector('button');
const color = document.querySelectorAll('.color');
const hex = document.querySelectorAll('.hex');

const generateColors = () => {
  for (let i = 0; i < color.length; i++) {

    // generate random color

    const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(`randomHex: ${randomHex}`);

    // OR
    // pad it to always be 6 characters.
    // const randomHex = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    // console.log(`randomHex: ${randomHex}`);

    // add the color as the background
    color[i].style.background = randomHex;
    // add the animation
    color[i].classList.add('fade-in');
    setTimeout(() => {
      color[i].classList.remove('fade-in');
    }, 800);
    // add the hex code above the color
    hex[i].innerHTML = randomHex;
  }
}

document.addEventListener('DOMContentLoaded', generateColors);

button.addEventListener('click', generateColors);

// to copy hex-code

const colorBox = document.querySelectorAll('.colorBox')
const copyButton = document.querySelectorAll('.colorBox button');
const message = document.querySelector('.copyMessage');

const copyText = (copyButton) => {
  const text = copyButton.closest('.colorBox').querySelector(".hex").innerText;
  navigator.clipboard.writeText(text)
    .then(() => {
      // console.log(`hex-code copied`);
      message.classList.remove('hidden');
      setTimeout(() => {
        message.classList.add('hidden');
      }, 800);
    })
    .catch(err => {
      console.error("Failed to copy text: ", err);

    });

}

// Another approach for copying specific text

// const copyButtons = document.querySelectorAll('.colorBox button');

// copyButtons.forEach((button) => {
//   button.addEventListener('click', async () => {
//     const colorBox = button.closest('.colorBox');
//     const hexCode = colorBox.querySelector('.hex').textContent;
//     const message = document.querySelector('.copyMessage');

//     try {
//       await navigator.clipboard.writeText(hexCode)
//       console.log(`hex copied:${hexCode}`);
//       message.classList.remove('hidden');
//       setTimeout(() => {
//         message.classList.add('hidden');
//       }, 800);
//     } catch (error) {
//       console.error(`Failed to copy hex:${err}`)
//     }
//   });
// });

