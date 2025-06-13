document.addEventListener('DOMContentLoaded', () => {
    // --- Quiz Question Data Pool ---
    const allQuestions = [
        {
            question: 'What is the capital of France?',
            answers: [ { text: 'Berlin', correct: false }, { text: 'Madrid', correct: false }, { text: 'Paris', correct: true }, { text: 'Rome', correct: false },  ]
        },
        {
            question: 'Which planet is known as the Red Planet?',
            answers: [ { text: 'Earth', correct: false }, { text: 'Mars', correct: true }, { text: 'Jupiter', correct: false }, { text: 'Venus', correct: false } ]
        },
        {
            question: 'What is the largest ocean on Earth?',
            answers: [ { text: 'Atlantic Ocean', correct: false }, { text: 'Indian Ocean', correct: false }, { text: 'Arctic Ocean', correct: false }, { text: 'Pacific Ocean', correct: true } ]
        },
        {
            question: 'Who wrote "Romeo and Juliet"?',
            answers: [ { text: 'William Shakespeare', correct: true }, { text: 'Charles Dickens', correct: false }, { text: 'Mark Twain', correct: false }, { text: 'Jane Austen', correct: false } ]
        },
        {
            question: 'What is the chemical symbol for water?',
            answers: [ { text: 'O2', correct: false }, { text: 'H2O', correct: true }, { text: 'CO2', correct: false }, { text: 'NaCl', correct: false } ]
        },
        {
            question: 'How many continents are there?',
            answers: [ { text: '5', correct: false }, { text: '6', correct: false }, { text: '7', correct: true }, { text: '8', correct: false } ]
        },
        {
            question: 'Who painted the Mona Lisa?',
            answers: [ { text: 'Vincent van Gogh', correct: false }, { text: 'Pablo Picasso', correct: false }, { text: 'Leonardo da Vinci', correct: true }, { text: 'Claude Monet', correct: false } ]
        },
        {
            question: 'What is the tallest mountain in the world?',
            answers: [ { text: 'K2', correct: false }, { text: 'Mount Everest', correct: true }, { text: 'Kangchenjunga', correct: false }, { text: 'Makalu', correct: false } ]
        },
        {
            question: 'Which country is known as the Land of the Rising Sun?',
            answers: [ { text: 'China', correct: false }, { text: 'South Korea', correct: false }, { text: 'Japan', correct: true }, { text: 'Thailand', correct: false } ]
        },
        {
            question: 'What is the hardest natural substance on Earth?',
            answers: [ { text: 'Gold', correct: false }, { text: 'Iron', correct: false }, { text: 'Quartz', correct: false }, { text: 'Diamond', correct: true } ]
        },
        {
            question: 'What is the main ingredient in guacamole?',
            answers: [ { text: 'Tomato', correct: false }, { text: 'Avocado', correct: true }, { text: 'Onion', correct: false }, { text: 'Lime', correct: false } ]
        },
        {
            question: 'How many sides does a hexagon have?',
            answers: [ { text: '5', correct: false }, { text: '6', correct: true }, { text: '7', correct: false }, { text: '8', correct: false } ]
        }
    ];

    // --- DOM Elements ---
    const questionTextEl = document.getElementById('question-text');
    const answerButtonsEl = document.getElementById('answer-buttons');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const scoreContainer = document.getElementById('score-container');
    const scoreTextEl = document.getElementById('score-text');
    const progressBar = document.getElementById('progress-bar');
    const quizHeader = document.querySelector('.quiz-header');

    // --- State Variables ---
    let currentQuizQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    // --- Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    function startQuiz() {
        // Shuffle the main question pool and select the first 10
        let shuffledQuestions = [...allQuestions];
        shuffleArray(shuffledQuestions);
        currentQuizQuestions = shuffledQuestions.slice(0, 10);
        
        currentQuestionIndex = 0;
        score = 0;
        nextBtn.textContent = 'Continue';
        scoreContainer.classList.add('hidden');
        quizHeader.classList.remove('hidden');
        answerButtonsEl.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const currentQuestion = currentQuizQuestions[currentQuestionIndex];
        questionTextEl.textContent = currentQuestion.question;

        const progressPercentage = ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonsEl.appendChild(button);
        });
    }

    function resetState() {
        nextBtn.classList.add('hidden');
        while (answerButtonsEl.firstChild) {
            answerButtonsEl.removeChild(answerButtonsEl.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === 'true';

        if (isCorrect) {
            score++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('wrong');
        }

        Array.from(answerButtonsEl.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });

        nextBtn.classList.remove('hidden');
    }

    function showScore() {
        resetState();
        quizHeader.classList.add('hidden');
        answerButtonsEl.classList.add('hidden');
        nextBtn.classList.add('hidden');
        
        scoreContainer.classList.remove('hidden');
        scoreTextEl.textContent = `${score} / ${currentQuizQuestions.length}`;
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuizQuestions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    // --- Event Listeners ---
    nextBtn.addEventListener('click', handleNextButton);
    restartBtn.addEventListener('click', startQuiz);

    // --- Initial Start ---
    startQuiz();
});