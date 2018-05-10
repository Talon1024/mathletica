import flash.display.MovieClip;
import flash.events.MouseEvent;
import flash.events.Event;

var globals:MovieClip = MovieClip(root);

var i;
var keypadShown:Boolean = true; // true for keypad, false for multiple choice
var inputButtons:Array = new Array("btn0", "btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9");
var multChoiceButtons:Array = new Array("btnMC0", "btnMC1", "btnMC2", "btnMC3");
var positiveFeedback:Array = new Array(
	"That's correct!",
	"Excellent work!",
	"Great job!",
	"You rock! Keep it up.",
	"Wow! You're good at this.",
	"YES!"
); // I'm a Pythonist, and I like to follow PEP8 style guidelines most of the time.
var negativeFeedback:Array = new Array(
	"Nope. Sorry.",
	"WRONNNNNNNG!",
	"Sorry, that's not the right answer.",
	"Wrong. You need more practice.",
	"Nope nope nope nope nope.",
	"NO!"
);
var almostError:Number = 1;
var almostFeedback:Array = new Array(
	"Close, but no cigar",
	"Almost! Keep practicing.",
	"Not quite... But close.",
	"My goodness! You almost had it.",
	"You need some more practice, buddy.",
	"Whoops!"
);
var firstOperand:Number;
var secondOperand:Number;
var userAnswer:Number;
var correctAnswer:Number;
var curQuestionNum:Number;

// Add event listeners
for (i = 0; i < multChoiceButtons.length; i++) {
	this[multChoiceButtons[i]].addEventListener(MouseEvent.MOUSE_UP, setUserMCAnswer);
}
for (i = 0; i < inputButtons.length; i++) {
	this[inputButtons[i]].addEventListener(MouseEvent.MOUSE_UP, addDigit);
}
btnNext.addEventListener(MouseEvent.MOUSE_UP, nextQuestion);
btnFinish.addEventListener(MouseEvent.MOUSE_UP, finishQuiz);

function newQuestion():void {
	++curQuestionNum;
	userAnswer = Number.NaN;
	if (curQuestionNum <= globals.g_activeQCount) {
		btnClear.addEventListener(MouseEvent.MOUSE_UP, clearInput);
		btnCheck.addEventListener(MouseEvent.MOUSE_UP, checkInput);

		firstOperand = getRandom(5 * globals.g_activeDifficulty, 1);
		secondOperand = getRandom(5 * globals.g_activeDifficulty, 1);

		txtQNum.text = "Question " + String(curQuestionNum) + " of " + String(globals.g_activeQCount);

		// Get value for correct answer
		if (globals.g_activeOp == "Addition") {
			makeAddQuestion();
		} else if (globals.g_activeOp == "Subtraction") {
			makeSubQuestion();
		} else if (globals.g_activeOp == "Multiplication") {
			makeMultQuestion();
		} else if (globals.g_activeOp == "Division") {
			makeDivQuestion();
		} else if (globals.g_activeOp == "Square") {
			makeSqrQuestion();
		} else if (globals.g_activeOp == "Square root") {
			makeSqrtQuestion();
		} else if (globals.g_activeOp == "Random") {
			var randOp:Number = getRandom(5);
			if (randOp == 0) {
				makeAddQuestion();
			} else if (randOp == 1) {
				makeSubQuestion();
			} else if (randOp == 2) {
				makeMultQuestion();
			} else if (randOp == 3) {
				makeDivQuestion();
			} else if (randOp == 4) {
				makeSqrQuestion();
			} else if (randOp == 5) {
				makeSqrtQuestion();
			}
		}
	}
}

function makeAddQuestion():void {
	keypadDisplay(true);
	multChoiceDisplay(false);
	correctAnswer = firstOperand + secondOperand;
	txtOperand1.text = String(firstOperand);
	txtOperand2.text = String(secondOperand);
	txtOperator.text = "+";
}

function makeSubQuestion():void {
	keypadDisplay(true);
	multChoiceDisplay(false);
	firstOperand += secondOperand;
	correctAnswer = firstOperand - secondOperand;
	txtOperand1.text = String(firstOperand);
	txtOperand2.text = String(secondOperand);
	txtOperator.text = "-";
}

function makeMultQuestion():void {
	keypadDisplay(true);
	multChoiceDisplay(false);
	correctAnswer = firstOperand * secondOperand;
	txtOperand1.text = String(firstOperand);
	txtOperand2.text = String(secondOperand);
	txtOperator.text = "×";
}

function makeDivQuestion():void {
	keypadDisplay(true);
	multChoiceDisplay(false);
	firstOperand *= secondOperand;
	correctAnswer = firstOperand / secondOperand;
	txtOperand1.text = String(firstOperand);
	txtOperand2.text = String(secondOperand);
	txtOperator.text = "÷";
}

function makeSqrQuestion():void {
	keypadDisplay(true);
	multChoiceDisplay(false);
	correctAnswer = Math.pow(firstOperand, 2);
	txtOperand1.text = "";
	txtOperand2.text = String(firstOperand) + "²";
	txtOperator.text = "";
}

function makeSqrtQuestion():void {
	txtOperand1.text = "";
	txtOperand2.text = "√";
	txtOperator.text = "";
	// We can either do whole number roots or real roots.
	// Show a multiple choice in case of real roots.
	if (Math.round(Math.random()) == 1) {
		// Whole number root
		keypadDisplay(true);
		multChoiceDisplay(false);
		correctAnswer = firstOperand;
		firstOperand = Math.pow(firstOperand, 2);
	} else {
		// Real root
		keypadDisplay(false);
		multChoiceDisplay(true);
		var wholeRoot:Boolean = true;
		while (wholeRoot) {
			firstOperand = getRandom(5 * globals.g_activeDifficulty, 1);
			wholeRoot = (Math.sqrt(firstOperand) % 1 == 0);
		}
		// Since this question will be multiple choice,
		// the "correct answer" will be the number of the button
		// with the correct root on it.
		correctAnswer = getRandom(multChoiceButtons.length - 1, 0);
		// Populate multiple choice button text values
		for (i = 0; i < multChoiceButtons.length; i++) {
			if (i == correctAnswer) {
				this[multChoiceButtons[i]].txtChoiceValue.text = String(Math.sqrt(firstOperand));
			} else {
				this[multChoiceButtons[i]].txtChoiceValue.text = String(Math.sqrt(firstOperand) + (Math.random() * 2 - 1));
			}
		}
		// Event listeners are already added to the multiple choice question buttons
	}
	txtOperand2.appendText(String(firstOperand));
}

// Functions to control display of keypad and multiple choice buttons
function keypadDisplay(showIt:Boolean):void {
	keypadShown = showIt;
	for (i = 0; i < inputButtons.length; i++) {
		this[inputButtons[i]].visible = showIt;
	}
}
function multChoiceDisplay(showIt:Boolean):void {
	keypadShown = !showIt;
	for (i = 0; i < multChoiceButtons.length; i++) {
		this[multChoiceButtons[i]].visible = showIt;
	}
}

var initChallenge = function():void {
	keypadDisplay(true);
	multChoiceDisplay(false);

	curQuestionNum = 0;
	globals.g_correctAnswers = 0;
	globals.g_incorrectAnswers = 0;
	updateCorrectAndIncorrectAnswers();

	// Set texts
	txtOp.text = globals.g_activeOp;
	txtFeedback.text = "";
	txtUserAnswer.text = "";

	// Hide next question button
	btnNext.visible = false;
	btnFinish.visible = false;

	// Generate a new question
	newQuestion();
}

function addDigit(e:MouseEvent):void {
	var digit:String = e.currentTarget.name.substr(3);
	txtUserAnswer.appendText(digit);
}

function setUserMCAnswer(e:MouseEvent):void {
	userAnswer = parseInt(e.currentTarget.name.substr(5), 10);
	txtUserAnswer.text = this[e.currentTarget.name].txtChoiceValue.text;
}

function clearInput(e:MouseEvent):void {
	txtUserAnswer.text = "";
}

function checkInput(e:MouseEvent):void {
	// If the keypad is being used, parse the user's answer into an integer
	// Otherwise, the userAnswer variable will be set via the multiple choice buttons
	if (keypadShown) {
		userAnswer = parseInt(txtUserAnswer.text, 10);
	}
	if (!isNaN(userAnswer)) {
		btnClear.removeEventListener(MouseEvent.MOUSE_UP, clearInput);
		btnCheck.removeEventListener(MouseEvent.MOUSE_UP, checkInput);
		if (userAnswer == correctAnswer) { // User is correct
			++globals.g_correctAnswers;
			txtFeedback.text = positiveFeedback[getRandom(positiveFeedback.length - 1)];
		} else if ((userAnswer < correctAnswer && userAnswer >= correctAnswer - almostError) ||
				   (userAnswer > correctAnswer && userAnswer <= correctAnswer + almostError)) { // User is almost correct
			++globals.g_incorrectAnswers;
			txtFeedback.text = almostFeedback[getRandom(almostFeedback.length - 1)];
		} else { // User is incorrect
			++globals.g_incorrectAnswers;
			txtFeedback.text = negativeFeedback[getRandom(negativeFeedback.length - 1)];
		}
		updateCorrectAndIncorrectAnswers();
		if (curQuestionNum < globals.g_activeQCount) { // Go to the next question
			btnNext.visible = true;
		} else { // We are done the quiz
			btnFinish.visible = true;
		}
	} else {
		txtFeedback.text = "Please enter a number and try again.";
	}
}

function nextQuestion(e:MouseEvent):void {
	btnNext.visible = false;
	btnClear.addEventListener(MouseEvent.MOUSE_UP, clearInput);
	btnCheck.addEventListener(MouseEvent.MOUSE_UP, checkInput);
	txtFeedback.text = "";
	txtUserAnswer.text = "";
	newQuestion();
}

function updateCorrectAndIncorrectAnswers():void {
	txtCorrectAnswers.text = String(globals.g_correctAnswers) + " answers correct";
	txtIncorrectAnswers.text = String(globals.g_incorrectAnswers) + " answers incorrect";
}

function finishQuiz(e:MouseEvent):void {
	dispatchEvent(new Event("challengedone", true, false));
}

function getRandom(max:Number, min:Number = 0):Number {
	return Math.round(Math.random() * (max - min) + min);
}

