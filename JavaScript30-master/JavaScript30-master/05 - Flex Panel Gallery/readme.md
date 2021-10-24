
flex를 이용한 간단한 프로젝트이다.
다른 부분들은 굳이 포스팅할 만큼 중요한 부분이 아니기도 하고 너무 간단해서, 주요 부분만 정리해야겠다.

## #1 💨
css에서 panel active class에 다음과 같은 속성을 주고,
#### css
```css
    .panel.active{
      flex-basis: 100%;
    }
        .panel p:nth-child(1) {
      transform: translateY(-200%);
    }
        .panel.active p:nth-child(1) {
      transform: translateY(0);
    }

    .panel p:nth-child(3) {
      transform: translateY(200%);
    }

    .panel.active p:nth-child(3){
      transform: translateY(0);
    }
 ```
 
 클릭한 패널에 해당 클래스를 넣어주면 화면이 확대된다.
 
#### js
```js

const $panels = document.querySelectorAll(".panel");

$panels.forEach((panel)=>panel.addEventListener("click", handleTexts))

function handleTexts (ev) {
  ev.target.classList.toggle('active')
}
```
> 그런데 이렇게 하면 아래 gif처럼 화면이 확대되기 전에 글씨가 내려온다.

![](https://images.velog.io/images/gygy/post/2b450b30-3d04-40ed-9d6a-091c4c0133f8/ezgif.com-gif-maker.gif)

화면이 확대된 이후에 글씨가 내려오도록 타이밍을 조절해보자.
<br>
<br>

## #2 💨 transitionend
#### css
```css
    .panel p:nth-child(1) {
      transform: translateY(-200%);
    }

    .panel.moveText p:nth-child(1) {
      transform: translateY(0);
    }

    .panel p:nth-child(3) {
      transform: translateY(200%);
    }

    .panel.moveText p:nth-child(3){
      transform: translateY(0);
    }
 ```
 #### js
 ```js
const $panels = document.querySelectorAll(".panel");

$panels.forEach((panel)=>panel.addEventListener("click", panelOpen))
$panels.forEach((panel)=>panel.addEventListener("transitionend", handleTexts))

function panelOpen (ev) {
  ev.target.classList.toggle('active')
}

function handleTexts(ev) {
  ev.target.classList.toggle('moveText')
}

```

trnasitionend 조건으로 글씨가 화면안으로 들어오는 이벤트를 따로 설정해주었다.

![](https://images.velog.io/images/gygy/post/5a7a4f80-1580-400d-b774-950807b6f190/ezgif.com-gif-maker%20(1).gif)