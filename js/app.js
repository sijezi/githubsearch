
var xmlhttp = new XMLHttpRequest();

var userid = document.getElementById('user').value;

var url = 'https://api.github.com/users/'+usersid

xmlhttp.open('get', url);
xmlhttp.send();