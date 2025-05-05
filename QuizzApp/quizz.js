const questions=[
    {
        topic: "science",
        question: "What colour is the sky?",
        possibleAnswers: ["yellow", "blue", "green"],
        correctAnswer: "blue"
    },
    {
        topic: "tech",
        question: "What is the best programming language to  learn?",
        possibleAnswers: ["Javascript", "Python", "Ruby"],
        correctAnswer: "Javascript"
    }
]
const quizzProgress= document.getElementById("quizzProgress");
const questionContainer= document.getElementById("questionContainer");
const answerContainer= document.getElementById("answerContainer");
let currentQuestionIndex= 0;

function handleQuestion(index){
    //handle quizz progress section
    quizzProgress.innerHTML = "";
  questions.forEach((question) => {
    quizzProgress.innerHTML += "<span></span>";
  });
  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }
  //topic/question
  questionContainer.innerHTML= 
  `<p>${questions[index].topic}</p>
  <p>${questions[index].question}</p>`

  //answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });
  let answers= document.querySelectorAll("button");
  answers.forEach((answer)=>{
    answer.addEventListener("click", (e)=>{
            if(e.target.textContent===questions[index].correctAnswer){
                console.log("Correct!")
            } else{
                console.log("Wrong!")
            }
            if(currentQuestionIndex===questions.length -1){
                currentQuestionIndex= 0;
            } else{
                currentQuestionIndex ++;
            }
            handleQuestion(currentQuestionIndex);
    });
    
  });
  
}
handleQuestion(currentQuestionIndex);