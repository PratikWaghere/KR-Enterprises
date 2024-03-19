document.getElementById('altbtn').addEventListener('click', function() {
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('message').value
    };
    

    emailjs.send('service_uacsoiu', 'template_qtyss78', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            Swal.fire({
                icon: 'success',
                title: 'Message Sent',
                text: 'Your message has been sent successfully!'
            });
            // Reset form fields if needed
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }, function(error) {
            console.log('FAILED...', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.'
            });
        });
});
