var quizcontainer=document.getElementById("quiz-container")
var nextcontainer=document.getElementById("next-container")
var result=document.getElementById("result")
var currentQuestion = 0;
var score = 0;
var question=[
 {
    Question:"What does HTML stand for?",
     option1: "Hyper Text Markup Language",
        option2: "High Text Machine Language",
        option3: "Hyperlink Text Markup Language",
        option4: "Home Tool Markup Language",
        correctAns: "Hyper Text Markup Language"
 },
 {
     Question: "Which tag creates a paragraph?",
        option1: "<h1>",
        option2: "<p>",
        option3: "<img>",
        option4: "<br>",
        correctAns: "<p>"
 },
 {
   Question:"Choose the correct HTML element for the largest heading?",
        option1: "<h1>",
        option2: "<p>",
        option3: "<h6>",
        option4: "<br>",
        correctAns: "<h1>"

 },
 {
      Question:"What is the correct HTML element for inserting a line break?",
       option1: "<h1>",
        option2: "<break>",
        option3: "<h6>",
        option4: "<br>",
        correctAns: "<br>",
},
  {
    Question:"Choose the correct HTML element to define important text?",
     option1: "<h1>",
        option2: "<break>",
        option3: "<strong>",
        option4: "<important>",
        correctAns: "<strong>",
  },
  {
  Question:"Choose the correct HTML element to define emphasized text?",
       option1: "<em>",
        option2: "<break>",
        option3: "<strong>",
        option4: "<important>",
        correctAns: "<em>",
},
{
    Question:"Which character is used to indicate an end tag?",
    option1: "</>",
        option2: "<|>",
        option3: "<^>",
        option4: "<*>",
        correctAns: "</>",
},
{
Question:"Which tag is used to add an image?",
       option1:"<picture>",
       option2:"<image>",
        option3:"<img>",
        option4:"<a>",
        correctAns: "<img>",



    },
    {
        Question:"How can you make a numbered list?",
         option1: "<ol>",
        option2: "<ul>",
        option3: "<li>",
        option4: "<tr>",
        correctAns: "<ol>",

    },
    {
      Question:"How can you make a bulleted list?",
       option1: "<ol>",
        option2: "<ul>",
        option3: "<li>",
        option4: "<tr>",
        correctAns: "<ul>",

    },
    {
       Question:"Which tag is used to create a link?",
       option1:"<picture>",
       option2:"<image>",
        option3:"<img>",
        option4:"<a>",
        correctAns: "<a>",

    },
    {
    Question:"What does CSS stand for?",
     option1: "Cascading style sheets",
        option2: "colorful style sheets",
        option3: "create style sheets",
        option4: "Computer style sheets",
        correctAns: "Cascading style sheets",
        },
        {
        Question:"Which CSS property is used to change the text color?",
        option1:"color",
        option2:"background",
        option3:"colorful",
        option4:"colom",
     correctAns: "color",

        
},
{
    Question:"Which property controls the text size?",
    option1:"font-size",
    option2:"size",
    option3:"font-weight",
    option4:"font-family",
    correctAns: "font-size",
},
{
Question:"Which CSS property is used to change the font/writing style of text?",
 option1:"font-size",
    option2:"size",
    option3:"font-weight",
    option4:"font-family",
    correctAns: "font-family",
}

]

function showQuestion() {
    var q = question[currentQuestion];
    quizcontainer.innerHTML = `
        <h3>${q.Question}</h3>
        <input type="radio" name="answer" value="${q.option1}">
        <span>${q.option1.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
        <br>
        <input type="radio" name="answer" value="${q.option2}">
        <span>${q.option2.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
        <br>
        <input type="radio" name="answer" value="${q.option3}">
        <span>${q.option3.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
        <br>
        <input type="radio" name="answer" value="${q.option4}">
        <span>${q.option4.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>
    `;
}
var wrong = 0;
nextcontainer.onclick = function () {
    var selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert("Please select an answer");
        return;
    }
    
    else {
        wrong++;
    }
if (selected.value === question[currentQuestion].correctAns) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < question.length) {
        showQuestion();
    } 
    else {
    result.innerHTML = question.length + "/" + score;
    nextcontainer.style.display = "none";
}
};
showQuestion();











