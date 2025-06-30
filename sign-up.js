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

initializePage();

signupBtn.addEventListener("click", () => {
  signup();
});

// functions
function initializePage() {
  // Same as when logged in, you need to be logged out to sign up
  if (localStorage.getItem("loggedInName") !== null) {
    window.open("home.html", "_self");
  }

  if (localStorage.getItem("accounts") !== null) {
    accounts = JSON.parse(localStorage.getItem("accounts"));
  }
}

function signup() {
  const name = signupNameInput.value.trim();
  const email = signupEmailInput.value.trim();
  const password = signupPasswordInput.value;

  if (name === "" || email === "" || password === "") {
    signupErrorText.textContent = "All inputs are required";
    signupErrorText.classList.remove("d-none");
    return;
  }

  const account = accounts.find((account) => account.email === email);
  if (account !== null && account !== undefined) {
    signupErrorText.textContent = "email already exists";
    signupErrorText.classList.remove("d-none");
    return;
  }

  const newAccount = { name: name, email: email, password: password };
  accounts.push(newAccount);
  localStorage.setItem("accounts", JSON.stringify(accounts));

  signupErrorText.classList.remove("d-none");
  signupErrorText.classList.remove("text-danger");
  signupErrorText.classList.add("text-success");
  signupErrorText.textContent = "Success";
}
