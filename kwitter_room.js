
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyCqM-vOYSxJFMr92sSF1_WLOtUFc9OvNx8",
      authDomain: "kwitter-db568.firebaseapp.com",
      databaseURL: "https://kwitter-db568-default-rtdb.firebaseio.com",
      projectId: "kwitter-db568",
      storageBucket: "kwitter-db568.appspot.com",
      messagingSenderId: "130385842923",
      appId: "1:130385842923:web:673c021f97ebbd302ea4ae"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   user_name = localStorage.getItem("user_name");

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + ":)";

   function addRoom()
   {

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding the room names"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name =" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div> <hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name" , name);
            window.location = "kwitter_page.html";            
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}
