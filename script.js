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
    alert("send chat");
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
console.log(userDataSend);
console.log(formTwo);
console.log(prahuInput);

formTwo.addEventListener("submit", (e) => {
  e.preventDefault();
  if (prahuInput.value.trim() === "") {
    alert("send chat");
  } else {
    angleChat.innerHTML += ` <p class="userAccepat-data">${prahuInput.value}</p>`;
    prasuChat.innerHTML += `  <p class="userDatasend">${prahuInput.value}</p>`;
    prahuInput.value = "";
  }
});
