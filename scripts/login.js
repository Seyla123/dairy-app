import {setLoginStatus} from './auth.js'

const formLogin = document.querySelector("#login-form");

// event submit for login form
formLogin.addEventListener("submit", (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // get value from form
    const user = JSON.parse(localStorage.getItem("users")) || [];
    const username = document.querySelector("#username").value.toLowerCase();
    const password = document.querySelector("#password").value;

    // check if user exist or not
    const userLog = user.findIndex(user => user.username == username && user.password == password) !== -1;
    
    if(userLog){
        setLoginStatus(username); // Set the login status
        window.location.href = "../index.html"; // Redirect to the index page
    }else{
        alert("Invalid Username or Password"); // Display an error message
        formLogin.reset() // Reset the form
    }
})
