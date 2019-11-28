var textName = $(".text-errorName");
var textLast = $(".text-errorLast");
var textEmail = $(".text-errorEmail");
var textPass = $(".text-errorPass");

var btn = $(".btn");

$(document).ready(function(){
      
    $("#form").on("submit", function(){
		   event.preventDefault()

	            if($(".input-name").val() == ''){
                    $(".input-name").addClass("red-border").addClass("icon-error");
                    textName.addClass(".text-error").text("First Name cannot be empty");		            	
	            } else{
                    $(".input-name").removeClass("red-border").removeClass("icon-error");
                    textName.text(" ");
                }
		              
                var regmail = /^[\w!#$%&amp;'*+\/=?^`{|}~-]+(\.[\w!#$%&amp;'*+\/=?^`{|}~-]+)*@(([\w-]+\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
                if (!regmail.test($(".input-email").val())) {
                    $(".input-email").addClass("red-border").addClass("icon-error");
                    textEmail.addClass(".text-error").text("Looks like this is not an email");
                    
                }else{
                    $(".input-email").removeClass("red-border").removeClass("icon-error");
                    textEmail.text(" ");
                }
                    
                if($('.input-lastName').val() == ''){
                    $('.input-lastName').addClass("red-border").addClass("icon-error");
                    textLast.addClass(".text-error").text("Last Name cannot be empty");
                        
                    }else{
                        $(".input-lastName").removeClass("red-border").removeClass("icon-error");
                        textLast.text(" ");
                    }
                    
            
                    if($('.input-password').val() == ''){
                        $('.input-password').addClass("red-border").addClass("icon-error");
                        textPass.addClass(".text-error").text("Password cannot be empty");
                        
                    } else{
                        $(".input-password").removeClass("red-border").removeClass("icon-error");
                        textPass.text(" ");
                    } 
          });
                     
});


       

