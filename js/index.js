// Login Page
const loginEmailInput = document.querySelector("#login-email-input");
const loginPasswordInput = document.querySelector("#login-password-input");
const loginBtn = document.querySelector("#login-btn");
const loginErrorText = document.querySelector("#login-error-text");

let accounts = [];

initializePage();

loginBtn.addEventListener("click", () => {
  login();
});

// functions
function initializePage() {
  // already logged in
  if (localStorage.getItem("loggedInName") !== null) {
    window.open("home.html", "_self");
  }

  if (localStorage.getItem("accounts") !== null) {
    accounts = JSON.parse(localStorage.getItem("accounts"));
  }
}

function login() {
  const email = loginEmailInput.value.trim();
  const password = loginPasswordInput.value;

  if (email === "" || password === "") {
    loginErrorText.classList.remove("d-none");
    loginErrorText.textContent = "All inputs are required";
    return;
  }

  const account = accounts.find((account) => account.email === email);
  if (
    account === null ||
    account === undefined ||
    account.password !== password
  ) {
    loginErrorText.textContent = "Incorrect email or password";
    loginErrorText.classList.remove("d-none");
    return;
  }

  localStorage.setItem("loggedInName", account.name);
  window.open("home.html", "_self");
}

// var path = window.location.pathname;
// var page = path.split("/").pop();
// console.log(page);
