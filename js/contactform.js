function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://4u8v6seemi.execute-api.eu-west-2.amazonaws.com";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($("#name-input").val())) {
                      alert ("Name can not less than 2 char");
             return;
         }

         if ($("#email-input").val()=="") {
             alert ("Please enter your email id");
             return;
         }

         var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!reeamil.test($("#email-input").val())) {
             alert ("Please enter valid email address");
             return;
         }

    var name = $("#name-input").val();
    var email = $("#email-input").val();
    var subject = $("#subject-input").val();
    var desc = $("#description-input").val();
    var data = {
       name : name,
       email : email,
       subject : subject,
       desc : desc
     };

    $.ajax({
      type: "POST",
      url : "https://4u8v6seemi.execute-api.eu-west-2.amazonaws.com",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),

      
      success: function () {
        // clear form and show a success message
        alert("Successfull");
        document.getElementById("contact-form").reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("UnSuccessfull");
      }});
  }
