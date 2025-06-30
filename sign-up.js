// Sign Up Page
const signupEmailInput = document.querySelector("#signup-email-input");
const signupPasswordInput = document.querySelector("#signup-password-input");
const signupBtn = document.querySelector("#signup-btn");
const signupNameInput = document.querySelector("#signup-name-input");
const signupErrorText = document.querySelector("#signup-error-text");

// WARN: I am using fake accounts
let accounts = [
  { name: "Mostafa Mohamed", email: "mostafa@mostafa", password: "1234" },
  { name: "Ahmed Omar", email: "ahmed@ahmed", password: "5678" },
];
let loggedInEmail = null;

initializeWebsite();
// functions
function initializeWebsite() {
  if (localStorage.getItem("accounts") !== null) {
    accounts = JSON.stringify(localStorage.getItem("accounts"));
  }

  if (localStorage.getItem("loggedInEmail") === null) {
    loggedInEmail = JSON.stringify(localStorage.getItem("loggedInEmail"));
  }
}
