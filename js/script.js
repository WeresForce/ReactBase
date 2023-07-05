'use strict'

window.addEventListener('DOMContentLoaded',function() {

    let forms = document.querySelectorAll('form');

    forms.forEach(form =>  {
        submitForm(form);
    })

    function submitForm(form) {
        form.addEventListener('submit', (e) => {

            e.preventDefault();        

            const request = new XMLHttpRequest();

            request.open('post', 'server.php');
            request.setRequestHeader('Content-type','application/json');        

            let formData = new FormData(form);

            const object = {};

            formData.forEach(function(value, key){
                object[key] = value;
            })

            const json_object = JSON.stringify(object);

            request.send(json_object);

            request.addEventListener('load', () => {
                if(request.status === 200) {
                    console.log(request.response);
                    form.reset();
                }
                else {
                    console.log('Something went wrong');
                }
            })
        });
    }

    function showThankYou(params) {
        const prevModalDialog = document.querySelector('.modal__content');

        prevModalDialog.classList.add('hide');
        openModal();
    }

});