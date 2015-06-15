$('#cancelButton').click(function(){
    $('.wrapper').addClass('hide-form');
    //$('.cancel-response').removeClass('hide-form');
    $('.cancel-message').removeClass('cancel-message');
    $('.cancel-message').addClass('message-show');
});

// Get all forms
var simpleValidation = function(){

  var validateForm = $('form.validate-form');

  // Gets all forms to Validate
  validateForm.each(function(){
    // Defining basic variables
    var validateForm = $(this);
    var validate = {};
    var validateThis = $(this).find('.validate');
    var validatingLength = $(this).find('.validate').length;
    var submitBtn = $(this).find('.submit');
      
   
   //var passwordVal = document.form.pass.value;  

    // For Loop Getting Elements to Validate
    for(var i = 1; i <= validatingLength; i++){
      // Adding Inputs to object, false for default
      validate['input'+i] = false;
    }

    $('.validate').blur(function(){
      var index =  $(this).prevAll().length+1;
      var validateThisVal = $(this).val();
      var validateThisType = $(this).attr('type');
        
        //Check for lowercase
        function hasUpperCase(str) {
            if(str.toLowerCase() !== str) {
                return true;
            }
            return false;
        }
    var userCheck = hasUpperCase(validateThisVal);
        
        //Check for period
        function hasPeriod(str) {
         if(str.indexOf('.') !== -1) {
             return true;
         }
            return false;
        }
    var userCheckPeriod = hasPeriod(validateThisVal);
        
        
        function hasNumbers(str){
                var regex = /\d/g;
                return regex.test(str);
        }

    var passCheckNum = hasNumbers(validateThisVal);    
        
      // Checks if input type is email
      if(validateThisType === "email"){

        // Email regex
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // Condition to see if Email exists
        if(!validateThisVal.match(re)){
          $(this).addClass('not-valid');
          $(this).removeClass('valid');
          $('.email-icon').addClass('icon-error');
          $('.email-icon').removeClass('icon-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('valid');
          $(this).removeClass('not-valid');
          $('.email-icon').addClass('icon-valid');
          $('.email-icon').removeClass('icon-error');    
          return validate['input'+index] = true;
        }
      } else if(validateThisType === "password"){
        // Makes sure input is filled out
        if(validateThisVal === "" || validateThisVal.length < 7 || passCheckNum === false){
          $(this).addClass('not-valid');
          $(this).removeClass('valid');
          $('.pass-icon').addClass('icon-error');
          $('.pass-icon').removeClass('icon-valid');    
          return validate['input'+index] = false;
        } else{
          $(this).addClass('valid');
          $(this).removeClass('not-valid');
          $('.pass-icon').addClass('icon-valid');
          $('.pass-icon').removeClass('icon-error');
          return validate['input'+index] = true;
        }
      }
        else{
         if(validateThisVal === "" || userCheck === true  || userCheckPeriod === false){
          $(this).addClass('not-valid');
          $(this).removeClass('valid');
          $('.user-icon').addClass('icon-error');
          $('.user-icon').removeClass('icon-valid');
          return validate['input'+index] = false;
        } else{
          $(this).addClass('valid');
          $(this).removeClass('not-valid');
          $('.user-icon').addClass('icon-valid');
          $('.user-icon').removeClass('icon-error');
          return validate['input'+index] = true;
        }
            
        }
    });


    validateForm.submit(function(event){
      // Prevents Default
      event.preventDefault();

      // Logging form errors
      var falseCtn = 0;
      for(var i = 1; i <= validatingLength; i++){
        if(validate['input'+i] === false){
          falseCtn++;
        }
      }

      // Checking if any falses exist
      if(falseCtn > 0){
        $(this).unbind('submit').submit();
        $(this).click();
      } else{
      }
    });

  });

};

simpleValidation();




//Attempt for valid submission message but not yet working properly

/*function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

var eFV = document.getElementById('eMail');
var uFV = document.getElementById('userName');
var pFV = document.getElementById('passWord');

var emailClassCheck = hasClass(eFV, 'valid');
var userClassCheck = hasClass(uFV, 'valid');
var passClassCheck = hasClass(pFV, 'valid');

$('#submitButton').click(function(){
    if(emailClassCheck === true && userClassCheck === true && passClassCheck === true){
    $('.wrapper').addClass('hide-form');
    $('.submit-message').removeClass('submit-message');
    $('.submit-message').addClass('message-show');
    }
    else{
        
    }
});*/