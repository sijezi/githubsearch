
function requestListener() {
	console.log(this.responseText);
}


var userid = document.getElementById('user').value;

var xmlhttp = new XMLHttpRequest();

var url = 'https://api.github.com/users/'+userid;

xmlhttp.addEventListener('load', requestListener);
xmlhttp.open('GET', url, true);
xmlhttp.send();

