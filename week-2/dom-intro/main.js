
function changeContent() {
    document.getElementById('my-p').innerHTML = "<strong>Changed by JS!!!</strong>"
    // document.getElementById('my-p').innerText = "<strong>Changed by JS!!!</strong>"
}

function changeToWalla() {
    console.log(arguments);
    // document.getElementById('my-a').href = "http://www.walla.co.il";
    document.getElementById('my-a').setAttribute("href", "http://www.walla.co.il")
    document.getElementById('my-a').innerHTML = "Go to Walla";
}

function changeColor() {
    document.getElementById('my-p').style.color = 'blue';
    document.getElementById('my-p').style.backgroundColor = 'yellow';
    // document.getElementById('my-p').style['background-color'] = 'yellow';
}

function changeBackground() {
    // document.getElementById('my-p').setAttribute('class', 'yellow-bg');
    // document.getElementById('my-p').className = 'yellow-bg';
    // console.log(document.getElementById('my-p').className); // red-font
    // document.getElementById('my-p').className += ' yellow-bg';

    document.getElementById('my-p').classList.add('yellow-bg');
}

function changeColorInput() {
    const color = document.getElementById('my-color').value;
    document.getElementById('my-p').style.color = color;
}



// - Read Input             - V
// - Click on a button      - V
// - Add item to a list     - V
// - Clean the input        - V

document.getElementById('add-item-btn').addEventListener('click', function(event) {
    // console.log(event.target.id);
    console.log('clicked');

    // Reading the input
    const newItem = document.getElementById('shopping-input').value;

    // Adding the new item to the list
    const liElement = document.createElement('li');     // <li></li> -  not in the DOM yet
    liElement.innerHTML = newItem;                    // <li>bla bla</li> - still not in the DOM
    const ulElement = document.getElementById('shopping-list');
    ulElement.appendChild(liElement);                   // adds the li to the DOM (under ul)

    // ulElement.innerHTML += `<li>${newItem}</li>`;

    // Cleaning the input
    document.getElementById('shopping-input').value = "";

});



document.getElementById("grand-parent").addEventListener('click', function() {
    console.log('grand-parent clicked');
});

document.getElementById("outer").addEventListener('click', function() {
    console.log('outer clicked');
})

document.getElementById("inner").addEventListener('click', function(e) {
    console.log('inner clicked');
    // e.stopPropagation();
})

document.getElementById("outer-sibling").addEventListener('click', function() {
    console.log('outer-sibling clicked');
})














