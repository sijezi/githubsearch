
function requestListener() {
	var req = JSON.parse(this.responseText);
	console.log(req.id); 
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

var template = Handlebars.compile('<div>Hello {{name}}</div>');
var html = document.getElementById('app');
html.innerHTML = template({name: userid});

function clickMe() {
	document.getElementById("form").submit();
}