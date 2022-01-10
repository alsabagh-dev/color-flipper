const colors = ["#17261F", "#200D11", "#DDB786", "#f15025", '#1DA1F2', '#657786', '#304D53', '#6B1812', '#341E11'];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const banner = document.getElementById('banner');
const color = document.querySelector('.color');
const tooltip = document.querySelector('.tooltiptext');
const simpleLink = document.getElementById('simpleLink');
const hexLink = document.getElementById('hexLink');
const mode = document.querySelector('.mode');


mode.textContent = 'simple';
const tooltipMsg = 'Copy to clipboard';
tooltip.innerHTML=tooltipMsg;

const getRandomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
}

const simpleGenerator = () => {
    // get random number between 0 and colors.length 
    const randomNumber = getRandomNumber(colors);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
}

const hexGenerator = () => {
    let hexColor = '#';
    let randomNumber;
    for (let i = 0; i < 6; i += 1){
        randomNumber = getRandomNumber(hex);
        hexColor +=  String(hex[randomNumber]);
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

simpleLink.addEventListener('click', function(){
    mode.textContent = 'simple';
    document.title = 'Color Flipper || Simple';
});

hexLink.addEventListener('click', function(){
    mode.textContent = 'hex';
    document.title = 'Color Flipper || hex';
});

btn.addEventListener('click', function () {
   (mode.textContent === 'simple')?
        simpleGenerator():
        hexGenerator();
});

banner.addEventListener('click', function () {
    const value = color.textContent;

    navigator.clipboard.writeText(value);
    tooltip.innerHTML = "Copied: " + value;
});

banner.addEventListener('mouseout', function(){
    tooltip.innerHTML = tooltipMsg;
})
