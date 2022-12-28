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
<p>
            Q2: Which Car do you Want?
</p>
    <ul>
        <li><button>  Option 5</button></li>
    </ul>
    <ul>
        <li><button>  Option 4 </button></li>
    </ul>
    <ul>
        <li><button>  Option 3 </button></li>
    </ul>
<p>
            Q3: Which House do you want?
</p>
    <ul>
        <li><button>   Option1 </button></li>
    </ul>
    <ul>
        <li><button>   Option2 </button></li>
    </ul>
    <ul>
        <li><button>   Option3 </button></li>
    </ul>
<p>
            Q1: What kind of work do you want to do?
</p>
    <ul>
        <li><button>   Option1 </button></li>
    </ul>
    <ul>
        <li><button>   Option2 </button></li>
    </ul>
    <ul>
        <li><button>   Option3 </button></li>
    </ul>
    `
}
console.log(homePage)
homePage()