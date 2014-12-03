(function ($, W, D)
{
	var JQUERY4U = {};
	
	JQUERY4U.UTIL =
	{
		setupFormValidation: function()
		{
			//setting up the form rules for id 'register-form'
			$("#register-form").validate({
				rules: {
					firstname: "required",
					lastname: "required",
					email: {
						required: true,
						email: true
					},
					password: {
						required: true,
						minlength: 8
					},
					agree: "required"
				},
				messages: {
					firstname: "Enter firstname",
					lastname: "Enter lastname",
					password {
						required: "Provide a password",
						minlength: "Needs to be 8+ characters"
					},
					email: "Enter valid email",
					agree: "Please accept our policy"
				},
				submitHandler: function( form ) {
					form.submit();
				}
			}); //end of register-form validate 
		} //end of setupFormValidation
	} //end of JQUERY4U.UTIL 
	
	//after the DOM loads up the form validation rules
	$( D ).ready( function( $ ) {
		JQUERY4U.UTIL.setupFormValidation();
	});
	
}) ( jQuery, window, document );