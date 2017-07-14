function callCrudAction(action) {
	var queryString;
	
			var name = $.trim($('#username').val());
			var email = $.trim($('#email').val());
			var contact = $.trim($('#contact').val());
			var message = $.trim($('#txtmessage').val());
    		$("#loaderIcon").show();
			queryString = 'name='+ $("#username").val() +'&email='+ $("#email").val() + '&contact='+ $("#contact").val()+ '&message='+ $("#txtmessage").val();
		
		
		 
	jQuery.ajax({
	url: "controller/post.php",
	data:queryString,
	type: "POST",
	success:function(data){
		
				$(".contact-form").append(data);
			
		$("#username").val('');
		$("#email").val('');
		$("#contact").val('');
		$("#txtmessage").val('');
		$("#loaderIcon").hide();
	},
	error:function (){}
	});
}


