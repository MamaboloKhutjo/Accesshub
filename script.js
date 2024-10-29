const signUpButton=document.getElementById('SignUpButton');
const signInButton=document.getElementById('signInButton');
const signUpForm = document.getElementById('signUp');
const signInForm = document.getElementById('signIn');

signUpButton.addEventListener('click', function(){
    signInForm.style.display= "none";
    signUpForm.style.display= "block";
})

signInButton.addEventListener('click', function(){
    signInForm.style.display= "block";
    signUpForm.style.display= "none"; 
})

const navToggle = document.querySelector('.nav-toggle');
const navHeader = document.querySelector('.nav-header');

navToggle.addEventListener('click', () => {
    navHeader.classList.toggle('active'); 
});