const grandparent = document.querySelector(".box11");
const parent = document.querySelector(".box12");
const button = document.querySelector(".btn");
const logContainer = document.querySelector(".eventlog-container");

function log(text) {
  const div = document.createElement("div");
  div.className = "event-item";
  div.textContent = text;
  logContainer.appendChild(div);
}

function clearLog() {
  logContainer.innerHTML = "";
}

grandparent.addEventListener("click",() => {
      clearLog();
      log("Grandparent - Capturing");
},true);

parent.addEventListener("click",() => {
      log("Parent - Capturing");
},true);

button.addEventListener("click", (e) => {
  log("Button - Target");
});

parent.addEventListener("click", () => {
  log("Parent - Bubbling")
});

grandparent.addEventListener("click", () => {
  
  log("Grandparent - Bubbling")
});
