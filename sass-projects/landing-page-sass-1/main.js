const progressEls = document.querySelectorAll(".lang > span");

console.log(progressEls);

let interval 

let elProgress = 0
function updateProgress() {
    let width = 0
  progressEls.forEach((el) => {
     elProgress = el.getAttribute("data-progress");


     el.style.width = `${elProgress}%`

 }
)


;
}

updateProgress();
console.log(elProgress)
