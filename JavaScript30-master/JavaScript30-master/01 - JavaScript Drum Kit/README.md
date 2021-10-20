

## 🥁 누른 키의 audio와 key element 찾기
>HTML을 먼저 살펴보자.

#### HTML
data-key속성으로 숫자가 쓰여있는 것을 볼 수 있다.
이 숫자의 의미는 무엇일까?

```html
 <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kick</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </div>

  <audio data-key="65" src="sounds/clap.wav"></audio>
  <audio data-key="83" src="sounds/hihat.wav"></audio>
  <audio data-key="68" src="sounds/kick.wav"></audio>
  <audio data-key="70" src="sounds/openhat.wav"></audio>
  <audio data-key="71" src="sounds/boom.wav"></audio>
  <audio data-key="72" src="sounds/ride.wav"></audio>
  <audio data-key="74" src="sounds/snare.wav"></audio>
  <audio data-key="75" src="sounds/tom.wav"></audio>
  <audio data-key="76" src="sounds/tink.wav"></audio>

```
<br>
<br>

### 🎵 keyCode
자바스크립트에서 키보드 이벤트를 받았을 때 키 값을 구별할 수 있는 코드이다.
>keyCode목록을 확인해보고 싶다면 참고:
https://blog.outsider.ne.kr/322

https://keycode.info/ 에서도 누른 키의 keyCode를 바로바로 확인해볼 수 있다. (아래 이미지 참고)
![](https://images.velog.io/images/gygy/post/f889c145-1dc2-4728-a159-7ac67d5d9fcb/image.png)

>자, data-key로 keyCode를 설정해두었다는 것을 알 수 있다.
키보드를 누를때마다 해당하는 키에 이벤트를 등록해야 하기 떄문이다.

<br>
<br>

## 🥁 누른 키의 audio재생하기

### 🎵 keydown, data-key
#### keydown
addeventListener에서 키보드를 누를때마다 작동하는 이벤트를 등록할 수 있는 web API

#### data-key
data- 뒤에 원하는 변수를 붙여 사용할 수 있으며, 태그[data-]로 []를 사용해 접근할 수 있다.

```js
window.addEventListener("keydown", playSound);

function playSound(ev){
  const $audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
  console.log($audio)
}
```
![](https://images.velog.io/images/gygy/post/aca1d512-98bf-4c18-ace2-e25fe066f6a7/image.png)

누른 키의 keyCode와 동일한 data-key를 가진 audio태그를 선택하는 것을 볼 수 있다.

여기서 선택한 audio를 재생할 수 있도록 `audio.play()`를 해준다.

```js
window.addEventListener("keydown", playSound);

function playSound(ev){
  const $audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
  $audio.play(); //사운드 재생
}
```

>그러나.. 여러번 눌러도 한번씩만 재생되는 문제가 있다.

<br>
<br>


### 🎵 HTMLMediaElement.currentTime
#### currentTime
media element가 다시 재생되는 텀을 지정해준다.

![](https://images.velog.io/images/gygy/post/d671a731-8829-4a03-a3f3-45acf5277367/image.png)

```js
window.addEventListener("keydown", playSound);

function playSound(ev){
  const $audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`)
  $audio.currentTime = 0; //재생 텀 시간 지정
  $audio.play();
}
```
<br>
<br>

## 🥁 누른 키 화면에 표시하기
![](https://images.velog.io/images/gygy/post/3f7039ed-400f-4f3e-9ac8-713d08d13fa7/image.png)
나와있는 키 중 해당하는 키를 누르면 화면에 표시가 되도록 해보자.

#### CSS
제공되는 css파일 중 .playing으로 지정된 속성을 보자.
테두리와 그림자, 크기를 정해진 값으로 변경할 수 있다.

```css
.playing {
  transform: scale(1.1);
  border-color: #ffc600;
  box-shadow: 0 0 1rem #ffc600;
}
```
<br>

<br>

### 🎵 누른 키에 css 적용하기
누른 키를 어떻게 찾을까?
위와 똑같이 접근해보자.
#### HTML
key라는 class를 가진 태그 중 누른 키의 keyCode와 동일한 data-key값을 가진 것을 리턴해야한다.
```html
 <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
   ```
#### js
```js
const $key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);

  console.log($key);
}
```
키보드를 누를때마다 다음과 같은 결과가 나온다.
![](https://images.velog.io/images/gygy/post/58be0f33-ae42-417f-961e-63c22364c319/image.png)

css를 적용해보자.
클릭할 때마다 해당 키에 해당하는 영역의 css 클래스에 playing이 추가되면서 속성이 바뀐다.

![](https://images.velog.io/images/gygy/post/2496ccee-fcce-410f-a1bf-d8950261d144/image.png)

다만, 한번 누른 키는 계속해서 테두리가 바뀐채로 있고 다시 원래대로 돌아가지 않는다.
<br>
<br>

## 🥁 한번 누른 키의 css는 원래대로 돌아가기
### 🎵 HTMLElement: transitionend event
css의 transition이 끝났을 때 이벤트를 시작한다.
![](https://images.velog.io/images/gygy/post/9bc88340-69e5-4c61-bcdb-b1465ec98ac3/image.png)


key class를 가진 전체를 선택해주고, 각각에 이벤트를 등록해주었다.
transition이 끝난 이후에 removeTransition이라는 함수를 실행시켜주는데, 이 함수가 잘 실행되는지 보기 위해 콘솔로그를 찍어보았다.
```js
const $keys = document.querySelectorAll(".key");

$keys.forEach((key)=> {
  key.addEventListener('transitionend', removeTransition)
})

function removeTransition(e) {
  console.log(e)
}
```
키를 누를 때마다 다음과 같은 결과가 나온다.
![](https://images.velog.io/images/gygy/post/8c3971d7-a722-40e3-b552-cee76f1cff5e/image.png)
주의깊게 보아야 할 부분은, 한 키를 한번 눌렀을 때 다음과 같은 여러개의 결과가 나왔다는 것이다.
각각의 css속성들을 모두 호출하고 있는데, 우리는 이 중 하나만 사용하면 된다. 여기서는 모두 같지만, 보통 transform에 필요한 시간이 가장 길기 때문에 transform으로 하자.

위의 결과를 자세히 보면 `propertyName`에 각각의 css속성이 쓰여있는 것을 볼 수 있다. 이걸 사용해보자.
<br>


#### propertyName
우리는 propertyName이 tranform일 떄만 함수를 실행시킬 것이다.
```js
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  ```
  <br>
  <br>

  
### 🎵 this
고민이 생긴다. 이제 여기서 우리가 누른 키의 클래스 `playing`을 삭제해야 한다. 그런데...

우리는 전체 key들을 가져와 하나씩 removeTransition함수를 이벤트에 등록했다.


```js
const $keys = document.querySelectorAll(".key");

$keys.forEach((key)=> {
  key.addEventListener('transitionend', removeTransition)
})

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

}
```

 콘솔로그를 출력해보면 알 수 있듯이 removeTranstition은 transitionend가 트리거이기 떄문에,css 속성을 event로 갖고 있다. 

>그렇다면 removeTransition함수 안에서 누른 키에 대한 접근은 어떻게 할 수 있을까?

<br>
<br>

#### this
removeTransition의 this값을 살펴보자.
```js
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  console.log(this)
}
```
![](https://images.velog.io/images/gygy/post/ad15808e-06ba-498b-808b-150a5321835b/image.png)

각각의 key값에 이벤트를 등록했기 때문에, removeTransition이 등록되어있는 곳, this는 그 누른 키가 된다.

> this값의 클래스('playing')을 삭제하면 된다.

```js
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove('playing');
}
```

<br>
<br>

## 🥁 결과
![](https://images.velog.io/images/gygy/post/34d08267-e353-4f70-96fa-c8ae1da9fa91/JS-Drum-Kit.gif)



## Reference
https://blog.outsider.ne.kr/322
https://keycode.info/
https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event