
function changeContent() {
    document.getElementById('my-p').innerHTML = "<strong>Changed by JS!!!</strong>"
    // document.getElementById('my-p').innerText = "<strong>Changed by JS!!!</strong>"
}

function changeToWalla() {
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