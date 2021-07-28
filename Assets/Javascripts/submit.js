/*
	Script for form submission in contact.html
	
	Author: Adedeji Coker
	Supporting Files: none
*/
document.forms[0].onsubmit = showResults;
function showResults(){
	var firstName = document.getElementById("fnameinput").value;
	var lastName = document.getElementById("lnameinput").value;
	var email = document.getElementById("emailinput").value;
	var phone = document.getElementById("phoneinput").value;
	var questions = document.getElementById("question").value;
	var newsCheck = document.getElementById("emailcheck").checked;
	
	const resultsWindow = window.open("", "_blank", 'width=400,height=250,resizeable,scrollbars');
	resultsWindow.document.write("<p>First Name: " + firstName + "<br>Last Name: " + lastName + "<br>Email: " + email + "<br>Phone Number: " + phone + "<br>Question: " + questions + "<br>News Checkbox: " + newsCheck + "</p>");
}