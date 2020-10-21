function validarInput(e, input) {
  key = e.keyCode;
  if (key == 8) {
    valor2 = input.value.toLowerCase();

    if (valor2.trim() === "" || valor2.trim() === " ") {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  }
}

function address(e, input) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();

  valor = input.value.toLowerCase();
  valor = valor.concat("", tecla);

  if (valor.trim() != "") {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    input.value = input.value.concat(e.value);

    return true;
  } else if (valor.trim() != " ") {
    input.value = "";
  }
}

function validarPassword(e) {
  key = e.keyCode || e.which;

  password = document.getElementById("contraseña");
  confirmacionPassword = document.getElementById("confirmacion-contraseña");
  valor = password.value.toLowerCase();
  valorC = confirmacionPassword.value.toLowerCase();

  art1 = document.getElementById("art-1");
  art2 = document.getElementById("art-2");
  icon1 = document.getElementById("icon-1");
  icon2 = document.getElementById("icon-2");

  var longitud = false;
  var coincidencia = false;

  if (valor.length >= 8) {
    art1.classList.remove("art-invalid");
    art1.classList.add("art-valid");
    icon1.classList.remove("fa-times-circle");
    icon1.classList.add("fa-check-circle");

    longitud = true;
  }
  if (valor == valorC && valor.length > 0) {
    art2.classList.remove("art-invalid");
    art2.classList.add("art-valid");
    icon2.classList.remove("fa-times-circle");
    icon2.classList.add("fa-check-circle");

    coincidencia = true;
  } else {
    art2.classList.remove("art-valid");
    art2.classList.add("art-invalid");
    icon2.classList.remove("fa-check-circle");
    icon2.classList.add("fa-times-circle");
    coincidencia = false;
  }

  if (key == 8) {
    if (valor.length < 8) {
      art1.classList.remove("art-valid");
      art1.classList.add("art-invalid");
      icon1.classList.remove("fa-check-circle");
      icon1.classList.add("fa-times-circle");

      longitud = false;
    }
    if (valor != valorC && valor.length > 0) {
      art2.classList.remove("art-valid");
      art2.classList.add("art-invalid");
      icon2.classList.remove("fa-check-circle");
      icon2.classList.add("fa-times-circle");

      coincidencia = false;
    }
  }

  if (longitud && coincidencia) {
    password.classList.remove("is-invalid");
    password.classList.add("is-valid");
    confirmacionPassword.classList.remove("is-invalid");
    confirmacionPassword.classList.add("is-valid");
  } else {
    password.classList.remove("is-valid");
    password.classList.add("is-invalid");
    confirmacionPassword.classList.remove("is-valid");
    confirmacionPassword.classList.add("is-invalid");
  }
}

function validarCurrentPassword(e, input) {
  key = e.keyCode || e.which;

  password = input.value.toLowerCase();

  var longitud = password.length;

  if (longitud >= 8) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }

  if (key == 8) {
    if (longitud < 8) {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  }
}

function soloLetras(e, input) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
  //especiales = [8, 46, 32];

  if (letras.indexOf(tecla) == -1) {
    return false;
  } else {
    valor = input.value.toLowerCase();
    valor = valor.concat("", tecla);

    if (valor != "") {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }

    return true;
  }
}

function soloNumeros(e, input) {
  key = e.keyCode || e.which;
  tecla = String.fromCharCode(key).toLowerCase();
  letras = "1234567890";
  especiales = [];

  if (letras.indexOf(tecla) == -1) {
    return false;
  } else {
    valor = input.value.toLowerCase();
    valor = valor.concat("", tecla);

    if (valor != "") {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }

    return true;
  }
}

function validarSelect(x) {
  select = x;
  //num = y;
  coincidencia = false;

  if (select.value != "") {
    select.classList.remove("is-invalid");
    select.classList.add("is-valid");
  }
  /*
    if (num == 1) {
        valores_permit = ["soltero", "casado", "divorciado"];
    } else {
        valores_permit = ["informatica", "derecho", "administracion", "telecomunicaciones"];
    }

    for (j = 0; j < valores_permit.length; j++) {
        if (valor.value == valores_permit[j]) {
            coincicendia = true;
            values = valores_permit[j]
        }
    }
    if (coincidencia == false) {
        valor.value = values;
    } else {
        valor.value = " ";
    }
    */
}

/*
document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    //valido = document.getElementById('emailOK');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");
        //valido.innerText = "válido";
    } else {
        campo.classList.remove("is-valid");
        campo.classList.add("is-invalid");
        //valido.innerText = "incorrecto";
    }
});


//VALIDACIONES


*/
