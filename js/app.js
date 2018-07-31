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

    $("#logout").click(function(){
      firebase.auth().signOut();
      window.location = "index.html";
    });

  });

  function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//Drag and drop
 var dragItem = document.getElementById("img1");
 var dropLoc = document.getElementById("image-container");

 dragItem.ondragstart = function (evt){
   evt.dataTransfer.setData("text", evt.target.id);
 }

 dropLoc.ondragover = function (evt){
   evt.preventDefault();
 }

 dropLoc.ondrop = function (evt){
   var dropItem = evt.dataTransfer.getData("text")
   evt.preventDefault();
   var data = event.dataTransfer.getData("text");
   event.target.appendChild(document.getElementById(data));
 }

