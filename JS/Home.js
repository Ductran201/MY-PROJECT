const accountIcon = document.querySelector("#accountIcon");
const subAccount = document.querySelector(".sub__menu__account");
const formSignIn = document.querySelector(".signIn");
const modalSignIn = document.querySelector(".modal-signIn");
const userInput = document.querySelector("#userInput");
const passwordInput = document.querySelector("#passwordInput");
const cfPassword = document.querySelector("#cfPassword");
let favorites = document.querySelectorAll(".fa-heart");

// ADD FAVORITE
for (const favorite of favorites) {
  favorite.addEventListener("click", () => {
    if (!favorite.classList.contains("red-heart")) {
      favorite.classList.add("red-heart");
    } else {
      favorite.classList.remove("red-heart");
    }
  });
}

// OPEN SUBACCOUNT
accountIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!subAccount.classList.contains("open-subaccount")) {
    subAccount.classList.add("open-subaccount");
  } else {
    subAccount.classList.remove("open-subaccount");
  }
});

subAccount.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  subAccount.classList.remove("open-subaccount");
});
