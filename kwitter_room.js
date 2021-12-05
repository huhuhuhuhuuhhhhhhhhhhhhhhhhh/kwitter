
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB3UlrcXqacf3OVw4E8gHMmPUFgPnUAH3M",
      authDomain: "classtest-34a6a.firebaseapp.com",
      databaseURL: "https://classtest-34a6a-default-rtdb.firebaseio.com",
      projectId: "classtest-34a6a",
      storageBucket: "classtest-34a6a.appspot.com",
      messagingSenderId: "816034238440",
      appId: "1:816034238440:web:5208b614914096a0c61e5d",
      measurementId: "G-QR9SCH041S"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "div class='room' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
docunment.getElementById("output").innerHTML += row;
      //End code
      });});}
function redirectToRoomName (name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeitem("username");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
}