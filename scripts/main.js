var pageHeader = document.querySelector('h1');


var changeUserBtn = document.querySelector('button');


changeUserBtn.onclick = function () {

		var username = prompt("Enter Username");
		localStorage.setItem("username", username); 
		pageHeader.innerHTML = 'Mozilla is cool,' + localStorage.getItem("username");

}


