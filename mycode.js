$(function () {
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  console.log("VALIDATOR");
  var Name = $("#name").val();
  var Pass = $("#password").val();
  var cnf_Pass = $("#confirm_password").val();
  var Status = true;
  $("#name").removeClass("ERr");
  $("#password").removeClass("ERr");
  $("#confirm_password").removeClass("ERr");
  if (Name.length < 5) {
    $("#name").addClass("ERr");
    alert("Name should be of 5 digits or more");
    Status = false;
  }
  if (Pass.length < 8) {
    $("#password").addClass("ERr");
    alert("Password should be of 8 characters or more");
    Status = false;
  }
  if (cnf_Pass != Pass || cnf_Pass.length < 8) {
    $("#confirm_password").addClass("ERr");
    alert("Passwords do not Match");
    Status = false;
    
  }
  if (Status == false) {
    e.preventDefault();
  } else {
    alert("Form is Submitted");
  }
}