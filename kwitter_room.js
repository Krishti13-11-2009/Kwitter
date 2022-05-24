
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
