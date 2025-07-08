function validateLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "SirJabez" && password === "amaz1ng!") {
    window.location.href = "index.html";
    return false;
  } else {
    alert("Invalid username or password!");
    return false;
  }
}
window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
});
