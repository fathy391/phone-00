

function validate(){

    var Name = document.getElementById("name").value;
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var Confirmpass = document.getElementById("confirmpass").value;
    var message = document.getElementById("phone");



    message.style.color = "#fff";
    message.style.textAlign = "center";
    message.style.padding = "20";
    message.style.marginBottom = "20";
    message.style.backgroundColor = "red";
    message.style.transition = "all .5s ease-in";
    
    
    
    
    if(Name=="" &&Email=="" &&Password=="" &&Confirmpass==""){
        message.innerHTML = "Please Enter Data";
        return false;

    }else if(Name.length<5 ||name.length>15){
        message.innerHTML = "Please insert 5-15 character in user name";
        return false;

    }else if(Email.indexOf("@")=="-1"){
        message.innerHTML = "Please Enter Valid E-mail";
        return false;

    }else if(Password.length<=8){
        message.innerHTML = "Please Enter At Least 8 Character in Password";
        return false;

    }else if(Password != Confirmpass){
        message.innerHTML = "Please Matched Password";
        return false;

    }else{
        return true;
    }

}