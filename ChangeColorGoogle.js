const htmlBody = document.querySelector('body'); 
htmlBody 
<body jsmodel="hspDDf" data-dt="1" jsaction="xjhTIf:.CLIENT;O2vyse:.C…:.CLIENT;kWlxhc:.CLIENT">
 const randomClickFunction = function() {
    const colors = ["red","green","white","black","orange"];
    const randomIndex = Math.floor(Math.random * colors.lenght);
    const randomColor = colors[randomIndex];
    htmlBody.style.background = randomColor;
    console.log('The user clicked and set the color to' + randomColor);
} 
randomClickFunction() 
htmlBody.onclick = randomClickFunction;
function randomClickFunction()
//The user clicked and set the color toundefined
