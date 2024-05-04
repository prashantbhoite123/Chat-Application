AOS.init({
  duration: 2000,
});

const input = document.querySelector("#input");
const form = document.querySelector("form");
const sendBtn = document.querySelector("#send-btn");
const angleChat = document.querySelector(".text-chat-1");
const prasuChat = document.querySelector(".text-chat-2");
const prashuSend = document.querySelector(".send-chat-1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Chalaajaa Bhosadeekeee";
    window.speechSynthesis.speak(speech);
  } else {
    angleChat.innerHTML += ` <p class="accept-chat">${input.value}</p>`;
    prasuChat.innerHTML += `<p class="accept-prahu">${input.value}</p>`;
    input.value = "";
  }
});

const prahuInput = document.querySelector("#parshu-chat");
const formTwo = document.querySelector("#fromTwo");
const sendParshu = document.querySelector("#send-prahu");
const userAcceptdata = document.querySelector(".userAccepat-data");
const userDataSend = document.querySelector(".userDatasend");
const clearBtn = document.querySelector("#clearBtn");
console.log(clearBtn);

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (prahuInput.value.trim() === "") {
    let speech = new SpeechSynthesisUtterance();
    speech.text = "Chalaajaa Bhosadeekeee";
    window.speechSynthesis.speak(speech);
  } else {
    angleChat.innerHTML += ` <p class="userAccepat-data">${prahuInput.value}</p>`;
    prasuChat.innerHTML += `  <p class="userDatasend">${prahuInput.value}</p>`;
    prahuInput.value = "";
  }
});

const vishalBtn = document.querySelector("#vishalBtn");
const masaBtn = document.querySelector("#masaBtn");
const moreInformation = document.querySelector(".moreinformation");

const moreInformation2 = document.querySelector(".moreinformationTwo");
const body = document.body;

vishalBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  moreInformation.classList.add("hide");
});

masaBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  moreInformation2.classList.add("hide");
});

body.addEventListener("click", (e) => {
  moreInformation2.classList.remove("hide");
  moreInformation.classList.remove("hide");
});
