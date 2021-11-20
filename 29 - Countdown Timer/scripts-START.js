// 문서의 이름이 탭의 이름으로 지정되기 때문에, document.title로 탭에 표시될 이름을 설정할 수 있다.
document.title = "yes!!!"

let countdown;
const $timerDisplay = document.querySelector('.display__time-left');
const $endTime = document.querySelector('.display__end-time');

const $customForm = document.querySelector('#custom');
const $customTimeInput = document.querySelector('input[name="minutes"]');
const $timerButtons = document.querySelectorAll('.timer__button');

$customForm.addEventListener('submit', handleCustomTimeInput)
$timerButtons.forEach(($timerButton) => {
    $timerButton.addEventListener('click',() => timer(
        $timerButton.dataset.time
    ))
})


function handleCustomTimeInput(e) {
    e.preventDefault();
    timer($customTimeInput.value);
}

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    countdown = setInterval(() => {

        const secondsLeft = Math.round((then - Date.now()) / 1000);
        displayCountdown(secondsLeft)
        console.log(secondsLeft)
        if(secondsLeft <= 0) clearInterval(countdown);
    }, 1000)
}

function displayCountdown(seconds) {
    const min = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    $timerDisplay.textContent = `${min} : ${secondsLeft}`;
}