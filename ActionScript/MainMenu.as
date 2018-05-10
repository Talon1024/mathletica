// Code for main menu
import flash.events.MouseEvent;
import flash.display.MovieClip;
import flash.filters.GlowFilter; // Used for active stuff
import flash.events.Event;

var i;
var opButtons:Array = new Array("btnAdd", "btnSub", "btnMult", "btnDiv", "btnSqr", "btnSqrt", "btnHelp", "btnRandom");
var qCountButtons:Array = new Array("btnQCount4", "btnQCount8", "btnQCount12", "btnQCount16", "btnQCount20", "btnQCount24");
var difficultyButtons:Array = new Array("btnDifficulty1", "btnDifficulty3", "btnDifficulty5");

var activeGlow:GlowFilter = new GlowFilter(0xFFFF00, 1.0, 10.0, 10.0, 2, BitmapFilterQuality.HIGH, false, false);
// Access to globals
var globals:MovieClip = MovieClip(root);

// Hide instructions
txtInstructions.visible = false;

// Add event listeners to everything
for (i = 0; i < opButtons.length; i++) {
	this[opButtons[i]].addEventListener(MouseEvent.MOUSE_UP, mainMenuButtonClick);
}
for (i = 0; i < qCountButtons.length; i++) {
	this[qCountButtons[i]].addEventListener(MouseEvent.MOUSE_UP, rightHandButtonClicked);
}
for (i = 0; i < difficultyButtons.length; i++) {
	this[difficultyButtons[i]].addEventListener(MouseEvent.MOUSE_UP, rightHandButtonClicked);
}
btnStart.addEventListener(MouseEvent.MOUSE_UP, signalChallenge);

function showChallengeSettings(op:String):void {
	// Hide help text
	txtInstructions.visible = false;
	// Change header to selected operation
	txtOperation.visible = true;
	txtOperation.text = op;
	// Show text fields indicating difficulty and question count selection
	txtDifficultySelect.visible = true;
	txtQCountSelect.visible = true;
	// Show question count buttons
	for (i = 0; i < qCountButtons.length; i++) {
		this[qCountButtons[i]].visible = true;
	}
	// Show difficulty level buttons
	for (i = 0; i < difficultyButtons.length; i++) {
		this[difficultyButtons[i]].visible = true;
	}
	// Show "GO!" button
	btnStart.visible = true;
}

function hideChallengeSettings(theTitle:String):void {
	// Hide help text
	txtInstructions.visible = false;
	// Change header to selected operation
	txtOperation.visible = true;
	txtOperation.text = theTitle;
	// Hide text fields indicating difficulty and question count selection
	txtDifficultySelect.visible = false;
	txtQCountSelect.visible = false;
	// Hide question count buttons
	for (i = 0; i < qCountButtons.length; i++) {
		this[qCountButtons[i]].visible = false;
	}
	// Hide difficulty level buttons
	for (i = 0; i < difficultyButtons.length; i++) {
		this[difficultyButtons[i]].visible = false;
	}
	// Hide "GO!" button
	btnStart.visible = false;
}

function rightHandButtonClicked(e:MouseEvent):void {
	var btnType:String = e.currentTarget.name.substr(3);
	if (btnType.indexOf("QCount") == 0) { // Button is a question count button
		// Get the question count
		var qCount:Number = Number(btnType.substr(6));
		globals.g_activeQCount = qCount;
		// Apply effects
		for (i = 0; i < qCountButtons.length; i++)
		    this[qCountButtons[i]].filters = [];
		e.currentTarget.filters = [activeGlow];
		
	} else if (btnType.indexOf("Difficulty") == 0) { // Button is a difficulty button
		// Get the difficulty
		var difficulty:Number = Number(btnType.substr(10));
		globals.g_activeDifficulty = difficulty;
		// Apply effects
		for (i = 0; i < difficultyButtons.length; i++)
		    this[difficultyButtons[i]].filters = [];
		e.currentTarget.filters = [activeGlow];
	}
}

function showHelpText():void {
	txtInstructions.visible = true;
}

function mainMenuButtonClick(e:MouseEvent):void {
	var op:String = e.currentTarget.name.substr(3);
	for (i = 0; i < opButtons.length; i++) {
		this[opButtons[i]].filters = [];
	}
	e.currentTarget.filters = [activeGlow];
	if (op == "Add") {
		// Show addition challenge instructions/settings
		globals.g_activeOp = "Addition";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Sub") {
		// Show subtraction challenge instructions/settings
		globals.g_activeOp = "Subtraction";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Mult") {
		// Show multiplication challenge instructions/settings
		globals.g_activeOp = "Multiplication";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Div") {
		// Show division challenge instructions/settings
		globals.g_activeOp = "Division";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Sqr") {
		// Show squaring challenge instructions/settings
		globals.g_activeOp = "Square";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Sqrt") {
		// Show square root challenge instructions/settings
		globals.g_activeOp = "Square root";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Random") {
		// Show random challenge instructions/settings
		globals.g_activeOp = "Random";
		showChallengeSettings(globals.g_activeOp);
	} else if (op == "Help") {
		// Show instructions
		hideChallengeSettings("Instructions");
		showHelpText();
	} else {
		trace("Unknown op");
	}
}

function signalChallenge(e:MouseEvent):void {
	dispatchEvent(new Event("challengestart", true, false));
}
