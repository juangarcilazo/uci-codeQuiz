var quiz = document.getElementById("quiz");

//this function is for the beginning page which contains; html for quizname and startbutton 
function homePage () {
    quiz.innerHTML = `
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
        questionPage()
    }
  )
}

function questionPage() {
quiz.innerHTML = `
 <p>
            Q1: Which Mindset do you have?
</p>
    <ul>
        <li><button>  OpenMinded Option </button></li>
    </ul>
    <ul>
        <li><button>  ClosedMinded Option </button></li>
    </ul>
    <ul>
        <li><button>  Just Present Option </button></li>
    </ul>

    `
}
console.log(homePage)
homePage()