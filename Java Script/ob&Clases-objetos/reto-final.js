const username = prompt("cual es tu usuario?");
const password = prompt("cual es tu contraseña?");
function usuarioExistente( username, password){
    for (let i = 0; i < usuarioDatabase.length, i++) {
        if(
            usuarioDatabase[i].username ===username
            usuarioDatabase[i].password ===password
        ) {
          return true;
          break;

    }else {
       return false;
    }
}
}

function signIn(username, password) {
    if(usuarioExistente username, password) {
        alert("Bienvenido a tu cuenta ${username}");
        console.log(usersTineline);
    } else {
        alert("Upsss, usuario o contraseñas incorrectos");
    }
}

signIn(username, password);
