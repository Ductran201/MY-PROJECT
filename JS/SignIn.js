const accountIcon = document.querySelector("#accountIcon");
const formSignIn = document.querySelector(".signIn");
const modalSignIn = document.querySelector(".modal-signIn");
const userInput = document.querySelector("#userInput");
const passwordInput = document.querySelector("#passwordInput");
const ShowPassword = document.querySelector("#ShowPassword");

// SHOW PASSWORD
ShowPassword.addEventListener("click", () => {
  if (ShowPassword.classList.contains("fa-eye-slash")) {
    ShowPassword.classList.remove("fa-eye-slash");
    ShowPassword.classList.add("fa-eye");
    passwordInput.type = "text";
  } else {
    ShowPassword.classList.remove("fa-eye");
    ShowPassword.classList.add("fa-eye-slash");
    passwordInput.type = "password";
  }
});

// EVENT SUBMIT FORM
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();
  let usersLocal = JSON.parse(localStorage.getItem("users")) || [];
  console.log(usersLocal);
  let flag = false;
  //   CHECK THE ACCOUNT
  for (let i = 0; i < usersLocal.length; i++) {
    let user = usersLocal[i];
    if (
      userInput.value == user.username &&
      passwordInput.value == user.password
    ) {
      console.log("ádasdsad");
      flag = true;
      break;
      // window.location.href = "User/Index.html";
    } else if (
      userInput.value == "admin@123" &&
      passwordInput.value == "123456789"
    ) {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }

  if (flag) {
    window.location.href = "User/Index.html";
  } else {
    passwordInput.value = "";
    Swal.fire({
      icon: "error",
      title: "Failed",
      customClass: "swal-wide",
      text: "Login failed",
      confirmButtonText: "Try again",
    });
  }
});
