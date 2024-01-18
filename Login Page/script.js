function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username!=""&&password!=""){
        alert('Username: ' + username + '\nPassword: ' + password);
        window.location.href = "../Main/index.html";
    }
}

function signup() {
    var username_su = document.getElementById("username-su").value;
    var password_su = document.getElementById("password-su").value;
    var password_su2 = document.getElementById("password-su2").value;
    var email_su = document.getElementById("email-su").value;
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(username_su!=""&&password_su!=""&&email_su.match(valid)&&password_su==password_su2){
        var conf = confirm('Username: ' + username_su + '\nPassword: ' + password_su + '\nEmail: ' + email_su);
        if(conf){
            window.location.href = "../Main/index.html";
        }
    }else if(email_su.match(valid)==null){
        alert('Invalid email');
    }else if(password_su != password_su2){
        alert('Wrong password');
    }
}

function forgotPassword() {
    var email_fp = document.getElementById("email-fp").value;
    var valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email_fp.match(valid)){
        var conf = confirm('Submit completed on email: ' + email_fp);
        if(conf){
            window.location.href = "index.html";
        }
    }else{
        alert('Invalid email');
    }
}

