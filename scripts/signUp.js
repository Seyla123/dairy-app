// import createAcc function from auth.js
import {createAcc} from './auth.js'

const signUpForm = document.querySelector("#signup-form");

// event submit for sign form
signUpForm.addEventListener("submit", (e) => {

    // Prevent the default form submission behavior
    e.preventDefault(); 

    // get value from form
    const userlocal = JSON.parse(localStorage.getItem("users")) || [];
    const username = document.querySelector("#username").value.toLowerCase();
    const password = document.querySelector("#password").value;

    // check if user already exist
    const userLog = userlocal.findIndex(user => user.username == username) == -1;

    if(userLog){
        createAcc(username,password);
    }else{
        alert("this account aleady exist. please use other username"); // Display an error message
        signUpForm.reset() // Reset the form
    }
})