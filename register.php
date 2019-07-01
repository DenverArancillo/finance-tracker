<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Register</title>
    <script src="assets/js/classes.js"></script>
</head>
<body>
    Register Account<br>
    Name: <input type="text" id="user" name="user"><br>
    Password: <input type="password" id="pass" name="pass"><br>
    <button id="register">Register</button>
</body>
<script>
    document.addEventListener('DOMContentLoaded', async () => {

        // let server check identical username and return if true or false

        let uniqUser = true;
        const getUsers = new Ajax('GET', 'api/user/all');
        const request = await getUsers.send();
        console.log(request);

        // submit registration
        ID('register').addEventListener('click', () => {
            if(uniqUser){
                const register = new Ajax('POST', 'api/user/register', {
                    name: ID('user').value,
                    pass: ID('pass').value
                });
                register.send(data => {
                    if(data.result){
                        alert('Successfully created account!');
                        window.location = 'login';
                    }
                });
            }else{
                alert('Username is already taken!');
            }
        });

        // check for identical username
        ID('user').addEventListener('keypress', element => {
            let curValue = element.target.value;
            request.result.forEach(user => {
                if(user.name === curValue){
                    
                }
            });
        });

    }); 
</script>
</html>