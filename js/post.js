function callCrudAction(action) {
	var queryString;
	switch(action) {
		case "add":
			var name = $.trim($('#username').val());
			var email = $.trim($('#email').val());
			var contact = $.trim($('#contact').val());
			var message = $.trim($('#txtmessage').val());
    		$("#loaderIcon").show();
			queryString = 'action='+action+'&name='+ $("#username").val() +'&email='+ $("#email").val() + '&contact='+ $("#contact").val()+ '&message='+ $("#txtmessage").val();
		break;
		case "edit":
		break;
		
	}	 
	jQuery.ajax({
	url: "controller/post.php",
	data:queryString,
	type: "POST",
	success:function(data){
		switch(action) {
			case "add":
				$("#comment-list-box").append(data);
			break;
			
		}
		$("#username").val('');
		$("#email").val('');
		$("#contact").val('');
		$("#txtmessage").val('');
		$("#loaderIcon").hide();
	},
	error:function (){}
	});
}


