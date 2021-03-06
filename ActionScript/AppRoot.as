import flash.events.Event;
import fl.transitions.Tween;
import fl.transitions.easing.Strong;
import fl.transitions.TweenEvent;
import flash.display.MovieClip;

// Global variable definitions for Kevin Caccamo's Mathletica
var g_activeOp:String = "Addition"; // The active arithmetical operation
var g_activeDifficulty:Number = 3; // The active difficulty level. 1 = preschool, 2 = elementary, 3 = high school
var g_activeQCount:Number = 16; // The active question count
var g_correctAnswers:Number = 0; // The number of correct answers
var g_incorrectAnswers:Number = 0; // The number of incorrect answers

// Event listeners
addEventListener("challengestart", tweenToChallenge);
addEventListener("challengedone", tweenToResults);
addEventListener("resultsdone", tweenToMain);

function tweenToChallenge(e:Event):void {
	// Disable mouse clicks on screens being tweened
	challengeScreen.mouseEnabled = false;
	challengeScreen.mouseChildren = false;
	mainMenu.mouseEnabled = false;
	mainMenu.mouseChildren = false;

	// Show challenge screen
	challengeScreen.visible = true;

	// Tween the objects
	var tweenMainOut:Tween = new Tween(mainMenu, "x", Strong.easeInOut, 0, -stage.stageWidth, 90, false); // 90 frames for 2 seconds
	var tweenChallengeIn:Tween = new Tween(challengeScreen, "x", Strong.easeInOut, 1024, 0, 90, false);
	tweenChallengeIn.addEventListener(TweenEvent.MOTION_CHANGE, initChallenge);
	tweenChallengeIn.addEventListener(TweenEvent.MOTION_FINISH, gotoChallenge);

	// Prepare challenge screen while it is moving in
	function initChallenge(e:TweenEvent):void {
		// Wait until initChallenge function is loaded
		if (typeof challengeScreen.initChallenge == "function") {
			// Initialize challenge screen
			challengeScreen.initChallenge();
			// Ensure we only do this once
			tweenChallengeIn.removeEventListener(TweenEvent.MOTION_CHANGE, initChallenge);
		}
	}

	// Once the tween finishes....
	function gotoChallenge(e:TweenEvent):void {
		// Enable mouse clicks on both screens
		mainMenu.mouseEnabled = true;
		mainMenu.mouseChildren = true;
		challengeScreen.mouseEnabled = true;
		challengeScreen.mouseChildren = true;
		// Hide main menu
		mainMenu.visible = false;
	}
}

function tweenToResults(e:Event):void {
	// Disable mouse clicks on screens being tweened
	challengeScreen.mouseEnabled = false;
	challengeScreen.mouseChildren = false;
	resultsScreen.mouseEnabled = false;
	resultsScreen.mouseChildren = false;

	// Show results screen
	resultsScreen.visible = true;

	// Tween the objects
	var tweenChallengeOut:Tween = new Tween(challengeScreen, "x", Strong.easeInOut, 0, -stage.stageWidth, 90, false); // 90 frames for 2 seconds
	var tweenResultsIn:Tween = new Tween(resultsScreen, "x", Strong.easeInOut, 1024, 0, 90, false);
	tweenResultsIn.addEventListener(TweenEvent.MOTION_CHANGE, initResults);
	tweenResultsIn.addEventListener(TweenEvent.MOTION_FINISH, gotoResults);

	// Prepare results screen while it is moving in
	function initResults(e:TweenEvent):void {
		if (typeof challengeScreen.initChallenge == "function") {
			resultsScreen.initResults();
			tweenResultsIn.removeEventListener(TweenEvent.MOTION_CHANGE, initResults);
		}
	}

	// Once the tween finishes....
	function gotoResults(e:TweenEvent):void {
		// Enable mouse clicks on both screens
		resultsScreen.mouseEnabled = true;
		resultsScreen.mouseChildren = true;
		challengeScreen.mouseEnabled = true;
		challengeScreen.mouseChildren = true;
		// Hide challenge screen
		challengeScreen.visible = false;
	}
}

function tweenToMain(e:Event):void {
	// Disable mouse clicks on screens being tweened
	mainMenu.mouseEnabled = false;
	mainMenu.mouseChildren = false;
	resultsScreen.mouseEnabled = false;
	resultsScreen.mouseChildren = false;

	// Show main menu
	mainMenu.visible = true;

	// Tween the objects
	var tweenResultsOut:Tween = new Tween(resultsScreen, "x", Strong.easeInOut, 0, -stage.stageWidth, 90, false); // 90 frames for 2 seconds
	var tweenMainIn:Tween = new Tween(mainMenu, "x", Strong.easeInOut, 1024, 0, 90, false);
	// We aren't making any changes to the main menu, so there is no need to "initialize" it.
	//tweenMainIn.addEventListener(TweenEvent.MOTION_CHANGE, initChallenge);
	tweenMainIn.addEventListener(TweenEvent.MOTION_FINISH, gotoMain);
	
	/*function initMainMenu(e:TweenEvent):void {
		if (typeof mainMenu.initMainMenu == "function") {
			mainMenu.initMainMenu();
			tweenMainIn.removeEventListener(TweenEvent.MOTION_CHANGE, initChallenge);
		}
	}*/

	// Once the tween finishes....
	function gotoMain(e:TweenEvent):void {
		// gotoAndStop("Challenge"); // Goto the "Challenge" frame
		//challengeScreen.initChallenge();
		// Enable mouse clicks on both screens
		resultsScreen.mouseEnabled = true;
		resultsScreen.mouseChildren = true;
		mainMenu.mouseEnabled = true;
		mainMenu.mouseChildren = true;
		// Hide results screen
		resultsScreen.visible = false;
	}
}
stop();

// I guess it's better to have one instance of each screen at startup time, and then show and hide them as the user moves between them.
var mainMenu:MainMenuScreen = new MainMenuScreen();
var challengeScreen:ChallengeScreen = new ChallengeScreen();
var resultsScreen:ResultsScreen = new ResultsScreen();
addChild(mainMenu);
addChild(challengeScreen);
addChild(resultsScreen);

// Hide screens we aren't using.
challengeScreen.visible = false;
resultsScreen.visible = false;
