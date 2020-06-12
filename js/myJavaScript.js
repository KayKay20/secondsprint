//function that makes the background color of the navbar changed when clicked
function changeColorOfNavBar(){
	//a tag changing the of the color
	$('a').css('background-color', 'inherit')
	//if the navbar is clicked on the background color should turn red
	$(event.target).css("background-color", "red")
}
//executing the function
$('a').on('click', changeColorOfNavBar);



document.form1.text1.focus();
function validate(text, id){
	var name = /^[A-Za-z]*/;
	if(text.value.match(name)){
		document.getElementById(id).innerHTML = "Valid";
		document.getElementById(id).style.color = "green";
		return true;
	}else{
		document.getElementById(id).innerHTML = "Invlid";
		document.getElementById(id).style.color = "red";
		return false;
	}
}

function validateEmail(email){
	var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(email.value.match(mail)){
				 document.getElementById("email").innerHTML = "Valid Email";
				 document.getElementById("email").style.color = "green";
				 return true;

			}else{
				document.getElementById("email").innerHTML = "Invalid Email";
				document.getElementById("email").style.color = "red";
				return false;
			}
}
	function validateContact(contact){
		var contactregex = /^(?:\+27|0)[0-9]{9}$/;
		if (contact.value.match(contactregex)) {
			document.getElementById("cellNo").innerHTML = "Valid contact Number";
			document.getElementById("cellNo").style.color = "green";
			return true;

		}else{
			document.getElementById("cellNo").innerHTML = "Invalid contact Number";
			document.getElementById("cellNo").style.color = "red";
			return false;
		}

	}


document.form1.onsubmit = function(e){
	const validName = validate(document.form1.text1, 'name' );
	const validSurname = validate(document.form1.text2, 'sname');
	const validEmail = validateEmail(document.form1.text3);
	const validContact = validateContact(document.form1.text4);

	if(!validName || !validSurname || !validEmail || !validContact){
		e.preventDefault();
		return false;
	}
}