// variables and selectors
const mail = document.getElementById("mail");
const country = document.getElementById("country");
const zipCode = document.getElementById("zip");
const passWord = document.getElementById("pass");
const passConfirm = document.getElementById("pass2");

//email live check
mail.oninput = function () {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let text = document.forms["myForm"]["user_mail"].value;
  if (text.match(regexEmail)) {
    mail.style = "border: solid 2px green";
    document.getElementById("issueE").textContent = "✓";
  } else {
    document.getElementById("issueE").textContent =
      "please enter a valid email address";
    mail.style = "border: solid 2px red";
  }
};

// country live check
country.oninput = function () {
  let text = document.forms["myForm"]["user_country"].value;
  if (text.length < 3) {
    document.getElementById("issueC").textContent = "at least 3 letters";
    country.style = "border: 2px solid red";
  } else {
    document.getElementById("issueC").textContent = "✓";
    country.style = "border: 2px solid green";
  }
};

// password live check

passWord.oninput = function () {
  let text = document.forms["myForm"]["user_pass"].value;
  let textConfirm = document.forms["myForm"]["user_pass2"].value;
  if (text.length < 8) {
    passWord.style = "border: solid 2px red";
    document.getElementById("pass").textContent =
      "please make sure the password is at least 8 letters ";
  } else {
    passWord.style = "border: solid 2px green";
    document.getElementById("pass").textContent = "✓";
  }
  passConfirm.oninput = function () {
    if (text != textConfirm) {
      passConfirm.style = "border: solid 2px red";
      document.getElementById("pass2").textContent = "passwords dont match";
    } else {
      passConfirm.style = "border: solid 2px green";
      document.getElementById("pass2").textContent = "✓";
    }
  };
};
