## 🚀 30-Day Coding Challenge: Day 5

This project is the fifth entry in my 30-day coding challenge. The goal was to build a polished and engaging quiz application from scratch, focusing on JavaScript logic for state management, dynamic content, and user interaction.

### 📖 Project Overview

This is a responsive and interactive quiz application that tests users' general knowledge. Each time the quiz is started, it randomly selects 10 questions from a larger data pool, ensuring a unique experience with every playthrough. The app provides immediate visual feedback for correct and incorrect answers, tracks the user's score, and displays a final results screen upon completion.

A high emphasis was placed on creating a clean, modern, and intuitive user interface with smooth transitions and clear visual cues.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's interface during a question.
![Jun-12-2025 19-22-45](https://github.com/user-attachments/assets/df9cdbaa-5213-456a-b3d4-f9b062cc4e8a)



### 🌟 Key Features

* **Randomized Question Pool:** Randomly selects 10 questions from a larger set on each startup, providing high replayability.
* **Instant Feedback:** Answer buttons immediately change color to indicate whether the user's choice was correct or incorrect.
* **State Management:** All application state, including the current question index and the user's score, is managed cleanly in JavaScript.
* **Progress Visualization:** A dynamic progress bar at the top gives users a clear sense of their progress through the quiz.
* **Dynamic UI:** The question text and answer options are all generated dynamically from a JavaScript array of objects.
* **Final Score Screen:** After the final question, a summary screen displays the user's total score.
* **Responsive Design:** The layout is fully responsive and optimized for a seamless experience on any device.

### 💻 Technologies Used

This project was built entirely with vanilla front-end technologies to showcase a strong command of the fundamentals.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **Google Fonts:** For the 'Roboto' font family.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/quiz-app.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd quiz-app
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required.

### 🎯 Learning Objectives

This project was an excellent exercise for solidifying several key development concepts:

* **JavaScript Logic and State Management:** Managing variables like `currentQuestionIndex` and `score` to control the application's flow.
* **Array Manipulation:** Using methods like `slice()` and implementing a shuffle algorithm to create a dynamic and randomized data set for the quiz.
* **DOM Manipulation:** Dynamically creating, populating, and removing elements to build the UI for each question.
* **CSS for Interactivity:** Using CSS classes to provide immediate visual feedback to the user (e.g., `.correct`, `.wrong` styles).
* **Building a Multi-Screen Experience:** Managing the visibility of different sections of the application (`quiz`, `score-container`) to create a cohesive user journey.
