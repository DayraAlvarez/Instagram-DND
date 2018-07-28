// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsiMT2zTcvyBUL8gTeZRYS6Hy0OYaDQNc",
    authDomain: "insta-demo-dayra.firebaseapp.com",
    databaseURL: "https://insta-demo-dayra.firebaseio.com",
    projectId: "insta-demo-dayra",
    storageBucket: "insta-demo-dayra.appspot.com",
    messagingSenderId: "776296965813"
  };
  firebase.initializeApp(config);

$(document).ready(function(){
    console.log('Pagina cargada');
  
    $("#login").click(function(){
      console.log('Boton login clicleado');
      var email = $('#email').val(); //Tomar valor input email
      var password = $('#password').val(); //Tomar valor input password
      console.log(email,password); //Muestra el user y contreña en consola
      
      //Comprobacion email y password
      firebase.auth().signInWithEmailAndPassword(email,password)
      .catch(function(error){
        alert(error.message);
  
      })
    });
    //Signout
    $("#logout").click(function(){
      console.log('Boton logout clickedo');
      firebase.auth().signOut();
    });
    //Signup
    $("#signup").click(function(){
      console.log('Boton signup clicleado');
      var email = $('#email').val();
      var password = $('#password').val();
      console.log(email,password);
  
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .catch(function(error){
        alert(error.message);
  
      })
    });
    
    firebase.auth().onAuthStateChanged(function(user){
      console.log("checking login state");
      if(user) {
        console.log("logged in");
        $("#user").text(user.email);
        console.log(user);
        window.location = "app.html";
      } else {
        console.log("logged out");
        $("#user").text("");
      }
    });
  });
  
  