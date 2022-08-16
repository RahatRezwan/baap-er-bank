document.getElementById("login-btn").addEventListener("click", function () {
    //get the user email from the email input field
    const emailField = document.getElementById("email");
    const userEmail = emailField.value;

    //get the user password from the password input field
    const passwordField = document.getElementById("password");
    const userPassword = passwordField.value;

    //DANGER: DO NOT VERIFY email and password  ON THE CLIENT SIDE.

    //verfy email and password:
    if (userEmail === "baaperbeta@gmail.com" && userPassword === "baaperbank1234") {
        location.href = "bank.html";
    } else {
        alert("Invalid User");
    }
});
