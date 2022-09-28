# Closure vs Class

## 현업에서는 무엇을 더 선호하는가

```js
// class Example
class UserClasses {
  constructor({ firstName, lastName, age, occupation }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
  }
  describeSelf() {
    console.log(
      `My name is ${this.firstName} ${this.lastName}, I am ${this.age}years     Old and i work as a ${this.occupation}`
    );
  }
  getAge() {
    return this.age;
  }
}
const gbolahan = new UserClasses({
  firstName: "Gbolahan",
  lastName: "Olagunju",
  age: 28,
  occupation: "Software Developer",
});
```

```js
// closure Example
const UserClosure = ({firstName, lastName, age, occupation }) => {
  return ({
    describeSelf : () => {
      console.log(`My name is ${firstName} ${lastName}, I am ${age}years Old and i work as a ${occupation}`);
    },
    getAge: () => age;
  })
}
const zainab = UserClosure({firstName: "Zaynab", lastName: "Olagunju", age: 30, occupation: "Economist"});
zainab.describeSelf();

//My name is Zaynab Olagunju. I am 30 years Old and I work as a Economist.
```

> The classe model uses the `this`
>  keyword to refer to private data, while we aren’t referring to `this`
>  in any way in the closure implementation. For this reason, closures are preferable as this
>  in JavaScript doesn’t always work as expected when compared to other traditional OOP languages.

자바스크립트에서는 실행컨텍스트 환경에 따라 this가 동적으로 변하기 때문에 개발자가 의도하지 않은 this를 사용하는 오류가 발생할 수 있다. <br>
Class에서는 private data에 접근할 때 this를 사용하고, Closure에서는 this를 사용하지 않고 접근한다. <br>
따라서 private data에 접근할 때 this를 사용하지 않는 Closure를 더 선호한다. <br><br>

> If we are creating multiple instances of an object, classes will best suit our needs. Meanwhile, if we don’t plan to create multiple instances, the simplicity of closures may be a better fit for our project.

클래스가 좀 더 좋은점은 여러 인스턴스를 생성했을 때 퍼포먼스가 좀 더 좋다는 것이다. <br>
즉, 만들고자 하는 프로젝트의 요구사항에 따라 Class를 사용할지 Closure를 사용할지 정하는게 적절하다.

<br><br>

출처: [How to decide between classes v. closures in JavaScript - Gbolahan Olagunju](https://blog.logrocket.com/how-to-decide-between-classes-v-closures-in-javascript/)
