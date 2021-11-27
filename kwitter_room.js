const firebaseConfig = {
    apiKey: "AIzaSyCtLA5OgREK-K2D9sBE7IQrapH-v980fbA",
    authDomain: "kwitter-2-6fbf0.firebaseapp.com",
    projectId: "kwitter-2-6fbf0",
    storageBucket: "kwitter-2-6fbf0.appspot.com",
    messagingSenderId: "891246024051",
    appId: "1:891246024051:web:954aaa615eb32862d4a106",
    measurementId: "G-GDPFSVNDNE"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose = "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
}

function getData() {
    firebase.database().ref("/").on('value',
    function(snapshot) {
        document.getElementById("output").innerHTML ="";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    console.log("Room name - " + Room_names);
    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_room.html";
}