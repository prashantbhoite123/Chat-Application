AOS.init({
  duration: 2000,
});

const input = document.querySelector("#input");
const form = document.querySelector("form");
console.log(form);
const sendBtn = document.querySelector("#send-btn");
const angleChat = document.querySelector(".text-chat-1");
const prasuChat = document.querySelector(".text-chat-2");
const prashuSend = document.querySelector(".send-chat-1");
console.log(prashuSend);
console.log(angleChat);
console.log(sendBtn);
console.log(input);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form submit");
  console.log(input.value);
  angleChat.innerHTML += ` <p class="accept-chat">${input.value}</p>`;
  prasuChat.innerHTML += `<p class="accept-prahu">${input.value}</p>`;
});
