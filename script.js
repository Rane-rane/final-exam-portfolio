function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "sirjabez" && password === "amaz1ng!") {
    window.location.href = "home.html";
    return false;
  } else {
    alert("Invalid username or password!");
    return false;
  }
}
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});
