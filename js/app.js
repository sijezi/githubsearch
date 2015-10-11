

function init() {
	document.onkeydown = function() {
		if (event.keyCode === '13') {
			document.getElementById("user").submit();
		}
	}

	// fire-up the ajax call
	function xhr() {
		function requestListener() {
			var req = JSON.parse(this.responseText);
			console.log(req.avatar_url); 
			document.getElementById("avatar").src = req.avatar_url;
		}


		// grab user input
		var userid = document.getElementById('user').value;

		// make new xmlhttp object
		var xmlhttp = new XMLHttpRequest();

		// request url
		var url = 'https://api.github.com/users/'+userid;

		// add event listener
		xmlhttp.addEventListener('load', requestListener);




		// open the request
		xmlhttp.open('GET', url, true);

		// send
		xmlhttp.send();
	}

	xhr();
}