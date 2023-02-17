const timer = document.querySelector(".time");
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("load", ()=>{
    let interval = 10;

    var countDown = setInterval(() => {
        interval --;

        let progressWidth = interval / 10 * 100;

        if(interval > 0){
            progressBar.style.width =  progressWidth + "%";
            timer.innerHTML = interval + "s";
        }else{
            clearInterval(countDown);
            progressBar.style.width =  "0%";
            timer.innerHTML = "over";
        }
    },1000);
})