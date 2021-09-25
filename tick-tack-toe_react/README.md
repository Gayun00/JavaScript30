
## constructor
클래스에 생성자 추가하여 state초기화

##  super
JavaScript 클래스에서 하위 클래스의 생성자를 정의할 때 항상 super를 호출해야한다.
모든 React 컴포넌트 클래스는 생성자를 가질 때 super(props) 호출 구문부터 작성해야 한다.

## state
여러개의 자식 컴포넌트 로부터 데이터를 모으거나, 자식 컴포넌트들이 서로 통신하게 하려면 부모 컴포넌트에 공유 state를 정의한다.
부모 컴포넌트는 props를 사용하여 자식컴포넌트에 state를 다시 전달할 수 있다. 일르 통해 서로 동기화 하도록 만든다.

## 불변성
기존 배열을 수정하지 않고 slice를 사용하여 배열의 사본을 만들었다.
```js
  handleClick(i) {
    const squares =
    this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares})
  }
```
### 불변성을 유지하는 것의 장점
- 이전 버전의 데이터를 유지하고 재사용하기 쉽다.(원본 데이터가 유지되므로)

- Pure Component를 만들 때 용이하다.
 : 데이터의 변경 여부를 쉽게 판단하여 Pure Component를 사용하였을 때 특정 데이터를 렌더링하도록 할지 여부를 결정할 수 있다.