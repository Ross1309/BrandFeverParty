$("#cancelButton").click(function(){$(".wrapper").addClass("hide-form"),$(".cancel-message").removeClass("cancel-message"),$(".cancel-message").addClass("message-show")});var simpleValidation=function(){var s=$("form.validate-form");s.each(function(){for(var s=$(this),a={},i=$(this).find(".validate"),e=$(this).find(".validate").length,l=$(this).find(".submit"),n=1;e>=n;n++)a["input"+n]=!1;$(".validate").blur(function(){function s(s){return s.toLowerCase()!==s?!0:!1}var i=$(this).prevAll().length+1,e=$(this).val(),l=$(this).attr("type"),n=s(e);if("email"===l){var o=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.match(o)?($(this).addClass("valid"),$(this).removeClass("not-valid"),$(".email-icon").addClass("icon-valid"),$(".email-icon").removeClass("icon-error"),a["input"+i]=!0):($(this).addClass("not-valid"),$(this).removeClass("valid"),$(".email-icon").addClass("icon-error"),$(".email-icon").removeClass("icon-valid"),a["input"+i]=!1)}return"password"===l?""===e||e.length<5?($(this).addClass("not-valid"),$(this).removeClass("valid"),$(".pass-icon").addClass("icon-error"),$(".pass-icon").removeClass("icon-valid"),a["input"+i]=!1):($(this).addClass("valid"),$(this).removeClass("not-valid"),$(".pass-icon").addClass("icon-valid"),$(".pass-icon").removeClass("icon-error"),a["input"+i]=!0):""===e||n===!0?($(this).addClass("not-valid"),$(this).removeClass("valid"),$(".user-icon").addClass("icon-error"),$(".user-icon").removeClass("icon-valid"),a["input"+i]=!1):($(this).addClass("valid"),$(this).removeClass("not-valid"),$(".user-icon").addClass("icon-valid"),$(".user-icon").removeClass("icon-error"),a["input"+i]=!0)}),s.submit(function(s){s.preventDefault();for(var i=0,l=1;e>=l;l++)a["input"+l]===!1&&i++;i>0&&($(this).unbind("submit").submit(),$(this).click())})})};simpleValidation();