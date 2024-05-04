const accountIcon = document.querySelector("#accountIcon");
const formSignUp = document.querySelector(".signUp");
const modalSignUp = document.querySelector(".modal-signUp");
const userInput = document.querySelector("#userInput");
const passwordInput = document.querySelector("#passwordInput");
const cfPassword = document.querySelector("#cfPassword");
const ShowPassword = document.querySelector("#ShowPassword");
const ShowCfPassword = document.querySelector("#ShowCfPassword");

// EVENT SUBMIT FORM
formSignUp.addEventListener("submit", (e) => {
  e.preventDefault();
  // PASSWORD IS NOT MATCH
  if (passwordInput.value !== cfPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Failed",
      customClass: "swal-wide",
      text: "Password is not match!",
      confirmButtonText: "Try again",
    });
    // SIGN UP SUCCESFULL
  } else {
    const usersLocal = JSON.parse(localStorage.getItem("users")) || [];
    const user = {
      username: userInput.value,
      password: passwordInput.value,
    };
    usersLocal.push(user);
    localStorage.setItem("users", JSON.stringify(usersLocal));
    userInput.value = "";
    passwordInput.value = "";
    cfPassword.value = "";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Sign up successfully!!!",
      customClass: "swal-wide",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "./SignIn.html";
    });
  }
});

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

// SHOW CF PASSWORD
ShowCfPassword.addEventListener("click", () => {
  if (ShowCfPassword.classList.contains("fa-eye-slash")) {
    ShowCfPassword.classList.remove("fa-eye-slash");
    ShowCfPassword.classList.add("fa-eye");
    cfPassword.type = "text";
  } else {
    ShowCfPassword.classList.remove("fa-eye");
    ShowCfPassword.classList.add("fa-eye-slash");
    cfPassword.type = "password";
  }
});
