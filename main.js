const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-invalid-prompt");

const submitEmailButton = document.getElementById("email-submit-button");

const thankYouCard = document.getElementById("thank-you-card");
const thankYouDesc = document.getElementById("thank-you-desc");

const signUpCard = document.getElementById("sign-up-content");

let emailInputClicked = false;
let canSubmitEmail = false;

/*Remove email example on first click of input field*/
function emptyEmailInput (){
    emailInput.value = null;
    emailInput.style.color = "black";
}


function validateEmail () {
    //Display error message on invalid inputs and assign cansubmit boolean
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorEmailInputColors();
    } 
    //Valid email input
    else {
        emailError.style.visibility = "hidden";
        canSubmitEmail = true;
        normalEmailInputColors();
    } 
    //Empty email input resets visuals not part of challenge but personal preference
    if(emailInput.value == "") {
        emailError.style.visibility = "hidden";
        normalEmailInputColors();
    }
}

    function normalEmailInputColors () {
        emailInput.style.backgroundColor = "white";
        emailInput.style.border = "2px solid black";
    }

    function errorEmailInputColors () {
        emailInput.style.backgroundColor = "hsl(4, 100%, 85%)";
        emailInput.style.border = "2px solid red";
        emailError.style.visibility = "visible";
        canSubmitEmail = false;
    }

    function submitEmail () {
        if(canSubmitEmail) {       
            thankYouDesc.innerHTML ="A confirmation email has been sent to " + emailInput.value + ". Please open it and click the button inside to confirm your subscription."

            thankYouCard.style.display = "block";
            signUpCard.style.display = "none";
        }
        else {
            errorEmailInputColors();
        }
    }

    //remove thank you message
    function dismissThankYou () {
        emailInput.value = "email@company.com";
        emailInput.style.color = "hsl(231, 7%, 60%)";
        canSubmitEmail = false;
        
        thankYouCard.style.display = "none";
        signUpCard.style.display = "flex";
    }