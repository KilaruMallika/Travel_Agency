document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('izml');
    const submitButton = document.getElementById('w-c-s-bgc_p-1-dm-id-4');

    // Function to validate the form fields
    function validateForm() {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let valid = true;

        // Check if full name is provided
        if (fullName === "") {
            alert("Please enter your full name.");
            valid = false;
        }

        // Check if email is provided and valid
        else if (email === "") {
            alert("Please enter your email address.");
            valid = false;
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        // Check if message is provided
        else if (message === "") {
            alert("Please enter your message.");
            valid = false;
        }

        return valid;
    }

    // Email validation function
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    // Form submission handler
    submitButton.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Validate form fields
        if (validateForm()) {
            alert("Message sent successfully!");
            form.reset(); // Reset the form after successful submission
        }
    });
});
