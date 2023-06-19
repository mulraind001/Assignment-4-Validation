function inspect(){
    let isCorrect = true;

    let user = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phoneNum = document.getElementById("phoneNumber").value;
    let pwd = document.getElementById("password").value;
    let confirmPwd = document.getElementById("confirmPassword").value;
    let gender = document.getElementsByName("gender");
    let age = document.getElementById("ageGroup");

    let regUser = /^[a-z0-9$]{5,13}/;
    let regEmail = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}(\.com|\.net|\.edu|\.org)$/;
    let regPhoneNum = /^\(\d{3}\)-\d{3}-\d{4}$/;
    let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    let output = "";

    //Username
    if(user == ""){
        output+= "<br> Please Enter <span style='color:red'>Username </span>";
        isCorrect = false;
    }
    else {
        if (user.match(regUser)) {
            output += "<br> user correct";
        } else {
            output = "<br>Please enter <span style='color: orange'> a valid Username</span>";
            isCorrect = false;
        }
    }

    //Email Address
    if(email == ""){
        output+= "<br> Please Enter <span style='color:red'>Email </span>";
        isCorrect = false;
    }
    else {
        if (email.match(regEmail)) {
            output += "<br>email correct"
        } else {
            output += "<br>Please enter <span style='color: orange'> a valid Email</span>";
            isCorrect = false;
        }
    }

    //Phone Number
    if(phoneNum == ""){
        output+= "<br> Please Enter <span style='color:red'> Phone Number </span>";
        isCorrect = false;
    }
    else {
        if (phoneNum.match(regPhoneNum)) {
            output += "<br>phone correct"
        } else {
            output += "<br>Please enter <span style='color: orange'> a valid Phone Number </span>";
            isCorrect = false;
        }
    }

    //Password
    if(pwd == ""){
        output+= "<br> Please Enter <span style='color:red'>Password </span>";
        isCorrect = false;
    }
    else {
        if (pwd.match(regPassword)) {
            output += "<br>password correct"
            if (confirmPwd === pwd && confirmPwd.length != 0) {
            } else {
                alert('passwords do not match');
                isCorrect = false;
            }
        } else {
            output += "<br>Please Enter <span style='color: orange'> a valid Password </span>";
            isCorrect = false;
        }
    }

    let checked = false;
    for (let i = 0; i < gender.length; i++) {
        if(gender[i].checked){
            checked = true;
        }
    }
    if(!checked){
        output += "<br>Please Select <span style='color: red'> Gender </span>";
        isCorrect = false;
    }


    if(age.selectedIndex == 0){
        output += "<br>Please Select <span style='color:red'> Age Group </span>"
        isCorrect = false;
    }

    document.getElementById("output").innerHTML = output;

    if(isCorrect){
        // Redirect.
        window.location.replace("https://mulraind001.github.io/BuckhanaPage/");
    }

}

function clearAll(){
    document.getElementById("output").innerHTML = "";
}