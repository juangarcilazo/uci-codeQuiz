var quiz = document.getElementById("quiz");
var questions = [
 {//Question 2
    title: 'How much money is enough money for you to begin living with Passion?'
    answers: [
        {
            answer: '$50k Salary'
            correct: false
        }, 
        {
            answer: '$100k Salary'
            correct: false
        }, 
        {
            answer: '$1m Salary'
            correct: true
        } 
    ]
 },
 {//Question 2
    title: 'What kind of Mindset do you wish to have?'
    answers: [
        {
            answer: 'Openminded'
            correct: false
        }, 
        {
            answer: 'ClosedMinded'
            correct: false
        }, 
        {
            answer: 'Presently Grounded'
            correct: true
        } 
    ]
 }, 
 {
    title: 'Whats your defintion of Success?'
    answers: [
        {
            answer: 'Money'
            correct: false
        }, 
        {
            answer: 'Fame'
            correct: false
        }, 
        {
            answer: 'Goals Achieved'
            correct: true
        } 
    ]
 } 
]
//this function is for the beginning page which contains; html for quizname and startbutton 
function homePage () {
    quiz.innerHTML = /*html*/`
        <p>
            My Successful Quiz
        </p>
        <button id="startQuiz"> Quiz your Success--> Click Here! </button>
    `
//id button on the homePage listens for a click and than takes you to the questionPage
document
.getElementById('startQuiz')
.addEventListener(
    'click', 
    function() {
        questionPage(question)
    }
  )
}


function questionPage(question) {
quiz.innerHTML = /*html*/`
 <p>
    ${question.title}
</p>
    <ul>
        <li><button> ${question.answers[0].answer} </button></li>
        <li><button> ${question.answers[1].answer} </button></li>
        <li><button> ${question.answers[2].answer} </button></li>
    </ul>
  `
}

homePage()