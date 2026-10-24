
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyCQkQDFmV8gxUWhaLmy29J858h53hOzW5I",
  authDomain: "qaizapp-99524.firebaseapp.com",
  databaseURL: "https://qaizapp-99524-default-rtdb.firebaseio.com",
  projectId: "qaizapp-99524",
  storageBucket: "qaizapp-99524.firebasestorage.app",
  messagingSenderId: "841008506902",
  appId: "1:841008506902:web:db3b0420cd74d91fcdad37",
  measurementId: "G-NDPMRCZHZR"
};


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 const auth = getAuth(app);


    var name=document.getElementById("name")
    var sigBtn=document.getElementById("signupBtn")
    

sigBtn.addEventListener("click",function(e){
   e.preventDefault();

    var email=document.getElementById("email").value
    var pswod=document.getElementById("pswod").value
    if (pswod.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }
  createUserWithEmailAndPassword(auth, email, pswod)

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("done..")
    window.location.href = "log.html";
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    
  });
    console.log("hi");

})



