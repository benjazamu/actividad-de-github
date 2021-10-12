function validacion(){
    let formvalido = true;

    let nom = document.getElementById("usuario");
   
    if(nom == null || nom.length == 0){
        alert("El usuario no puede estar vacio");
        formvalido = false;
    }

    let pass = document.getElementById("clave");

    if(pass == null){
        alert("La clave no puede estar vacio");
        formvalido = false;
    }

    return formvalido;
}