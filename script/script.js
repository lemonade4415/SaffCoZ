if (window.location.search) {
    const url = new URL(window.location.href);
    url.search = ''; // Clear query string
    window.history.replaceState({}, document.title, url.toString());
}

//Dropdown Menu
let navbar = document.querySelector(".navbar");
let dropdown = document.getElementById("dropdown");

console.log(dropdown);

document.querySelector("#dropdown").onclick = () => {
    navbar.classList.toggle("active");
};

//About Us
var btn = document.getElementById('btn-about');
btn.addEventListener("click", function(){
    var page = document.getElementById("section-uhh");
    page.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
});

//Contact Us Form
function form_submit(){
    var name = document.getElementById('name').value;
    var nameValid = document.getElementById('name');

    var email = document.getElementById('email').value;
    var emailValid = document.getElementById('email');

    var phone = document.getElementById('phone').value;
    var phoneValid = document.getElementById('phone');

    var gender = document.getElementById('gender').value;
    var genderValid = document.getElementById('gender');

    var tac = document.getElementById('tac');
    
    var isValid = true;

    //Name Validation
    if(!name){
        nameValid.setCustomValidity("Must not be empty!");
        isValid = false;
    }
    else {
        nameValid.setCustomValidity('');
    }

    //Email Validation
    emailValid.setCustomValidity("");
    if(!email){
        emailValid.setCustomValidity("Must not be empty");
        isValid = false;
    }
    else{
        emailValid.setCustomValidity('');
    }

    //Phone Validation
    phoneValid.setCustomValidity("");
    if (isNaN(phone) || phone == ""){
        phoneValid.setCustomValidity("Phone Number must be numeric!");
        isValid = false;
    }
    else{
        phoneValid.setCustomValidity('');
    }

    //Gender Validation
    genderValid.setCustomValidity("");
    if(gender == "default"){
        genderValid.setCustomValidity("Please specify your gender");
        isValid = false;
    }
    else {
        genderValid.setCustomValidity('');
    }

    //TAC
    tac.setCustomValidity("");
    if(!tac.checked){
        tac.setCustomValidity("Please check this box!");
        isValid = false;
    }
    else {
        tac.setCustomValidity('');
    }

    if(isValid){
        alert("We value your feedback :)");
    }
}