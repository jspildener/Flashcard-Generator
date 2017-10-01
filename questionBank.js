var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// Basic Question
var bookFour = new BasicCard(
    "What was the fourth book in the Harry Potter series?",
    "Harry Potter and the Goblet of Fire");

var patronus = new BasicCard(
	"Harry's Patronus takes the form of what animal?",
	"Stag");

var halfBloodPrince = new BasicCard(
	"Who was the half-blood prince?",
	"Severus Snape");

var harrysPet = new BasicCard(
	"What is the name of Harry's owl?",
	"Hedwig");

var parseltongue = new BasicCard(
	"A parseltongue is someone who can talk to what creature?",
	"parseltongue");

// Close Questions
var bookFourCloze = new ClozeCard(
    "Harry Potter and the Goblet of Fire is the fourth book in the Harry Potter series.",
    "Harry Potter and the Goblet of Fire",
    "questionOne");

var patronusCloze = new ClozeCard(
	"Harry's Patronus takes the form of a stag.",
	"stag",
	"questionTwo");

var halfBloodPrinceCloze = new ClozeCard(
	"Severus Snape was the half-blood prince.",
	"Severus Snape",
	"questionThree");

var harrysPetClose = new ClozeCard(
	"Hedwig was the name of Harry's owl.",
	"Hedwig",
	"questionFour");

var parseltongueClose = new ClozeCard(
	"A parseltongue is someone who can talk to snakes.",
	"snakes",
	"questionFive");

var questions = [bookFourCloze, patronusCloze, halfBloodPrinceCloze, harrysPetClose, parseltongueClose];

var QuestionBank = function(){
	this.questions = questions;
}

module.exports = QuestionBank;