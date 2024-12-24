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

//============================================================================================================

   // Get form values and send the signup request
async function signUpUser() {
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Call the API
        const response = await fetch('https://spoilerinterface.com/interface/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                cellphone: phone,
                email: email,
                password: password,
            }),
        });

        const result = await response.json();

        // Handle success or failure
        if (response.ok) {
            alert("Signup successful!");
            console.log(result); // For debugging purposes
        } else {
            alert(`Signup failed: ${result.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.error("Error calling the signup API:", error);
        alert("An error occurred. Please try again.");
    }
}

// Event listener for form submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    signUpUser(); // Call the signup function
});
