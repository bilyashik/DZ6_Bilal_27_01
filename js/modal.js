const modal = document.querySelector('.modal');
const modalTrigger = document.querySelector('#btn-get');
const modalCloseButton = document.querySelector('.modal_close');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

modalTrigger.addEventListener('click', openModal);
modalCloseButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

let isModalShown = false;

const handleScroll = () => {
    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;

    if (isAtBottom && !isModalShown) {
        openModal();
        isModalShown = true;
    }
};

window.addEventListener('scroll', handleScroll);


setTimeout(() => {
    openModal();
    isModalShown = true;
}, 10000);


// POST DATA
// const
//
// const postData = (url, json) => {
//     const response = fetch(url, {
//         method: "POST",
//         headers: {'Content-type': 'application/json'},
//         body: json
//     })
//     return response
// }
//
// const bindPostData = (form) => {
//     form.onsubmit = (event) => {
//         event.preventDefault()
//         const formData = new FormData(form)
//         const obj = {}
//         formData.forEach()
//     }
// }





// const form = document.querySelector("form")
//
// const postData = (form) => {
//     form.addEventListener('submit', (event) => {
//         event.preventDefault()
//
//
//         const request = new XMLHttpRequest()
//         request.open("POST", "server.php")
//         request.setRequestHeader("Content-type", "application/json")
//
//         const formData = new FormData(form)
//         const obj = {}
//         formData.forEach( (item, i) => {
//             obj[i] = item
//         })
//
//
//         request.send()
//     })
// }
// postData(form)


















