const submit = document.getElementById('submitButton')

submit.addEventListener('click', submitToAPI(e));


function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://4u8v6seemi.execute-api.eu-west-2.amazonaws.com";

         var Namere = /[A-Za-z]{1}[A-Za-z]/;
         if (!Namere.test($(e.name).val())) {
                      alert ("Name can not less than 2 char");
             return;
         }

         if ($(e.mail).val()=="") {
             alert ("Please enter your email id");
             return;
         }

         var eamilre = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
         if (!eamilre.test($(e.mail).val())) {
             alert ("Please enter valid email address");
             return;
         }

    var namere = $(e.name).val();
    var emailre = $(e.mail).val();
    var subjectre = $(e.subject).val();
    var descre = $(e.Message).val();
    var data = {
       name : namere,
       email : emailre,
       subject : subjectre,
       desc : descre
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
        alert("Successful");
        document.getElementById(contact).reset();
    location.reload();
      },
      error: function () {
        // show an error message
        alert("Unsuccessful");
      }});
  }
