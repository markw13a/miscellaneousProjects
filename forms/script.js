let butt = document.querySelector("input[type='submit']");
butt.addEventListener("click", function(){
									validateUsername();
									validatePassword();
	});

function validateUsername() {
	let user = document.querySelector("#user-label");
	let usernameProvided = user.querySelector("input[name='user']").value;

	if (usernameProvided==="") {
		let errorMessage = document.createTextNode("Please enter a username");
		let errorDisplay = user.querySelector("h3");
		
		clearNode(errorDisplay);
		errorDisplay.appendChild(errorMessage);
	} else{
		clearNode(user.querySelector("h3"));
	}
}

function validatePassword() {
	let pass = document.querySelector("#pass-label");
	let passProvided = pass.querySelector("input[name='pass']").value;
	
	if (passProvided==="") {
		let errorMessage = document.createTextNode("Please enter a password");
		let errorDisplay = pass.querySelector("h3");
			
		clearNode(errorDisplay);
		errorDisplay.appendChild(errorMessage);
	} else{
		clearNode(pass.querySelector("h3"));
	}
}

function clearNode(node){
	while (node.hasChildNodes()){
		node.removeChild(node.lastChild);
	}
}