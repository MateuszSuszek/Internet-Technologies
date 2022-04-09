$(document).ready(function() {
    $("form").submit(function(event) {

        $(".form-group").removeClass("has-error");
        $(".help-block").remove();

        const formData = {
            login: $("#login").val(),
            password0: $("#password0").val(),
            password1: $("#password1").val(),
            birthdate: $("#birthdate").val(),
        };

        $.ajax({
            type: "POST",
            url: "1.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function(data) {
            console.log(data);

            if (!data.success) {
                if (data.errors.login) {
                    $("#login-group").addClass("has-error");
                    $("#login-group").append(
                        '<div class="help-block">' + data.errors.login + "</div>"
                    );
                }

                if (data.errors.password0) {
                    $("#password0-group").addClass("has-error");
                    $("#password0-group").append(
                        '<div class="help-block">' + data.errors.password0 + "</div>"
                    );
                }

                if (data.errors.password1) {
                    $("#password1-group").addClass("has-error");
                    $("#password1-group").append(
                        '<div class="help-block">' + data.errors.password1 + "</div>"
                    );
                }

                if (data.errors.birthdate) {
                    $("#birthdate-group").addClass("has-error");
                    $("#birthdate-group").append(
                        '<div class="help-block">' + data.errors.birthdate + "</div>"
                    );
                }

            } else {
                $("form").html(
                    '<div class="alert alert-success">' + data.message + "</div>"
                );
            }


        });

        event.preventDefault();
    });
});