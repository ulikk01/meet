var urlmain = document.URL;
var md = document.URL.split("/")[3];
var key = document.URL.split("/")[4];
var id = document.URL.split("/")[5];

if (md == 'deep') {
  var redir = 'www.mythic.vip';
} else {
  var redir = 'www.mythic.vip'+key;
}

window.location = redir;

setTimeout(
  function(){
    window.location = "www.mythic.vip" 
  },
4000);
