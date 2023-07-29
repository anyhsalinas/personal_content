alert("{color:Background}");

    document.querySelector("#sla button").onclick=function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            let code = xhttp.responseText;
            var customCode = code.replace(/{color:Background}/g, "#000000");
            const link = document.createElement("a");
            var file = new File([customCode], { type: 'text/plain' });
            link.href = URL.createObjectURL(file);
            link.download = "custom-anyhs-theme-002.txt";
            link.click();
            URL.revokeObjectURL(link.href);
        }; // onload
        xhttp.open("GET", "https://raw.githubusercontent.com/anyhsalinas/free-codes/main/tb-themes/theme002.txt", true);
        xhttp.send();
    }; // onclick
