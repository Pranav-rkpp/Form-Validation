let form = document.querySelector("#form");

//select input fields
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirm_password = document.querySelector("#confirm_password");

//validate inputs function
function validateInputs() {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const confirm_passwordval = confirm_password.value.trim();
    let flag = true;
    if (usernameval === "") {
        setError(username, "username is required");
        flag = false;
    } else {
        setSuccess(username);
    }
    if (emailval === "") {
        setError(email, "email is required");
        flag = false;
    } else if (!validateEmail(emailval)) {
        setError(email, "Please enter valid email id");
        flag = false;
    } else {
        setSuccess(email);
    }
    if (passwordval === "") {
        setError(password, "password is required");
        flag = false;
    } else if (passwordval.length < 8) {
        setError(password, "password must be atleast 8 characters long");
        flag = false;
    } else {
        setSuccess(password);
    }
    if (confirm_passwordval === "") {
        setError(confirm_password, "confirm password is required");
        flag = false;
    } else if (confirm_passwordval !== passwordval) {
        setError(confirm_password, "password does not match");
        flag = false;
    } else {
        setSuccess(confirm_password);
    }
    return flag;
}

//function to set error class and message
function setError(element, message) {
    const liElement = element.parentElement;
    const errorElement = liElement.querySelector(".error");
    errorElement.textContent = message;
    liElement.classList.add("error");
    liElement.classList.remove("success");
}
//function to set success class without message
function setSuccess(element) {
    const liElement = element.parentElement;
    const errorElement = liElement.querySelector(".error");
    errorElement.textContent = "";
    liElement.classList.add("success");
    liElement.classList.remove("error");
}
//validate email address format
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
//Stop from form submission
form.addEventListener("submit", (event) => {
    if (!validateInputs()) event.preventDefault();
    else
        validateInputs();
});