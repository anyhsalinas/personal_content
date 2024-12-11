document.querySelector("div").style.border="2px solid green";

$(document).ready(function(){
  $("div").load("./post1.html", function(responseTxt, statusTxt, xhr){
    if(statusTxt == "success")
      alert("External content loaded successfully!");
    if(statusTxt == "error")
      alert("Error: " + xhr.status + ": " + xhr.statusText);
  });
});

alert("no");
