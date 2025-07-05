const colorInput = document.getElementById("colorInput");
const colorDisplay = document.getElementById("colorDisplay");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const copyMessage = document.querySelector('.copyMessage');
const body = document.querySelector('body');

const insertColor = () => {
    const selectedColor = colorInput.value;
    colorDisplay.style.background = selectedColor;
    body.style.background = selectedColor;
    colorCode.textContent = selectedColor;
    console.log(`color is now: ${selectedColor}`);
    
}

colorInput.addEventListener("input", insertColor);

document.addEventListener("DOMContentLoaded", insertColor);

copyButton.addEventListener("click", async function () {
    try {
        await navigator.clipboard.writeText(
            colorCode.textContent
        );
        // alert("Color code copied to clipboard!");
        copyMessage.classList.remove('hide');
        setTimeout(() => {
            copyMessage.classList.add('hide');
        }, 800);
    } catch (err) {
        console.error("Failed to copy text: ", err);
        // alert("Failed to copy the color code. Please try again.");
        copyMessage.style.cssText = "visibility: visible; font-size: 12px ";
        copyMessage.textContent = 'Failed to copy'
        setTimeout(() => {
            copyMessage.textContent = '';
        }, 800);

    }
});
