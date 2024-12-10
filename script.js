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
