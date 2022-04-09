


document.forms["mainForm"].addEventListener("submit", function (event){
	
	event.preventDefault();
	
	let accNumValid = validateAccNum();
    let peselValid = validatePesel();
    let birthDateValid = validateBirthDate();
    let emailValid = validateEmail();
    
	if(accNumValid && peselValid && birthDateValid && emailValid){
		document.getElementById("formSubmitTxt").innerHTML = "Form successfully submitted!";
	}else{
        document.getElementById("formSubmitTxt").innerHTML = "Couldn't submit the form.";
    }
});

function validateField(fieldVal, errTxtId, regex){

    if(fieldVal == ""){
        document.getElementById(errTxtId).innerHTML = "This is a required field.";
        return false;
    }
    
    if(!regex.test(fieldVal)){
        document.getElementById(errTxtId).innerHTML = "Bad input."
        return false;
    }

    document.getElementById(errTxtId).innerHTML = "";
    return true;
}

function validateAccNum(){

    const fieldVal = document.forms["mainForm"]["accNum"].value;
    const errTxtId = "accNumErrTxt";
    const regex    = /^[0-9]{6}$/;

    return validateField(fieldVal, errTxtId, regex);
}

function validatePesel(){

    const fieldVal = document.forms["mainForm"]["pesel"].value;
    const errTxtId = "peselErrTxt";
    const regex    = /^[0-9]{11}$/;

    return validateField(fieldVal, errTxtId, regex);
}

function validateBirthDate(){

    const fieldVal = document.forms["mainForm"]["birthDate"].value;
    const errTxtId = "birthDateErrTxt";
    const regex    = /.*/;

    return validateField(fieldVal, errTxtId, regex);
}

function validateEmail(){

    const fieldVal = document.forms["mainForm"]["email"].value;
    const errTxtId = "emailErrTxt";
    const regex    = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return validateField(fieldVal, errTxtId, regex);
}