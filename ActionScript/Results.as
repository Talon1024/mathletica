import flash.events.MouseEvent;
import flash.display.MovieClip;
import flash.events.Event;

var globals:MovieClip = MovieClip(root);

btnReturn.addEventListener(MouseEvent.MOUSE_UP, signalMainmenu);

var initResults = function():void {
	txtAchPerfect.visible = false;
	txtAchPerfect.text = "PERFECT!";
	txtAchSuck.visible = false;
	txtAchSuck.text = "YOU SUCK!";

	txtChallenge.text = globals.g_activeOp;
	if (globals.g_activeDifficulty == 1) {
		txtDifficulty.text = "Beginner";
	} else if (globals.g_activeDifficulty == 3) {
		txtDifficulty.text = "Moderate";
	} else if (globals.g_activeDifficulty == 5) {
		txtDifficulty.text = "Expert";
	}
	txtQCount.text = String(globals.g_activeQCount);
	txtCorrect.text = String(globals.g_correctAnswers);
	txtIncorrect.text = String(globals.g_incorrectAnswers);

	if (globals.g_correctAnswers == globals.g_activeQCount) { // 100% correct answers
		txtAchPerfect.visible = true;
	} else if (globals.g_correctAnswers >= globals.g_activeQCount * 0.8) { // >=80% correct
		txtAchPerfect.visible = true;
		txtAchPerfect.text = "Well done.";
	} else if (globals.g_correctAnswers == 0) { // 0% correct
		txtAchSuck.visible = true;
	} else if (globals.g_correctAnswers <= globals.g_activeQCount * 0.2) { // <=20% correct
		txtAchSuck.visible = true;
		txtAchSuck.text = "Practice more.";
	}
}

function signalMainmenu(e:MouseEvent):void {
	dispatchEvent(new Event("resultsdone", true, false));
}
