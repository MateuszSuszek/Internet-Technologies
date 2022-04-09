async function handleFormSubmit(event) {
    event.preventDefault();

    Array.from(document.getElementsByClassName("has-error")).forEach(element => {
        element.classList.remove("has-error");
    });

    Array.from(document.getElementsByClassName("help-block")).forEach(element => {
        element.innerHTML = '';
    });

    const form = document.getElementById("main-form");

    const formData = {
        login: document.getElementById("login").value,
        password0: document.getElementById("password0").value,
        password1: document.getElementById("password1").value,
        birthdate: document.getElementById("birthdate").value,
    };

    const data = new URLSearchParams(new FormData(form));

    fetch('1.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);

            if (!data.success) {
                if (data.errors.login) {
                    document.getElementById("login-group").classList.add("has-error");
                    document.getElementById("login-group").innerHTML += '<div class="help-block">' + data.errors.login + "</div>";
                }

                if (data.errors.password0) {
                    document.getElementById("password0-group").classList.add("has-error");
                    document.getElementById("password0-group").innerHTML += '<div class="help-block">' + data.errors.password0 + "</div>";
                }

                if (data.errors.password1) {
                    document.getElementById("password1-group").classList.add("has-error");
                    document.getElementById("password1-group").innerHTML += '<div class="help-block">' + data.errors.password1 + "</div>";
                }

                if (data.errors.birthdate) {
                    document.getElementById("birthdate-group").classList.add("has-error");
                    document.getElementById("birthdate-group").innerHTML += '<div class="help-block">' + data.errors.birthdate + "</div>";
                }

            } else {
                $("form").html(
                    '<div class="alert alert-success">' + data.message + "</div>"
                );
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

var form = document.getElementById("main-form");
form.addEventListener("submit", handleFormSubmit);