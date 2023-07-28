const phoneInput = document.querySelector('#phone_input')
const phoneCheck = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneInput.value = '+996 '

phoneCheck.addEventListener('click', () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = ' NOT OK'
        phoneResult.style.color = 'red'
    }
})

// TAB SLIDER

const tabContent = document.querySelectorAll('.tab_content_block');
const tabsParent = document.querySelector('.tab_content_items');
const tabs = document.querySelectorAll('.tab_content_item');
let currentTab = 0;
let intervalId;

const hideTabContent = () => {
    tabContent.forEach((element) => {
        element.style.display = 'none';
    });
    tabs.forEach((element) => {
        element.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

const startSlider = () => {
    intervalId = setInterval(() => {
        hideTabContent();
        currentTab = (currentTab + 1) % tabs.length;
        showTabContent(currentTab);
    }, 3000);
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    const targetElement = event.target;
    if (targetElement.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (targetElement === tab) {
                hideTabContent();
                currentTab = tabIndex;
                showTabContent(tabIndex);
            }
        });
    }
};

startSlider();

// CONVERTER

const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const eur = document.querySelector('#eur');

const convert = (element, target1, target2, isTrue) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET", "../data/convert.json");
        request.setRequestHeader("Content-type", "application/json");
        request.send();
        request.onload = () => {
            const data = JSON.parse(request.response);
            if (isTrue) {
                target1.value = (element.value / data.usd).toFixed(2);
                target2.value = (element.value / data.eur).toFixed(2);
            } else {
                target1.value = (element.value * data.usd).toFixed(2);
                target2.value = (element.value * data.eur).toFixed(2);
            }
            element.value === '' && (target1.value = '') && (target2.value = '');
        };
    };
};

convert(som, usd, eur, true);
convert(usd, som, eur, false);
convert(eur, som, usd, false);

// CARD SWITCHER

const card = document.querySelector('.card');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let count = 1;

const updateCard = (count) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
};

updateCard(count);

btnNext.onclick = () => {
    count = count === 200 ? 1 : count + 1;
    updateCard(count);
};

btnPrev.onclick = () => {
    count = count === 1 ? 200 : count - 1;
    updateCard(count);
};

const fetchToConsole = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
};

fetchToConsole();
