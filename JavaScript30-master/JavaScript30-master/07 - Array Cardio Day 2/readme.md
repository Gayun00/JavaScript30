## 🌞 data
```js
const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
```
<br>
<br>


## 🌞 Problems
### 🌛 Array.prototype.some()
> is at least one person 19 or older?

```js
    const answer1 = people.some(person => {
      const currentYear = new Date().getFullYear()
      return 19 <= (currentYear - person.year)
    }
    )

    console.log(answer1)
```
<br>
<br>


### 🌛 Array.prototype.every()
> is everyone 19 or older?

```js
    const answer2 = people.every(person => {
      const currentYear = new Date().getFullYear()
      return 19 <= (currentYear - person.year)
    }
    )
    console.log(answer2)
```    
<br>
<br>


### 🌛 Array.prototype.find()

 > Find is like filter,
 but instead returns just the one you are looking for...
find the comment with the ID of 823423

```js
    const answer3 = comments.find(comment => 
      comment.id === 823423
    )
    console.log(answer3)
```
<br>
<br>

### 🌛 Array.prototype.findIndex()
>Find the comment with this ID
 >delete the comment with the ID of 823423

```js
    const index = comments.findIndex(comment => 
      comment.id === 823423
    )
    comments.splice(1,1)
    const answer4 = comments;
    console.log(answer4)
```

#### other
```js
    const newComments = [
      ...comments.slice(0, index),
      ...comments.slice(index + 1)
    ]
    console.log(newComments)
```