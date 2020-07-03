//function that makes the background color of the navbar changed when clicked
function changeColorOfNavBar(){
	//a tag changing the of the color
	$('a').css('background-color', 'inherit');
	//if the navbar is clicked on the background color should turn red
	$(event.target).css("background-color", "red");
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

//slider
let images = [
    'pics/1.jpg',
    'pics/2.jpg',
    'pics/3.jpg',
    'pics/4.jpg',
    'pics/5.jpg',
    'pics/6.jpg',
    'pics/7.jpg',
    'pics/8.jpg',
    'pics/9.jpg',
    'pics/10.jpg',
    'pics/11.jpg',
    'pics/12.jpg',
    'pics/13.jpg',
    'pics/14.jpg',
    'pics/15.jpg',
    'pics/16.jpg',
    'pics/17.jpg'
	];

let i = 0;
   function changeImage(){
        if (i < images.length) {
            document.getElementById("slider").src = images[i] 
            i += 1;
        }
        else if(i >= images.length) {
            i = 1;
        }
    }
    setInterval(function(){ changeImage(); }, 3000);


function big( value){
	 value.style.width = "800px";
	value.style.height = "400px";

}

function small(value){
	value.style.width = "400px";
	value.style.height = "200px";
}

function changeColor1(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Blue";
}

function changeColor2(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Green";
}

function changeColor3(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Orange";
}

function changeColor4(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "Red";
}

function changeColor5(){
	var color = document.getElementById("navbar");
	color.style.backgroundColor = "black";
}
 let newWindow;
function openWindow(){
	newWindow = window.open('https://prepr.org/covid-19/?gclid=CjwKCAjwi_b3BRAGEiwAemPNU0vLtQAYJtp6SZNIjzD9p1yFiqpi7Djhy06JcSu9rsKABS4l8G7svBoC1wEQAvD_BwE', 
		'_blank', 'width=800,height=500,top=500,left=200,toolbar=no,resizable=no');

}

function closeWindow(){
	 newWindow.close();
}

//binary array of 4 bytes, all have the maximal value 255
let buffer = new Uint8Array([255,255,255,255]).buffer;

let dataView = new DataView(buffer);

//get 8-bit number at offset 0
alert(dataView.getUint8(0)); // 255

//now get 16-bit number at offset 0, it consists of 2 bytes, together iterpreted as 65535
alert( dataView.getUint16(0) ); //65535 (biggest 16-bit unsigned int)

//get 32-bit number at offset 0
alert( dataView.getUint32(0) ); //4294967295 (biggest 32-bit unsigned int)

dataView.setUint32(0,0); //set 4-byte number to zero, thus setting all bytes to 0

window.addEventListener('storage', function(event){
	console.log(event)
});

localStorage.setItem('a', 'b');
