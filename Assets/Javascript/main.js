//===========================Calculator
const display = document.getElementById("display");
function addToDisplay(input) {
  display.value += input;
}
function clearDisplay() {
  display.value = "";
}
function calculate() {
  try {
    const result = eval(display.value);
    if (result === Infinity || result === -Infinity) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch (err) {
    display.value = "Error";
  }
}
function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.slice(1);
  } else if (display.value !== "") {
    display.value = "-" + display.value;
  }
}
// ===================== guess the number
const guessInput = document.querySelector(".guess-input");
const triesInput = document.querySelector(".tries-input");
const displayGtn = document.querySelector(".display");
const startBtn = document.querySelector(".start-btn");
const tryBtn = document.querySelector(".try-btn");
const config = {
  tries: 0,
  guessedNumbers: [],
  random: 0,
  userChoice: "",
  computerChoice: "",
};
function startGame() {
  var randomNumb = Math.floor(Math.random() * 100 + 1);
  config.random = randomNumb;
  if (triesInput.value <= 10 && triesInput.value > 0) {
    config.tries = triesInput.value;
  } else {
    alert("Tries should be more than 0 and lower than 10");
  }
  triesInput.value = "";
  displayGtn.value = "The game has started type your guess below";
  console.log(config.random);
}
function checkingNumber() {
  console.log(config.tries);
  if (config.random > 0) {
    if (config.tries == 1 && guessInput.value != config.random) {
      displayGtn.value = `Sorry,you have lost the number was ${config.random}`;
    } else if (config.guessedNumbers.includes(guessInput.value)) {
      displayGtn.value = `You have already guessed this number (${guessInput.value})`;
    } else if (guessInput.value == 0 || guessInput.value == NaN) {
      displayGtn.value = "Input Error";
    } else if (guessInput.value == config.random) {
      displayGtn.value = "Congratulations you successfully guessed the number";
    } else if (guessInput.value > config.random && config.tries >= 1) {
      config.tries -= 1;
      displayGtn.value = `Random number is lower Than guessed one(${config.tries} tries remaining)`;
      config.guessedNumbers += guessInput.value;
    } else if (guessInput.value < config.random && config.tries >= 1) {
      config.tries -= 1;
      displayGtn.value = `Random number is higher Than guessed one(${config.tries} tries remaining)`;
      config.guessedNumbers += guessInput.value;
    }
  } else {
    alert("You havent started game yet!");
  }
}
guessInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkingNumber();
  }
});
triesInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    startGame();
  }
});
function reset() {
  displayGtn.value = "";
  guessInput.value = "";
  config.random = 0;
  guessedNumbers = [];
}
// ================= RPS
const choices = ["rock", "paper", "scissors"];
const resultScreen = document.querySelector(".gameresult");
const choosedElements = document.querySelector(".choicescreen");
const confige = {
  userChoice: "",
  computerChoice: "",
};
function playGame(userInput) {
  confige.userChoice = userInput;
  confige.computerChoice = choices[Math.floor(Math.random() * 3)];
  displayPicked();
  if (
    (confige.userChoice === "rock" && confige.computerChoice === "scissors") ||
    (confige.userChoice === "paper" && confige.computerChoice === "rock") ||
    (confige.userChoice === "scissors" && confige.computerChoice === "paper")
  ) {
    resultScreen.value = "Congratulations,you won!";
  } else if (confige.userChoice === confige.computerChoice) {
    resultScreen.value = "It is a draw";
  } else {
    resultScreen.value = "Oops,you have lost :(";
  }
}
function displayPicked() {
  choosedElements.innerHTML = `
    Player choice: ${confige.userChoice}<br/>
    Computer choice: ${confige.computerChoice}
    `;
}
// ================= Guess the word
const guessInputGtw = document.querySelector(".guess-input-gtw");
const triesInputGtw = document.querySelector(".tries-input-gtw");
const displayWord = document.querySelector(".display-word");
const displayGtw = document.querySelector(".display-gtw");
const startBtnGtw = document.querySelector(".start-btn-gtw");
const tryBtnGtw = document.querySelector(".try-btn-gtw");
const configGtw = {
  triesGtw: 0,
  guessedLetters: [],
  wordList: [
    "apple",
    "skull",
    "school",
    "pear",
    "leverage",
    "earth",
    "transformer",
    "superhero",
    "villain",
    "moon",
    "car",
    "sun",
    "physics",
    "computer",
    "program",
    "page",
    "network",
    "internet",
    "port",
    "boat",
    "protocol",
    "petrol",
    "diesel",
    "needle",
  ],
  randomGtw: "",
  length: 0,
};
function startGameGTW() {
  var randomWord =
    configGtw.wordList[Math.floor(Math.random() * configGtw.wordList.length)];
  console.log(randomWord);
  configGtw.randomGtw = randomWord;
  configGtw.length = randomWord.length;
  if (triesInputGtw.value <= 10 && triesInputGtw.value > 0) {
    configGtw.triesGtw = triesInputGtw.value;
  } else {
    alert("Tries should be more than 0 and lower than 10");
  }
  triesInputGtw.value = "";
  console.log(configGtw.triesGtw, configGtw.randomGtw, configGtw.length);
  var hiddenWord = configGtw.randomGtw
    .split("")
    .map(() => "_ ")
    .join("");
  displayWord.value = hiddenWord;
}
function checkingWord() {
  if (configGtw.randomGtw != "") {
    if (
      configGtw.triesGtw == 1 &&
      configGtw.randomGtw.search(guessInputGtw.value) == -1
    ) {
      displayGtw.value = `Sorry,you have lost the word was ${configGtw.randomGtw}(Restart to play again)`;
    } else if (configGtw.guessedLetters.includes(guessInputGtw.value)) {
      displayGtw.value = `You have already guessed this letter (${guessInputGtw.value})`;
    } else if (!isLetter(guessInputGtw.value)) {
      displayGtw.value = "Input Error";
      return;
    } else if (configGtw.randomGtw.search(guessInputGtw.value) > -1) {
      configGtw.guessedLetters += guessInputGtw.value;
      revealLetterInWord(guessInputGtw.value);
      console.log(
        displayWord.value.split(" ").join(""),
        guessInputGtw.value,
        configGtw.randomGtw
      );
      if (displayWord.value.split(" ").join("") === configGtw.randomGtw) {
        let wonDisplay = displayWord.value.split(" ").join("");
        displayWord.value = wonDisplay;
        displayGtw.value =
          "Congratulations you have succesfully guessed the word (Restart to play again)";
      } else {
        displayGtw.value = `The letter is correct(${configGtw.triesGtw} failed attempts remaining)`;
      }
    } else {
      configGtw.guessedLetters += guessInputGtw.value;
      --configGtw.triesGtw;
      displayGtw.value = `Oops,the letter you typed (${guessInputGtw.value}) is incorrect (${configGtw.triesGtw} failed attempts remaining)`;
    }
  } else {
    alert("You havent started game yet!");
  }
  guessInputGtw.value = "";
}
function resetGTW() {
  displayGtw.value = "";
  displayWord.value = "";
  guessInputGtw.value = "";
  configGtw.random = "";
  configGtw.length = 0;
  configGtw.guessedLetters = [];
}
function isLetter(input) {
  return /^[A-Za-z]$/.test(input);
}
function replaceAt(originalString, index, replacement) {
  if (index >= 0 && index < originalString.length) {
    return (
      originalString.substring(0, index) +
      replacement +
      originalString.substring(index + 1)
    );
  } else {
    return originalString;
  }
}
// function revealLetterInWord(guessedLetter) {
//   let newDisplay = "";
//   for (let i = 0; i < config.random.length; i++) {
//     if (config.random[i] === guessedLetter) {
//       // If the guessed letter matches, add it to the new display string without a trailing space
//       newDisplay += guessedLetter;
//     } else if (displayWord.value[i] !== "_") {
//       // If the letter at this position is already revealed, keep it as is
//       newDisplay += displayWord.value[i];
//     } else {
//       // Otherwise, add a placeholder without a trailing space
//       newDisplay += "_";
//     }
//   }
//   displayWord.value = newDisplay; // Update the display word with the new string
// }
function revealLetterInWord(guessedLetter) {
  let displayArray = displayWord.value.split(" ");

  for (let i = 0; i < configGtw.randomGtw.length; i++) {
    if (configGtw.randomGtw[i].toLowerCase() === guessedLetter.toLowerCase()) {
      displayArray[i] = configGtw.randomGtw[i];
    }
  }

  displayWord.value = displayArray.join(" ");
}
guessInputGtw.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    checkingWord();
  }
});
triesInputGtw.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    startGameGTW();
  }
});
let value1 = "_ _ _ _";
console.log(value1.split(" "));
// ========================= API
const searchInput = document.querySelector("#product");
const searchButton = document.querySelector("#searchBtn");
const productList = document.querySelector("#displayproduct");
const clearBtn = document.querySelector(".clearBtn");
let addedProducts = {};
// const API_URL =
//   "https://api.everrest.educata.dev/shop/products/search?keywords=";

async function searchProduct(word) {
  if (word === "") {
    productList.innerHTML = "";
    addedProducts = {};
    return;
  }
  //   searchInput.value = "";
  productList.innerHTML = "";
  try {
    const response = await xhrRequest(
      "GET",
      `https://api.everrest.educata.dev/shop/products/search?keywords=${String(
        word
      )}`
    );
    addedProducts = "";
    response.products.forEach((product) => {
      //   console.log(product);
      addProductInTable(product);
      //   if (!addedProducts[product.id]) {
      //     addProductInTable(product);
      //     addedProducts[product.id] = true;
      //   }
    });
  } catch (err) {
    console.log(err);
  }
}
// searchProduct("asus");
// /searchProduct("asus");
searchButton.addEventListener("click", () => {
  searchProduct(searchInput.value.trim());
});
// searchInput.addEventListener("keyup", () => {
//   //   if (event.key === "Enter") {
//   //     searchProduct(searchInput.value.trim());
//   //   }
//   //   productList.innerHTML = "";
//   searchProduct(searchInput.value.trim());
// });
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchProduct(searchInput.value);
  }
});
clearBtn.addEventListener("click", () => {
  productList.innerHTML = "";
  searchInput.value = "";
});
function addProductInTable(response) {
  productList.innerHTML += `
    <tr>
    <td>${response.brand}</td>
    <td>${response.category.name}</td>
    <td>${response.title}</td>
    <td>${response.description}</td>
    <td>${response.price.current} ${response.price.currency}</td>
    <td><img src="${response.thumbnail}" alt="product image"></td>
    <td><button type="button" class="btn btn-success">Buy now</button></td>
    </tr>
    `;
}
function xhrRequest(method, url, body = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  if (method !== "GET") {
    xhr.setRequestHeader("Content-Type", "application/json");
  }
  xhr.send(JSON.stringify(body));
  return new Promise((resolve, reject) => {
    xhr.onerror = () => {
      reject(JSON.parse(xhr.responseText));
    };
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(JSON.parse(xhr.responseText));
      }
    };
  });
}
