document.querySelector("#render-custom-theme").onclick=function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let code = xhttp.responseText;
        var customCode = code.replace(/{color:Background}/g, "#000000");
        const link = document.createElement("a");
        var file = new File([customCode], { type: 'text/plain' });
        link.href = URL.createObjectURL(file);
        link.download = themeName;
        link.click();
        URL.revokeObjectURL(link.href);
    }; // onload
    xhttp.open("GET", themeCode, true);
    xhttp.send();
}; // onclick
