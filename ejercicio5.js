function generarUsuario(fullname) {
    return fullname.replaceAll(' ', '').toLowerCase() + '_dev';
}

console.log(generarUsuario('Jane Doe'));