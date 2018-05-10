import flash.events.MouseEvent;

// FX code for custom button - flashes when clicked.

stop();

this.addEventListener(MouseEvent.MOUSE_UP, buttonFlash);

function buttonFlash(e:MouseEvent):void {
	gotoAndPlay("FlashStart");
}
