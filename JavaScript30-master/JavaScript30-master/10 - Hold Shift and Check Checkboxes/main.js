/**
 * 각 체크박스마다 data-index를 지정한다
 * 체크한 체크박스의 data-index를 얻는다
 * keydown이벤트를 등록하여 shift가 눌렸다면,
 * 다음으로 누른 체크박스의 data-index를 얻고
 * 그 사이에 있는 모든 숫자의 체크박스를 checked로 만든다.
 * 
 * 체크박스 수대로 배열을 만들어 체크여부를 표시한다.
 * 
 */

const $inbox = document.querySelector(".inbox");
const $checkBoxes = document.querySelectorAll('.checkbox');

let $firstChecked = 0;
let $secondChecked = 0;

$inbox.addEventListener("click", (ev) => {
  const target = ev.target;
  const index = target.dataset.index;
  if(target.tagName !== 'INPUT') return;

  $checkBoxes.forEach((checkbox) => {
    if(checkbox.checked === true) {
      $firstChecked = checkbox.dataset.index;
    }
})

document.addEventListener("keydown", (ev) => {
  const key = ev.key;
  if(key !== 'Shift') return;
  
  })

  //여기서 키가 shift이면 두번째 인덱스를 읽어보고, 있을 경우에 사이의 체크 인덱스를 true로 바꿔준다.
  const firstChecked = document.querySelector
})