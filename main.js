var inquirer = require("inquirer");
var questionBank = require("./questionBank.js");

var myQuestionBank = new questionBank();

var promptQuestions = [];

for (var i = 0; i < myQuestionBank.questions.length; i++) {
    promptQuestions.push({
        type: "input",
        message: myQuestionBank.questions[i].partial + "\nAnswer: ",
        name: myQuestionBank.questions[i].questionName
    });
}

var correctAnswer = 0;
var wrongAnswer = 0;

function askQuestion() {
    inquirer.prompt(promptQuestions)
        .then(function(answers) {
            if (answers.questionOne.toLowerCase() === myQuestionBank.questions[0].cloze) {
                console.log("Question One was Correct!");
                correctAnswer++;
            } else {
                console.log("Question One was Incorrect.");
                wrongAnswer++;
            }
            if (answers.questionTwo.toLowerCase() === myQuestionBank.questions[1].cloze) {
                console.log("Question Two was Correct!");
                correctAnswer++;
            } else {
                console.log("Question Two was Incorrect.");
                wrongAnswer++;
            }
            if (answers.questionThree.toLowerCase() === myQuestionBank.questions[2].cloze) {
                console.log("Question Three was Correct!");
                correctAnswer++;
            } else {
                console.log("Question Three was Incorrect.");
                wrongAnswer++;
            }
            if (answers.questionFour.toLowerCase() === myQuestionBank.questions[3].cloze) {
                console.log("Question Four was Correct!");
                correctAnswer++;
            } else {
                console.log("Question Four was Incorrect.");
                wrongAnswer++;
            }
            if (answers.questionFive.toLowerCase() === myQuestionBank.questions[4].cloze) {
                console.log("Question Four was Correct!");
                correctAnswer++;
            } else {
                console.log("Question Four was Incorrect.");
                wrongAnswer++;
            }
            console.log("Game over!");
            console.log("Total correct answers: ", correctAnswer);
            console.log("Total incorrect answers: ", wrongAnswer);
            console.log("---------------------------------------------------");

            inquirer.prompt([{
                type: "confirm",
                message: "Would you like to play again, yes or no?",
                name: "yes"
            }]).then(function(answers) {
                if (answers.yes) {
                    correctAnswer = 0;
                    wrongAnswer = 0;
                    askQuestion();
                } else {
                    console.log("Thanks for playing!");

                }
            });
        })

}
askQuestion();