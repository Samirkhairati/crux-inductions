function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function submit() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "" && username != null) {
        setCookie("username", username, 365);
        if (password != "" && password != null) {
            setCookie("password", password, 365);
            window.location.href = "./index.html"
        } 
        else {
            alert('Enter a password')
        }
    } 
    else {
        alert('Enter a username')
    }
    
}
