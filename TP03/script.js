function createCookie(name,pwds){
    let username = document.getElementById("email");
    let pwd = document.getElementById("pw");
  
    // document.getElementById("myBtn").onclick = function () {
    //     location.href = "HomePage.html";
    // };
    today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*15);
   
  
    document.cookie = "name="+username.value+";path=/" + ";expires="+expire.toUTCString();
    document.cookie = "password="+encodeURI(pwd.value)+";path=/" + ";expires="+expire.toUTCString();
    //can only write one entity at a time (name, pass)
  }  
  
  
  //event handler for page load - runs on every refresh
  window.onload = function(){
  
    //how to read back the stored name and password?
    //https://stackoverflow.com/q/10730362/6160662
    //https://stackoverflow.com/q/5639346/6160662
  
  
    //for now
    var uname = 'Route66';
    var pass = '123456';
  
    document.getElementById('email').value = uname;
    document.getElementById('pw').value = pass;
  
  }