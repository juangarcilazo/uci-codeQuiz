var quiz = document.getElementById("quiz");

function homePage () {
    quiz.innerHTML = `
        <p>
            My Quiz
         </p>
         <button id="startQuiz"> Start Quiz </button>
    `
document
.getElementById('startQuiz')
.addEventListener(
    'click', 
    function() {
        questionPage()
    }
  )
}

function questionPage() {
quiz.innerHTML = `
    <p>
        Question 1
    </p>
    <ul>
        <li><button> This Option </button></li>
    </ul>
    `
}

homePage()