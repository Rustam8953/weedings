const form = document.forms['form'];

const btn = form.elements['button'];

const inputArr = Array.from(form);
const validInput = [];

inputArr.forEach(el => {
    if(el.hasAttribute('data-reg')) {
        
        el.setAttribute('is-valled', '0');

        validInput.push(el)

    }
})

console.log(validInput)

form.addEventListener('input', inputHandler)

btn.addEventListener('click', btnHandler);

function inputHandler({target}) {
    if(target.hasAttribute('data-reg')) {
        inputCheck(target);
    }
}

function inputCheck(el) {
    const inputValue = el.value;
    const inputReg = el.getAttribute('data-reg');
    const labelItem = el.closest('.block-item').querySelector('label');
    const reg = new RegExp(inputReg);
    if(reg.test(inputValue)) {
        el.style.border = "1px solid #5c7d68";
        el.setAttribute('is-valled', '1');
        labelItem.classList.remove('active')
    } else {
        el.style.border = "1px solid rgb(139, 69, 69)";
        el.setAttribute('is-valled', '0');
        labelItem.classList.add('active')
    }
}

function btnHandler(e) {
    const isAllValid = [];
    validInput.forEach(el => {
        isAllValid.push(el.getAttribute('is-valled'));
    })
    const isVallid = isAllValid.reduce((acc, current) => {
        return acc && current;
    })
    if(!Boolean(Number(isVallid))) {
        e.preventDefault();
    }
}

let date = new Date('Jun 06 2023 18:00:00');

function counts() {
    let nowCurrent = new Date();
    gap = date - nowCurrent;

    let days = Math.floor(gap / 1000 / 60 / 60 / 24),
        hour = Math.floor(gap / 1000 / 60 / 60) % 24,
        minute = Math.floor(gap / 1000 / 60) % 60,
        second = Math.floor(gap / 1000) % 60

    document.getElementById('days').innerText = days
    document.getElementById('hour').innerText = hour
    document.getElementById('minute').innerText = minute
    document.getElementById('second').innerText = second
}

setInterval(counts, 1000)