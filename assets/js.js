// Section 1
const helloMsg = document.getElementById("hello-msg");
const PI = 3.14;

document.getElementById("submitInput").onclick = function () {
  const username = document.getElementById("inputUsername").value;
  const outputMsg = document.getElementById("outputUsername");

  helloMsg.textContent += username === "" ? ", Guest" : `, ${username}`;
  outputMsg.textContent +=
    username === ""
      ? "You don't have an username"
      : `Your username is ${username}`;

  let radius = document.getElementById("inputRadius").value;
  radius = Number(radius);

  let circumference = Math.round(2 * PI * radius);
  document.getElementById("outputRadius").textContent =
    `The circumference of your circle is ${circumference}cm`;
};

// section 2
let counter = 0;
document.getElementById("outputCounter").textContent = counter;

document.getElementById("btnIncrease").onclick = function () {
  counter++;
  document.getElementById("outputCounter").textContent = counter;
};

document.getElementById("btnDecrease").onclick = function () {
  counter--;
  document.getElementById("outputCounter").textContent = counter;
};

document.getElementById("btnReset").onclick = function () {
  counter = 0;
  document.getElementById("outputCounter").textContent = counter;
};

// section 3
document.getElementById("btnGenRandNum").onclick = function () {
  const randNumMin = Number(document.getElementById("inputLowest").value);
  const randNumMax = Number(document.getElementById("inputHighest").value);
  randNum =
    Math.floor(Math.random() * (randNumMax - randNumMin)) + (randNumMin + 1);
  document.getElementById("outputRandNum").textContent = randNum;
};

// section 4
const mastercard = document.getElementById("radioMastercard");
const visa = document.getElementById("radioVisa");
const discover = document.getElementById("radioDiscover");
const amex = document.getElementById("radioAmex");
const subscribe = document.getElementById("checkSubscribe");
const continueBtn = document.getElementById("continueBtn");
const backBtn = document.getElementById("backBtn");
const paymentMethodDiv = document.getElementById("paymentMethod");

continueBtn.onclick = function () {
  // mastercard
  if (mastercard.checked) {
    if (subscribe.checked) {
      paymentMethodDiv.innerHTML = `
            <p>Great!</p>
            <p>You selected Mastercard</p>
            <p>Thank you for subscribing</p>
            `;
    } else {
      paymentMethodDiv.innerHTML = `
                <p>Great!</p>
                <p>You selected Mastercard</p>
            `;
    }
  }

  // visa
  if (visa.checked) {
    if (subscribe.checked) {
      paymentMethodDiv.innerHTML = `
            <p>Great!</p>
            <p>You selected Visa</p>
            <p>Thank you for subscribing</p>
        `;
    } else {
      paymentMethodDiv.innerHTML = `
                <p>Great!</p>
                <p>You selected Visa</p>
            `;
    }
  }

  // discover
  if (discover.checked) {
    if (subscribe.checked) {
      paymentMethodDiv.innerHTML = `
            <p>Great!</p>
            <p>You selected Discover</p>
            <p>Thank you for subscribing</p>
        `;
    } else {
      paymentMethodDiv.innerHTML = `
                <p>Great!</p>
                <p>You selected discover</p>
            `;
    }
  }

  // amex
  if (amex.checked) {
    if (subscribe.checked) {
      paymentMethodDiv.innerHTML = `
            <p>Great!</p>
            <p>You selected American Express</p>
            <p>Thank you for subscribing</p>
        `;
    } else {
      paymentMethodDiv.innerHTML = `
                <p>Great!</p>
                <p>You selected American Express</p>
            `;
    }
  }
};

// section 5
document.getElementById("identifyBtn").onclick = function () {
  // get data from user input
  const fullName = document.getElementById("inputFullName").value;
  const email = document.getElementById("inputEmail").value;

  // indentify names
  let firstName = fullName.slice(0, fullName.indexOf(" "));
  document.getElementById("outputFirstName").textContent =
    `Your first name is ${firstName}, `;
  let lastName = fullName.slice(fullName.indexOf(" ") + 1);
  document.getElementById("outputLastName").textContent =
    `your last name is ${lastName}, `;

  // validate email
  if (email.includes("@") && email.includes(".")) {
    document.getElementById("outputEmail").textContent =
      "and your email is valid.";
  } else {
    document.getElementById("outputEmail").textContent =
      "but your email is not valid.";
  }
};

// section 6
const numberToGuess = Math.floor(Math.random() * 100 + 1);
document.getElementById("guessBtn").onclick = function () {
  guess = document.getElementById("inputNumberGuess").value;
  if (guess > numberToGuess) {
    document.getElementById("tryMessage").textContent =
      `Nop, ${guess} is too high. Try again!`;
  } else if (guess < numberToGuess) {
    document.getElementById("tryMessage").textContent =
      `Nop, ${guess} is too low. Try again!`;
  } else {
    document.getElementById("tryMessage").textContent = `You got it!`;
    document.getElementById("outputNumberToGuess").textContent = numberToGuess;
  }
};

// section 7
const fahRadio = document.getElementById("radioFahToCel");
const celRadio = document.getElementById("radioCelToFah");

function fahToCelcius(temperature) {
  return (((temperature - 32) * 5) / 9).toFixed(2);
}

function celToFahrenheit(temperature) {
  return (temperature * 1.8 + 32).toFixed(2);
}

document.getElementById("convertBtn").onclick = function () {
  let temperature = Number(document.getElementById("inputTemp").value);

  if (fahRadio.checked) {
    let celcius = fahToCelcius(temperature);
    document.getElementById("outputTemp").textContent = `${celcius}ºC`;
  } else if (celRadio.checked) {
    let fahrenheit = celToFahrenheit(temperature);
    document.getElementById("outputTemp").textContent = `${fahrenheit}ºF`;
  }
};

// Dice roller program
function rollDice() {
  const rollDiceInput = document.getElementById("rollDiceInput").value;
  const outputDiceResult = document.getElementById("outputDiceResult");
  const diceValue = [];

  for (let i = 0; i < rollDiceInput; i++) {
    const rollDice = Math.floor(Math.random() * 6) + 1;
    diceValue.push(
      `<img src="assets/imgs/dice/${rollDice}.png" alt="Dice value is ${rollDice}">`,
    );
  }
  outputDiceResult.innerHTML = `<p>You got:</p> ${diceValue.join("")}`;
}

// Password generator section
// Getting input
const checkNumbers = document.getElementById("checkNumbers");
const checkSpecialChars = document.getElementById("checkSpecialChars");
const outputPassword = document.getElementById("outputPassword");

function generatePassword() {
  // password default chars
  let password = "";
  let chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // validate user password parameters
  if (checkNumbers.checked) {
    chars.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  if (checkSpecialChars.checked) {
    chars.push(
      "!",
      "@",
      "#",
      "$",
      "%",
      "&",
      "*",
      "(",
      ")",
      "_",
      "+",
      "-",
      "=",
      "?",
    );
  }

  //generate password (16 chars) and display it
  for (let i = 0; i < 16; i++) {
    const randIndex = Math.floor(Math.random() * chars.length);
    const randChar = chars[randIndex];
    password += randChar;
  }

  // Reset password string and char list
  console.log(password);
  outputPassword.value = password;
}

// Section timer
const stopwatchOutput = document.getElementById("stopwatchOutput");
const stopTimer = document.getElementById("stopBtn");
const startTimer = document.getElementById("startBtn");
const resetTimer = document.getElementById("resetBtn");

let elapsed = 0;
let interval;

startTimer.addEventListener("click", function () {
  interval = setInterval(() => {
    elapsed += 10;
    let ms = Math.floor((elapsed % 1000) / 10);
    let sec = Math.floor((elapsed / 1000) % 60);
    let min = Math.floor(elapsed / 60000);
    ms = ms.toString().padStart(2, 0);
    sec = sec.toString().padStart(2, 0);
    min = min.toString().padStart(2, 0);
    stopwatchOutput.textContent = `${min}:${sec}:${ms}`;
  }, 10);

  stopTimer.addEventListener("click", function () {
    clearInterval(interval);
  });

  resetTimer.addEventListener(
    "click",
    () => ((elapsed = 0), (stopwatchOutput.textContent = "00:00:00")),
  );
});

// interest calculator program

function calculateInterest() {
  const principalInput = document.getElementById("principalInput").value;
  const interestInput = document.getElementById("interestInput").value;
  const timeInput = document.getElementById("timeInput").value;
  const interestOutput = document.getElementById("interestOutput");

  let principal = Number(principalInput);
  let rate = Number(interestInput / 100);
  let time = Number(timeInput);

  if (isNaN(principal) || principal < 1) {
    principal = 0;
    principalInput.value = "";
    window.alert("Invalid Principal. Please try again.");
  }
  if (isNaN(rate) || rate <= 0) {
    rate = 0;
    interestInput.value = "";
    window.alert("Invalid interest %. Please try again.");
  }
  if (isNaN(time) || time < 0.083) {
    time = 0;
    timeInput.value = "";
    window.alert("Invalid time. Please try again.");
  }

  let interest = principal * Math.pow(1 + rate / 1, 1 * time);
  interest = interest.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });

  interestOutput.textContent = interest;
  console.log(interest);
}

// clock program section

function clock() {
  const clock = document.getElementById("clock");

  const time = new Date();
  let hours = time.getHours().toString().padStart(2, 0);
  hours = hours % 12 || 12;
  const meridian = hours > 11 ? "AM" : "PM";
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);
  const formattedTime = `${hours}:${minutes}:${seconds} ${meridian}`;

  clock.textContent = formattedTime;
}

clock();
setInterval(clock, 1000);

// Calculator program section
const calcDisplay = document.getElementById("calcDisplay");

function calcOutput(input) {
  calcDisplay.value += input;
}

function calcResult() {
  try {
    calcDisplay.value = eval(calcDisplay.value);
  } catch (error) {
    calcDisplay.value = "Error";
  }
}

function caclClear() {
  calcDisplay.value = "";
}

// FRUITS SECTION
const fruitsBg = document.getElementById("fruits-bg");
const firstFruits = document.querySelectorAll("ul");
const lastFruits = document.querySelectorAll("ul");
const firstSibling = document.getElementById("group-1");
const middleSibling = document.getElementById("group-2");
const lastSibling = document.getElementById("group-3");

firstFruits.forEach((element) => {
  const firstChild = (element.firstElementChild.style.backgroundColor = "cyan");
});

lastFruits.forEach((element) => {
  lastChild = element.lastElementChild;
  lastChild.style.backgroundColor = "lightgreen";
});

// first group
middleSibling.previousElementSibling.style.backgroundColor = "salmon";

// second group
firstSibling.nextElementSibling.style.backgroundColor = "yellow";

// third group
middleSibling.nextElementSibling.style.backgroundColor = "violet";

function setColorOne() {
  fruitsBg.style.backgroundColor = "rgb(255 243 205)";
}

function setColorTwo() {
  fruitsBg.style.backgroundColor = "rgb(207 226 255)";
}

function setColorThree() {
  fruitsBg.style.backgroundColor = "rgb(208 231 221)";
}

function clearBgColor() {
  fruitsBg.style.backgroundColor = "white";
}

// BOMB SECTION
const bombBtn = document.getElementById("bomb-btn");
const bombContainer = document.getElementById("bomb");

bombBtn.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
  event.target.style.fontSize = "1.3em";
  event.target.textContent = "DO NOT!";
});

bombBtn.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.fontSize = "1em";
  event.target.textContent = "Don't click me ⚠️";
});

bombBtn.addEventListener("click", (event) => {
  bombContainer.innerHTML = `
    <style>
      object-fit="cover"
    </style> 

     <video width="100%" height="100%" style="object-fit: cover;" autoplay>
      <source src="assets/imgs/boom.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
});

// INTERACTIVE EMOJI
const emoji = document.getElementById("emoji");
const speed = 10;
let y = 0;
let x = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= speed;
        break;
      case "ArrowDown":
        y += speed;
        break;
      case "ArrowLeft":
        x -= speed;
        break;
      case "ArrowRight":
        x += speed;
        break;
    }

    emoji.style.top = `${y}px`;
    emoji.style.left = `${x}px`;
  }
});

// ROCK, PAPER, SCISSORS GAME
const computerScoreOutput = document.getElementById("computer-score-output");
const userScoreOutput = document.getElementById("user-score-output");
const rpsBtns = document.getElementsByClassName("choice");
const choices = ["rock", "paper", "scissors"];
const resultOutput = document.getElementById("rps-result");
const playAgainBtn = document.getElementById("rps-play-again");
let isGameOver = false;
let isFirstRound = true;
let userScore = 0;
let computerScore = 0;
let result = "";

if (isFirstRound) {
  playAgainBtn.style.visibility = "hidden";
}

function play(play) {
  const userChoice = play;
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice == computerChoice) {
    userScore++;
    computerScore++;
    userScoreOutput.textContent = userScore;
    computerScoreOutput.textContent = computerScore;
    resultOutput.textContent = "Tie!";
  } else {
    const wins = { rock: "scissors", paper: "rock", scissors: "paper" };
    if (wins[userChoice] === computerChoice) {
      userScore++;
      userScoreOutput.textContent = userScore;
    } else {
      computerScore++;
      computerScoreOutput.textContent = computerScore;
    }
    resultOutput.textContent = `Computer: ${computerChoice}`;
  }

  if (userScore == 3 && computerScore == 3) {
    result = "It's a tie!";
    resultOutput.textContent = result;
    isGameOver = true;
  } else if (userScore == 3) {
    result = "You win!";
    resultOutput.textContent = `Computer: ${computerChoice} - ${result}`;
    resultOutput.classList.add("rps-result-1");
    isGameOver = true;
  } else if (computerScore == 3) {
    result = "You lost!";
    resultOutput.textContent = `Computer: ${computerChoice} - ${result}`;
    resultOutput.classList.add("rps-result-2");
    isGameOver = true;
  }

  if (isGameOver) {
    playAgainBtn.style.visibility = "visible";
    Array.from(rpsBtns).forEach((btn) => {
      btn.disabled = true;
    });
  }
}

playAgainBtn.addEventListener("click", (event) => {
  isGameOver = false;
  playAgainBtn.style.visibility = "hidden";
  userScore = 0;
  computerScore = 0;
  result = "";
  userScoreOutput.textContent = userScore;
  computerScoreOutput.textContent = computerScore;
  resultOutput.textContent = "Good luck!";
  resultOutput.classList.remove("rps-result-1", "rps-result-2");
  Array.from(rpsBtns).forEach((btn) => {
    btn.disabled = false;
  });
});

// CAR CONCESSIONARY
const slides = document.querySelectorAll("#cars img");
let slideIndex = 0;
let slidesInterval = null;

document.addEventListener("DOMContentLoaded", initializerSlider);

function initializerSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("show-img");
    slidesInterval = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("show-img");
  });
  slides[slideIndex].classList.add("show-img");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function previousSlide() {
  clearInterval(slidesInterval);
  slideIndex--;
  showSlide(slideIndex);
}

// POKEMON FINDER SECTION
const outputPokemon = document.getElementById("pokemonDataOutput");

document.getElementById("inputPokemonName").addEventListener("keydown", (e) => {
  if (e.key === "Enter") findPokemon(e.target.value.toLowerCase());
});

async function findPokemon(pokemon) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (!res.ok) {
      console.error("Pokemon not found");
      outputPokemon.innerHTML = `<p class="m-0 pokemonOutput">Pokemon not found.</p>`;
      return;
    }

    const data = await res.json();
    displayPokemon(
      data.sprites.front_default,
      data.name,
      data.weight,
      data.height,
      data.id,
    );
  } catch (error) {
    console.error(`Could not fetch resource - ${error}`);
  }
}

function displayPokemon(pokemon, name, weight, height, id) {
  name = name.charAt(0).toUpperCase() + name.slice(1);

  outputPokemon.innerHTML = `
    <img 
      src="${pokemon}" 
      alt="Image of a Pokemon"
      id="pokemonDataOutput"
      style="height: 300px;">
    </img>
    <div>
      <p>Name: ${name}</p>
      <p>Weight: ${weight}(kg)</p>
      <p>Height: ${height}(m)</p>
      <p>ID: ${id}</p>
    </div>
  `;
}

// THE WEATHER SECTION
const cityInput = document.getElementById("weatherInput");
const weatherCard = document.querySelector(".weatherCard");
const weatherContainer = document.getElementById("weather");
const apiKey = "d80d81e952366a55c7f11a9107b5b1f3";

cityInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const weatherData = await getWeatherData(e.target.value);
    displayWeatherInfo(weatherData);
  }
});

async function getWeatherData(city) {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const res = await fetch(apiUrl);

    if (!res.ok) {
      console.error(`Could not fetch weather data for "${city}"`);
      window.alert(`404 Not Found: ${city}`);
    }

    return await res.json();
  } catch (err) {
    console.error(err);
  }
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  const emoji = getWeatherEmoji(id);
  const fah = Math.floor(((temp - 273.15) * 9) / 5 + 32);
  weatherBackground(id);

  weatherCard.innerHTML = `
    <h1 class="weatherCity">${city}</h1>
    <h1 class="weatherTemp">${fah}ºF</h1>
    <p class="weatherDescription">${description}</p>
    <p class="weatherHumidity">Humidity: ${humidity}%</p>
    <p class="weatherEmoji">${emoji}</p>
  `;
}

function getWeatherEmoji(id) {
  switch (true) {
    case id >= 200 && id < 300:
      return "⛈️";
      break;
    case id >= 500 && id < 600:
      return "🌧️";
      break;
    case id >= 600 && id < 700:
      return "🌨️";
      break;
    case id >= 700 && id < 800:
      return "🌫️";
      break;
    case id === 800:
      return "☀️";
      break;
    case id > 800:
      return "☁️";
      break;
  }
}

function weatherBackground(id) {
  weatherContainer.classList.remove(
    "weatherBg",
    "thunderstorm",
    "rain",
    "snow",
    "atmosphere",
    "clear",
    "cloudy",
  );

  switch (true) {
    case id >= 200 && id < 300:
      weatherContainer.classList.add("thunderstorm");
      break;
    case id >= 500 && id < 600:
      weatherContainer.classList.add("rain");
      break;
    case id >= 600 && id < 700:
      weatherContainer.classList.add("snow");
      break;
    case id >= 700 && id < 800:
      weatherContainer.classList.add("atmosphere");
      break;
    case id === 800:
      weatherContainer.classList.add("clear");
      break;
    case id > 800:
      weatherContainer.classList.add("cloudy");
      break;
  }
}
