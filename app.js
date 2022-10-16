
function randomNumber() {
    let randomNumber = Math.ceil(Math.random() * 40000);
    randomNumber = randomNumber.toString();
    return randomNumber;
};
function codeGenerate() {
    let result = randomNumber();
    if (result.length == 4) {
        return result;
    }
    else {
        return codeGenerate()
    };
};
let keyPadInput = document.getElementById('key-pad-input');
let keyInput = '';
let generatePin = '';
document.querySelector('.generate-btn').addEventListener('click', function () {
    keyPadInput.value = '';
    keyInput = '';
    let otp = codeGenerate();
    let randomNumberInput = document.getElementById('randomNumber');
    randomNumberInput.value = otp;
    generatePin = randomNumberInput.value;
    console.log(generatePin)
});


document.getElementById('numberPlate').addEventListener('click', function (event) {
    let key = event.target.innerText;
    if (key >= 0) {
        if (keyInput.length < 4) {
            keyInput = keyInput + key;
            keyPadInput.value = keyInput;
        }
    }
})

document.getElementById('submit').addEventListener('click', function () {
    let otpMatch = document.getElementById('key-pad-input');
    if (otpMatch.value == generatePin) {
        console.log('ok')
        document.querySelectorAll('.notify')[0].style.display = 'block'
       document.querySelectorAll('.notify')[1].style.display = 'none'
    }
    else {
        console.log('no')
        document.querySelectorAll('.notify')[0].style.display = 'none'
        document.querySelectorAll('.notify')[1].style.display = 'block'
    }
})
