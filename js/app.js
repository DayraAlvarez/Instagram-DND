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
  
  
    $("#logout").click(function(){
      console.log('Boton logout clickedo');
      firebase.auth().signOut();
    });
    
    firebase.auth().onAuthStateChanged(function(user){
      console.log("checking login state");
      if(user) {
        console.log("logged in");
        $("#user").text(user.email);
      } else {
        console.log("logged out");
        $("#user").text("");
        window.location = "index.html";
      }
    });
  });

  
