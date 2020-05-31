console.log('Cliente side javascript file is  loaded!');

const weatheForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatheForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    messageOne.textContent = 'loading...';
    messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) return messageOne.textContent = data.error;
            messageOne.textContent = data[0].forecast;
            messageTwo.textContent = data[0].location;    
        })
    })
});