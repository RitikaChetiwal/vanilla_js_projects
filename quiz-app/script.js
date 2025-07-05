const quizData = [
    {
        question: "Which keyword was traditionally used to declare variables before ES6?",
        options: ["var", "int", "let", "float"],
        correctAnswer: 0
    },
    {
        question: "What is the correct syntax to log 'Hello World' in the console?",
        options: ["print('Hello World')", "console.log('Hello World')", "log('Hello World')", "echo('Hello World')"],
        correctAnswer: 1
    },
    {
        question: "Which of these is a JavaScript data type?",
        options: ["number", "decimal", "char", "double"],
        correctAnswer: 0
    },
    {
        question: "How do you create a function in JavaScript?",
        options: [
            "function = myFunc()",
            "def myFunc()",
            "function myFunc()",
            "create function myFunc()"
        ],
        correctAnswer: 2
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!=="],
        correctAnswer: 2
    },
    {
        question: "What does `typeof` operator do in JavaScript?",
        options: [
            "Checks data type",
            "Declares a variable",
            "Returns the length of a string",
            "Rounds a number"
        ],
        correctAnswer: 0
    },
    {
        question: "Which method is used to parse JSON strings?",
        options: ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "parseObject()"],
        correctAnswer: 1
    },
    {
        question: "What will `Boolean(0)` return?",
        options: ["true", "false", "NaN", "undefined"],
        correctAnswer: 1
    },
    {
        question: "Which array method removes the last item?",
        options: ["shift()", "pop()", "remove()", "splice()"],
        correctAnswer: 1
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        options: ["<!-- comment -->", "# comment", "// comment", "/* comment */"],
        correctAnswer: 2
    }
];

const quiz = document.querySelector('#quiz')
const questionEle = document.querySelector('#question');
const answerInput = document.querySelectorAll('.answer');
// const [questionEle, option_1, option_2, option_3, option_4] = document.querySelectorAll('#question', '.option_1', '.option_2', '.option_3', '.option_4');
const submitButton = document.querySelector('#submitButton');

document.addEventListener('DOMContentLoaded', loadQuiz);

let currQues = 0;
let score = 0;

function loadQuiz() {
    const { question, options } = quizData[currQues];
    questionEle.textContent = `${currQues + 1}: ${question}`;

    options.forEach((currOpt, index) => {
        const element = document.getElementById(`option_${index + 1}`);
        if (element) {
            element.textContent = currOpt;
        }
    });
};

submitButton.addEventListener('click', () => {
    const selectedOptIndex = getSelectedOption();
    // console.log(`selected option index: ${selectedOptIndex}`);

    if (selectedOptIndex === quizData[currQues].correctAnswer) {
        score++;
        console.log(`your answer is correct and your score is now ${score}`);
    } else {
        console.log(`your answer is wrong`);
    }

    currQues++;

    if (currQues < quizData.length) {
        deselectAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
            <div class="result">
                <h2>🏆 Score: ${score} / ${quizData.length}</h2>
                <p>Congrats! on completing the quiz🎉</p>
                <button class="reloadButton" onclick = "location.reload()">Play again  🔁</button>
            </div>
        `;
    }

});

function getSelectedOption() {
    // let ansIndex;
    // answerInput.forEach((currInput,index) => {
    //     if(currInput.checked){
    //         ansIndex = index;
    //     }
    // })
    // return ansIndex;

    // OR

    return Array.from(answerInput).findIndex((currInput) => currInput.checked);
};

function deselectAnswers() {
    return answerInput.forEach((currInput) => currInput.checked = false)
}