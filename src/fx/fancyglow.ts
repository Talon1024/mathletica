function doFancyGlow(e:Event) {
  const element = (e.target! as Element);
  requestAnimationFrame(() => {
    element.classList.remove("clickie");
    element.classList.add("active");
    requestAnimationFrame(() => {
      element.classList.add("clickie");
    });
  });
  element.addEventListener("animationend", (e2:AnimationEvent) => {
    requestAnimationFrame(() => {
      if (e2.animationName === "clickFlash") {
        element.classList.remove("clickie");
        // console.log("animation finished");
      }
    });
  });
}