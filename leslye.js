
const question = document.getElementById("question");
const options = document.querySelectorAll(".option");
const evaluate = document.querySelector(".evaluate");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const result = document.querySelector(".result");

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 20;

const quizData = [
    {
        question: "What is the full meaning of the acronym HTML?",
        options: [
            "Hyper-Text Transfer Protocol ",
            "Hyper-Text Pre-processor",
            "Hyper-text Markup Language",
            "Hyper-text Transfer Protocol-Secured"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the default port number of HTTPS?",
        options: [
            "443",
            "21",
            "80",
            "3306"
        ],
        correctAnswer: 0
    },
    // Add 17 more questions here
    {
        question: "What is the Default port number of MySQL?",
        options: [
            "8888",
            "22",
            "21",
            "3306"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the primary function of a router?",
        options: [
            "To amplify network signals",
            "To connect devices within a network",
            "To direct network traffic between networks",
            "To provide internet access"
        ],
        correctAnswer: 2
    },
    {
        question: "Which protocol is used to transfer files over the internet?",
        options: [
            "HTTP",
            "FTP",
            "SMTP",
            "DNS"
        ],
        correctAnswer: 1
    },
    // ... other networking questions

    // Web Development Questions
    {
        question: "Which HTML tag is used to define the heading of a document?",
        options: [
            "<p>",
            "<h1>",
            "<body>",
            "<div>"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of CSS?",
        options: [
            "To structure the content of a webpage",
            "To style the appearance of a webpage",
            "To add interactivity to a webpage",
            "To store data on a webpage"
        ],
        correctAnswer: 1
    },
    // ... other web development questions

    // JavaScript Questions
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: [
            "To refer to the current object",
            "To declare a variable",
            "To define a function",
            "To create an array"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the difference between `==` and `===` in JavaScript?",
        options: [
            "`==` checks for equality, `===` checks for strict equality",
            "`==` checks for strict equality, `===` checks for equality",
            "Both operators check for the same type of equality",
            "There is no difference between the two operators"
        ],
        correctAnswer: 0
    },
    // ... other JavaScript questions

    // SQL Questions
    {
        question: "What is the basic unit of data in a database?",
        options: [
            "Field",
            "Record",
            "Table",
            "Database"
        ],
        correctAnswer: 0
    },
    {
        question: "Which SQL clause is used to sort the result set?",
        options: [
            "SELECT",
            "FROM",
            "WHERE",
            "ORDER BY"
        ],
        correctAnswer: 3
    },
    // ... other SQL questions

    // Cloud Computing Questions
    {
        question: "What is cloud computing?",
        options: [
            "A type of computer hardware",
            "A type of network protocol",
            "A model for delivering IT services over the Internet",
            "A type of operating system"
        ],
        correctAnswer: 2
    },
    {
        question: "What is Infrastructure as a Service (IaaS)?",
        options: [
            "A cloud computing model where hardware and software are provided as a service",
            "A cloud computing model where software and applications are provided as a service",
            "A cloud computing model where infrastructure is provided as a service",
            "A cloud computing model where a complete platform is provided as a service"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of a loop in JavaScript?",
        options: [
            "To execute a block of code repeatedly",
            "To declare a variable",
            "To define a function",
            "To create an object"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the correct way to define a function in JavaScript?",
        options: [
            "function myFunction() { code }",
            "myFunction() { code }",
            "function: myFunction() { code }",
            "myFunction: function() { code }"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `this` keyword in JavaScript?",
        options: [
            "To refer to the current object",
            "To declare a variable",
            "To define a function",
            "To create an array"
        ],
        correctAnswer: 0
    },
  
  
    {
        question: "What is the purpose of the `fetch` API in JavaScript?",
        options: [
            "To make network requests to servers",
            "To manipulate the DOM",
            "To store data locally",
            "To create animations"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `JSON.parse()` method in JavaScript?",
        options: [
            "To parse JSON data",
            "To stringify JSON data",
            "To create a JSON object",
            "To send a JSON request"
        ],
        correctAnswer: 0
    },
    {
        question: "What is the purpose of the `localStorage` API in JavaScript?",
        options: [
            "To store data locally on the user's device",
            "To store data on a server",
            "To share data between different web pages",
            "To create cookies"
        ],
        correctAnswer: 0
    },
   
    // SQL Questions
    {
        question: "What is the basic unit of data in a database?",
        options: [
            "Field",
            "Record",
            "Table",
            "Database"
        ],
        correctAnswer: 0
    },
 
  

  
];

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    question.textContent = currentQuestion.question;

    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
}

function evaluateAnswer() {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
        const selectedIndex = Array.from(options).indexOf(selectedOption);
        if (selectedIndex === quizData[currentQuestionIndex].correctAnswer) {
            score++;
            result.textContent = "Correct!";
        } else {
            result.textContent = "Incorrect!";
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion();
        } else {
            // Calculate the percentage score
            const percentageScore = (score / totalQuestions) * 100;
            result.textContent = `Quiz Complete! Your Score: ${score}/${totalQuestions} (${percentageScore.toFixed(2)}%)`;
            evaluate.disabled = true;
            next.disabled = true;
            previous.disabled = true;
        }
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Event listeners
options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
    });
});

evaluate.addEventListener("click", evaluateAnswer);
next.addEventListener("click", displayQuestion);
previous.addEventListener("click", previousQuestion);

displayQuestion();