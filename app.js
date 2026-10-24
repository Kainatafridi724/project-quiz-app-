import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import { getDatabase, ref,push,set } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-database.js";


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


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); 


var quizcontainer = document.getElementById("quiz-container");
var nextcontainer = document.getElementById("nextBtn");
var result = document.getElementById("result");

var currentQuestion = 0;
var score = 0;
var wrong = 0;

var question = [
    {
        Question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "High Text Machine Language",
        option3: "Hyperlink Text Markup Language",
        option4: "Home Tool Markup Language",
        correctAns: "Hyper Text Markup Language"
    },
    {
        Question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        option1: "title",
        option2: "alt",
        option3: "src",
        option4: "longdesc",
        correctAns: "alt"
    },
    {
        Question: "How do you call a function named 'myFunction'?",
        option1: "call myFunction()",
        option2: "myFunction()",
        option3: "call function myFunction()",
        option4: "myFunction",
        correctAns: "myFunction()"
    },
    {
        Question: "How do you write 'Hello World' in an alert box in JavaScript?",
        option1: "msg('Hello World');",
        option2: "alertBox('Hello World');",
        option3: "alert('Hello World');",
        option4: "msgBox('Hello World');",
        correctAns: "alert('Hello World');"
    },
    {
        Question: "Which CSS property controls the text size?",
        option1: "text-style",
        option2: "font-size",
        option3: "text-size",
        option4: "font-style",
        correctAns: "font-size"
    },
    {
        Question: "Which operator is used to assign a value to a variable in JavaScript?",
        option1: "*",
        option2: "-",
        option3: "=",
        option4: "==",
        correctAns: "="
    },
    {
        Question: "What does CSS stand for?", 
        option1: "Creative Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Computer Style Sheets",
        option4: "Colorful Style Sheets",
        correctAns: "Cascading Style Sheets"
    },
    {
        Question: "Which HTML attribute is used to define inline styles?",
        option1: "class",
        option2: "font",
        option3: "style",
        option4: "styles",
        correctAns: "style"
    },
    {
        Question: "Which CSS property is used to make a text bold?",
        option1: "text-decoration: bold;",
        option2: "font-weight: bold;",
        option3: "font-style: bold;",
        option4: "font-variant: bold;",
        correctAns: "font-weight: bold;"
    },
    {
        Question: "Which CSS layout method allows you to easily align items in a single row or column?",
        option1: "Flexbox",
        option2: "Grid",
        option3: "Float",
        option4: "Positioning",
        correctAns: "Flexbox"
    }
];


function showQuestion() {
    var q = question[currentQuestion]; 
    quizcontainer.innerHTML = `
        <h2>Question ${currentQuestion + 1} of ${question.length}</h2>
        <h3>${q.Question}</h3>
        <p><label><input type="radio" name="answer" value="1"> ${q.option1}</label></p>
        <p><label><input type="radio" name="answer" value="2"> ${q.option2}</label></p>
        <p><label><input type="radio" name="answer" value="3"> ${q.option3}</label></p>
        <p><label><input type="radio" name="answer" value="4"> ${q.option4}</label></p>
    `;
}


nextcontainer.onclick = function () {
    var selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    var q = question[currentQuestion];
    var correctOption = q["option" + selected.value];

    if (correctOption === q.correctAns) {
        score++;
    } else {
        wrong++;
    }

    currentQuestion++;

    if (currentQuestion < question.length) {
        showQuestion();
    } else {
        showData(); 
    }
};


function showData() {
    
    quizcontainer.innerHTML = `
        <h2>Quiz Completed!</h2>
        <hr style="border-color: #333">
        <h3>Total Questions: <b>${question.length}</b></h3>
        <h3 style="color: #4caf50;">Correct Answers: <b>${score}</b></h3>
        <h3 style="color: #f44336;">Wrong Answers: <b>${wrong}</b></h3>
        <h2 style="text-align: center; margin-top: 20px;">Final Score: ${score}/${question.length}</h2>
    `;
    
    nextcontainer.style.display = "none"; 
   
    var refr = ref(database, `Quiz_Results`);
    var dataref = push(refr);
    var id = dataref.key;
    
    var resultObject = {
        id: id,
        totalQuestions: question.length,
        correctAnswers: score,
        wrongAnswers: wrong,
        finalScore: `${score}/${question.length}`
    };

    set(dataref, resultObject)
    .then(() => {
        alert("Your quiz result has been successfully saved to Firebase!");
    })
    .catch((error) => {
        alert("Firebase Database Error: " + error.message);
    });
}
function saveQuestions() {
     var quesRefr = ref(database, 'Quizes'); 
    var sysOpp = {};
    
    question.forEach((item, index) => {
        
        sysOpp[`Quiz_Results_${index+1}`] = item;
    });
   
 set(quesRefr,sysOpp)
    .then(() => {
        console.log("All questions successfully synced to Firebase!");
    })
    .catch((error) => {
        console.error("Error saving questions: ", error);
    });
    
}
showQuestion(); 
saveQuestions()
