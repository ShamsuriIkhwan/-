document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            guests: document.getElementById('guests').value,
            attendance: document.querySelector('input[name="attendance"]:checked').value,
            message: document.getElementById('message').value
        };

        // Google Apps Script Web App URL (you'll need to replace this)
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxIxt7AcJsd3HJNDsoBXAvoS3izfqYlbFIGPmi31fz_ZET5qDVko4pNAdfwlfGmDGuQSQ/exec';

        // Fetch API for form submission
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Sheets integration
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: Object.keys(formData)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
                .join('&')
        })
        .then(response => {
            // Use SweetAlert2 for success message
            Swal.fire({
                title: 'RSVP Submitted!',
                text: 'Thank you for your response, ' + formData.name + '!',
                icon: 'success',
                confirmButtonText: 'Cool'
            });

            // Reset form
            form.reset();
        })
        .catch(error => {
            // Use SweetAlert2 for error message
            Swal.fire({
                title: 'Oops...',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            console.error('Error!', error.message);
        });
    });
});
