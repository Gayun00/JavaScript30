// 문서의 이름이 탭의 이름으로 지정되기 때문에, document.title로 탭에 표시될 이름을 설정할 수 있다.
document.title = "yes!!!"

let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;



    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if(secondsLeft <= 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}: ${remainderSeconds < 10 ? 0 : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    console.log(minutes);
}