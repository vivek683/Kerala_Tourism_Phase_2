
const form = document.getElementsByTagName('form')[0];
function validateEmail() {
    var email = document.getElementById("inputEmail4");
    var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (email.value.trim() === "") {
        alert("Empty email");
        return false;
    }
    else if (!regexp.test(email.value)) {
        alert("Invalid Email");
        return false;
    }
    else {
        return true;
    }
}
// const form = document.getElementsByTagName('form')[0];
function validatePassword() {
    var pwd = document.getElementById("inputPassword4");
    // var regexp = /^([a-zA-Z0-9\.-]+)$/;
    if (pwd.value.trim() === "" || pwd.value.length<=7) {
        alert("Too Short Password");
        return false;
    }
    // else if (!regexp.test(pwd.value)) {
    //     alert("Invalid pwd");
    //     return false;
    // }
    else {
        return true;
    }
}
function validateConfirmPassword() {
    var cnfmpwd = document.getElementById("inputPassword");
    // var regexp = /^([a-zA-Z0-9\.-]+)$/;
    if (cnfmpwd.value.trim() === "" || cnfmpwd.value.length<=7) {
        alert("Too Short Confirm Password");
        return false;
    }
    // else if (!regexp.test(pwd.value)) {
    //     alert("Invalid pwd");
    //     return false;
    // }
    else {
        return true;
    }
}
function validatePhoneNumber() {
    var phoneNumber = document.getElementById("phoneNumber");
    var regexp = /^([0-9])+$/;
    if (phoneNumber.value.trim() === "" || phoneNumber.value.length<=9) {
        alert("Please enter full 10 digits of Phone Number");
        return false;
    }
    else if (!regexp.test(phoneNumber.value)) {
        alert("Invalid Phone Number");
        return false;
    }
    else {
        return true;
    }
}
function validateOTP() {
    var otp = document.getElementById("otp");
    var regexp = /^([0-9])+$/;
    if (otp.value.trim() === "" || otp.value.length<=3) {
        alert("Please enter full 4 digits of OTP");
        return false;
    }
    else if (!regexp.test(otp.value)) {
        alert("Invalid OTP");
        return false;
    }
    else {
        return true;
    }
}
form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
    if (!validateEmail()||!validatePassword()||!validateConfirmPassword()||!validatePhoneNumber()||!validateOTP()) {
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});