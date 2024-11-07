const signUpButton=document.getElementById('SignUpButton');
const signInButton=document.getElementById('signInButton');
const signUpForm = document.getElementById('signUp');
const signInForm = document.getElementById('signIn');

signInButton.addEventListener('click', function(){
    signInForm.style.display= "block";
    signUpForm.style.display= "none"; 
})

signUpButton.addEventListener('click', function(){
    signInForm.style.display= "none";
    signUpForm.style.display= "block";
})



const navToggle = document.querySelector('.nav-toggle');
const navHeader = document.querySelector('.nav-header');

navToggle.addEventListener('click', () => {
    navHeader.classList.toggle('active'); 
});



const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Simulated user data
const userName = "Khutjo"; // Replace this with the actual user data source

// Inject the user's name into the welcome message
const welcomeMessage = document.getElementById('welcome-message');
welcomeMessage.textContent = `Welcome, ${userName}`;