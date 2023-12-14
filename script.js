
const caesarCipherDictionary = {
  a: "z",
  b: "y",
  c: "x",
  d: "w",
  e: "v",
  f: "u",
  g: "t",
  h: "s",
  i: "r",
  j: "q",
  k: "p",
  l: "o",
  m: "n",
  n: "m",
  o: "l",
  p: "k",
  q: "j",
  r: "i",
  s: "h",
  t: "g",
  u: "f",
  v: "e",
  w: "d",
  x: "c",
  y: "b",
  z: "a",
  " ": " ",
  "?":"?",
  "!":"!",
  ".":".",
  ",":",",
  ";":";",
  ":":":",
  "'":"'",
  "@":"@",
  "£":"£",
  "-":"-",
  "1":"1",
  "2":"2",
  "3":"3",
  "4":"4",
  "5":"5",
  "6":"6",
  "7":"7",
  "8":"8",
  "9":"9",
  "0":"0",
  "(":"(",
  ")":")",
};

// Function that gets the user input from the input box & the toggle
function readInput(){
  let userInput = document.querySelector(".userText").value;
  let switchValue = document.querySelector(".toggleButton").checked;

  if (userInput !== ""){
    console.log(userInput);
  };

  // IF the toggle is True then the user wants to encode the message.
  if (switchValue){
    endcodeMessage(userInput);
  } else{
    decodeMessage(userInput);
  };
};



function endcodeMessage(input){
  console.log("Inside encode function")

  let encyptedMessage = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase(); 
    const encrpytedChar = caesarCipherDictionary[char];
    encyptedMessage += encrpytedChar
  };

  let outputMessage = document.querySelector(".outputText");
  outputMessage.innerHTML = encyptedMessage;
};


function decodeMessage(input){
  console.log("Inside decode function")

  let decryptedMessage = '';

  for(let i = 0; i < input.length; i++) {
    const char = input[i].toLowerCase();
    const decryptedChar = caesarCipherDictionary[char];
    decryptedMessage += decryptedChar
  };

  let outputMessage = document.querySelector(".outputText");
  outputMessage.innerHTML = decryptedMessage;
};