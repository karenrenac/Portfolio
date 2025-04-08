document.getElementById('showFormBtn').addEventListener('click', () => {
    const form = document.getElementById('contactForm');
    form.classList.toggle('d-none');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    handleFormSubmit()
        .then((msg) => {
            document.getElementById('formStatus').innerHTML = `<div class="alert alert-success">${msg}</div>`;
            this.reset();
        })
        .catch((err) => {
            document.getElementById('formStatus').innerHTML = `<div class="alert alert-danger">${err}</div>`;
        });
});

function handleFormSubmit() {
    return new Promise((resolve, reject) => {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            reject("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            reject("Invalid email address.");
            return;
        }

        // Fake delay to simulate async AJAX call
        setTimeout(() => {
            resolve("Thank you! Your message has been received.");
        }, 1000);
    });
}

function validateEmail(email) {
    // Basic email regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
