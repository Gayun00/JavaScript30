'use strict';

export default class Field {
  constructor(item_count) {
    this.item_count = 5;
    this.$gameField = document.querySelector(".game-field");
    this.$fieldRect = this.$gameField.getBoundingClientRect();
    // this.onClick = this.onClick.bind(this);//this 바인딩
    this.$gameField.addEventListener("click", (event) => this.onClick(event));
    //arrow function은 this가 유지된다.
  //this.onclick의 클래스 정보는 콜백으로 전달되지 않는다.
  }

  onClick(ev) {
    const target = ev.target;
    if (target.matches(".radio")) {
      target.remove();
      this.onItemClick && this.onItemClick('radio');
      //클래스 정보가 함께 전달되지 않기 떄문에 다른곳으로 전달될 떄this값은 undefined가 된다.
      //this바인딩이 필요하다.
    } else {
    }
      stopGame();
    };

  _addItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = this.$fieldRect.width - ITEM_SIZE;
    const y2 = this.$fieldRect.height - ITEM_SIZE;

    for(let i = 0; i < count; i++){
      const $item = document.createElement("img");
      $item.setAttribute("src", imgPath);
      $item.setAttribute("class", className);
      this.$gameField.appendChild($item);

      $item.style.position = 'absolute'
      const x = randomNumber(x1, x2);
      const y = randomNumber(y1, y2);
      $item.style.left = `${x}px`
      $item.style.top = `${y}px`
    }
  }

  init() {
    this.$gameField.innerHTML = "";
    _addItem('smiley', this.item_count, 'img/smiley.png');
    _addItem('radio', this.item_count, 'img/radio.png');
    _addItem('flower', this.item_count, 'img/flower.png');
    _addItem('egg', this.item_count, 'img/egg.png');
  }

  setClickListener(onItemClick) {
    this.onItemClick = onItemClick;
  }


}
