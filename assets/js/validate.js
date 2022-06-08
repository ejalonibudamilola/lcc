/*function ValidateForm(){    
    var lastname = document.getElementById("lastname").value;
    var firstname = document.getElementById("firstname").value;
    var fromemail= document.getElementById("email").value;
    var emailbody= document.getElementById("message").value;
    var letter = /^[a-zA-Z]+$/;
    var email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var valid = true;
    removeMessage();
    
    if(!letter.test(lastname)){  
            document.getElementById("clastname").innerHTML="Input a valid Lastname";
            valid=false;
}
    
    if(!letter.test(firstname)){
            document.getElementById("cfirstname").innerHTML="Input a valid Firstname";
            valid=false;
}
    
    if(!email.test(fromemail)){
            document.getElementById("cemail").innerHTML="Input a valid Email Address";
            valid=false;
}
    
    if(emailbody == ""){
            document.getElementById("cmessage").innerHTML="Please type your message";
            valid=false;
}      
  
  return valid;
    
}
function removeMessage(){
    var eremove = document.querySelectorAll(".error");
    [].forEach.call(eremove, function(el){
        el.innerHTML="";
    });
}


('#contactme').click(function(e){
    e.preventDefault();
    var valid = ValidateForm();
    if (valid===true){
        var form = $(this).closest('form');
        var data = form.serialize();
        var url = "contact.php";                    
        $.ajax({
            type:'post',
            url:url,
            data: data,
            success: function(response){
                alert(response);
                location.reload();
            }   
        });
    }               
});*/
