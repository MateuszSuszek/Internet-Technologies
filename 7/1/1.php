<?php

$errors = [];
$data = [];

$login = $_POST['login'];
$pw0 = $_POST['password0'];
$pw1 = $_POST['password1'];
$bd = $_POST['birthdate'];

if (empty($login)) {
    $errors['login'] = 'Login is required.';
}else if (strlen($login) < 4) {
    $errors['login'] = 'Login has to be at least 4 characters long.';
}

$uppercase    = preg_match('@[A-Z]@', $pw0);
$lowercase    = preg_match('@[a-z]@', $pw0);
$number       = preg_match('@[0-9]@', $pw0);
$specialChars = preg_match('@[^\w]@', $pw0);

if (empty($_POST['password0'])) {
    $errors['password0'] = 'Password is required.';
}else if (!$uppercase || !$lowercase || !$number || !$specialChars || strlen($pw0) < 8) {
    $errors['password0'] = 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
}

if (empty($_POST['password1'])) {
    $errors['password1'] = 'Password confirmation is required.';
} else if ($pw0 != $pw1) {
    $errors['password1'] = 'Password confirmation doesn\'t match the password.';
}

if (empty($_POST['birthdate'])) {
    $errors['birthdate'] = 'Birth date is required.';
} else if ($bd > '2022-01-19') {
    $errors['birthdate'] = 'The birth date can\'t be a date in the future.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {
    $data['success'] = true;
    $data['message'] = 'Success!';
}

echo json_encode($data);