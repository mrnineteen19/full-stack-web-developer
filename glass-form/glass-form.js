document.getElementById("button").onclick = function() {
    let login = document.getElementById("login").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log("Sizning loginingiz: " + login + " Sizning emailingiz: " + email + "Sizning parolingiz: " + password + "!");
}