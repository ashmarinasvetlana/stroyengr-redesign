

window.addEventListener('DOMContentLoaded', function () {
const form = document.querySelectorAll('form'),
inputs = document.querySelectorAll('input'),
alertSend = document.querySelector('.alert'),
alertFail = document.querySelector('.fail');


const path = {
    feedbackForm: './server.php'
};

const postData = async (url , data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const clearInputs = () => {
    inputs.forEach (item => {
        item.value = '';
    });
};

form.forEach(item => {
    item.addEventListener('submit', (e) => {
e.preventDefault();

const formData = new FormData(item);

postData('./server.php', formData)
.then (res => {

    console.log(res);
    
    alertSend.style.display = 'block';

})
.catch(() => {
   
    alertFail.style.display = 'block';

})


.finally(() => {
    clearInputs();
    setTimeout(() => {
        alertSend.style.display = 'none';
        alertFail.style.display = 'none';
    }, 5000);

});
    });



});



});

