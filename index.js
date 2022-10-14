// Your code here
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
     moveDodgerLeft();
    }
  });
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
  }
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
})
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(10, rightNumbers);

    if(right > 400) {
        dodger.style.left = `${left + 1}px`;
    }
}