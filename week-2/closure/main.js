let x = 10; // Global (Script) Scope

// function foo() {
//   let y = 20; // Local scope
//   console.log(x + y); // 30

//   function innerFoo() {
//     let w = 30;
//     console.log(x + y + w); // 60

//     function innerInnerFoo() {
//       console.log(x + y + w); // 60
//     }
//     innerInnerFoo();
//   }
//   innerFoo();
// }

function foo() {
  let y = 20; // Local scope

  return function () {
    console.log(y);
  };
}

const innerFoo = foo();
innerFoo();

function countEven(nums) {
  let counter = 0;
  nums.forEach(num => {
    if (num % 2 === 0) {
      counter++;
    }
  });
  return counter;
}
console.log(countEven([2, 4, 6, 5, 7]));

function populateList() {
  const items = [
    { id: 2221, text: 'One' },
    { id: 3332, text: 'Two' },
    { id: 4833, text: 'Three' },
  ];
  const ul = document.getElementById('list');

  for (const item of items) {
    const li = document.createElement('li');
    li.innerHTML = item.text;
    ul.appendChild(li);
    li.addEventListener('click', event => {
      alert(item.id);
    });
  }
}

function createCounter() {
  let counter = 0;

  return {
    increase: function () {
      counter++;
    },
    decrease: function () {
      counter--;
    },
    value: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increase();
myCounter.increase();
myCounter.increase();
console.log(myCounter.value());
