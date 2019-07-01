<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login</title>
</head>
<body>
    Login Account<br>
    <form action="api/config/access" method="POST">
        Name: <input type="text" name="user"><br>
        Password: <input type="password" name="pass"><br>
        <button>Login</button>
    </form>
    <a href="register"><button>Register</button></a>
</body>
</html>