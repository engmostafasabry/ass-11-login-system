// home page
const logoutBtn = document.querySelector("#logout-btn");
const greetingText = document.querySelector("#greeting-title");

initializePage();

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInName");
  window.open("index.html", "_self");
});

// functions
function initializePage() {
  if (localStorage.getItem("loggedInName") !== null) {
    const loggedInName = localStorage.getItem("loggedInName");
    greetingText.textContent = `Welcome ${loggedInName}`;
  } else {
    window.open("index.html", "_self");
  }
}
