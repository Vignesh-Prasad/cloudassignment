var db = firebase.firestore();
function storeData(){
    var inputText=document.getElementById("name_field").value;
    var genderText=document.getElementById("gender_field").value;

    var emailText=document.getElementById("email_field").value;
    var phoneText=document.getElementById("phone_field").value;
    var dateText=document.getElementById("date_field").value;


    var fromText=document.getElementById("from_field").value;
    var toText=document.getElementById("to_field").value;





    
// Add a new document in collection "cities"
db.collection("users").doc().set({
    name: inputText,
    gender: genderText,
    email: emailText,
    phone: phoneText,
    date: dateText,
    from: fromText,
    to: toText
})
.then(() => {
    console.log("Document successfully written!");
})
.catch((error) => {
    console.error("Error writing document: ", error);
});
}