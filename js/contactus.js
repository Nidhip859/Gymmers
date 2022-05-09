/*form-validation*/
function validate() {
  debugger;
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "15px";

  if (name.length < 5) {
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if (subject.length < 10) {
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length > 140) {
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }

  sessionStorage.setItem('name', name);
  sessionStorage.setItem('subject', subject);
  sessionStorage.setItem('phone', phone);
  sessionStorage.setItem('email', email);
  sessionStorage.setItem('message', message);
  return true;
}

