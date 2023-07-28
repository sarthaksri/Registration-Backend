const user = require("../Schema/orientationRegistration");
var error;
exports.validate_new_registration = async (User) => {
    var name = /^[A-Za-z]+$/;
   
    if(!ValidateEmail(User.email))
    {
        error = "Invalid Email Id";
        return error;
    }
    else if(!ValidatePhoneNumber(User.phoneNo))
    {
        error = "Enter a valid Phone Number";
        return error;
    }
    else if (await user.exists({ email: User.email })) {
        error = "Email already Exists";
        return error;
    }
    else if (await user.exists({ ph_no: User.ph_no })) {
        error = "Phone Number already Exists";
        return error;
    }
    else{
        return true;
    }
}
function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    return (false)
}
function ValidatePhoneNumber(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneno.test(inputtxt)) {
        return true;
    }
    else {
        return false;
    }
}