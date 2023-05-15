    var login_status=localStorage.getItem('log_user');
    if(login_status!=1){
        alert("Session expired. Kindly login again");
        window.location="./login_user"
    }
