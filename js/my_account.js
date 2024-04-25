

const login_area = document.querySelector(".login_area");
const register_btn = document.querySelector(".Register_button");
const login_btn = document.querySelector(".login_button");
const register_area = document.querySelector(".register_area");
const account_status = document.querySelector(".account_title");
const account_guide = document.querySelector(".account_des");


let isLoginState = true; // Variable to track current state

register_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (isLoginState) {
        // If currently in login state, switch to register state
        login_area.style.visibility = "hidden";
        login_area.style.opacity = "0";
        register_area.style.position = "relative";
        login_area.style.position = "absolute";
        register_area.style.visibility = "visible";
        register_area.style.opacity = "1";
        register_btn.textContent = "Login";
        account_status.textContent = "Welcome Back!"
        account_guide.textContent = "Login here by filling you're username and password or use your favorite social network account to enter to the site"
        isLoginState = false; 
    } else {
        // If currently in register state, switch to login state
        register_area.style.visibility = "hidden";
        register_area.style.opacity = "0";
        login_area.style.visibility = "visible";
        register_area.style.position = "absolute";
        login_area.style.position = "relative";
        login_area.style.opacity = "1";
        register_btn.textContent = "Create Account";
        account_status.textContent = "New Customer"
        account_guide.textContent = "Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails."
        isLoginState = true; 
    }
});
