firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      document.getElementById("user_div").style.display="block";
      document.getElementById("login_div").style.display="none";

    } else {
      // No user is signed in.

      document.getElementById("user_div").style.display="none";
      document.getElementById("login_div").style.display="block";
    }
});
function login(){
    var useremail= document.getElementById("email_field").value;
    var userpass= document.getElementById("password_field").value;

firebase.auth().signInWithEmailAndPassword(useremail, userpass)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error :"+errorMessage);
  });
}

function logout(){
    firebase.auth().signOut();

}