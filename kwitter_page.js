//YOUR FIREBASE LINKS


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
   room_name = localStorage.getItem("room_name");

    function send()
    {
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
