function funcionalidadBotones(selector, f) {
  document.querySelector(selector).addEventListener('click', function () {
    f();
  });
}

let botonEncriptar = funcionalidadBotones('.encriptar', validarTextoUsuario);
let botonDesencriptar = document
  .querySelector('.desencriptar')
  .addEventListener('click', function () {
    desencriptar(document.getElementById('message_input').value);
  });

let botonCopiar = funcionalidadBotones('.copiar', copiar);
let botonLiimpiarTexto = funcionalidadBotones('.limpiar_texto', limpiarTexto);

function cambiarColorTexto(elemento, color) {
  document.querySelector(elemento).style.color = color;
}

function asignarTextoElemento(elemento, texto) {
  let asignar = document.querySelector(elemento);
  asignar.innerHTML = texto;
  return;
}

function validarTextoUsuario() {
  let textoUsuario = document.getElementById('message_input').value;

  if (textoUsuario == '') {
    cambiarColorTexto('.parrafo_resultado', 'black');
  } else if (regEx.test(textoUsuario)) {
    encriptarMensaje(textoUsuario);
    cambiarColorTexto('.parrafo_resultado', 'black');
  } else {
    cambiarColorTexto('.parrafo_resultado', 'red');
    asignarTextoElemento(
      '.parrafo_resultado',
      'Por favor escribe un mensaje en minúsculas y sin caracteres especiales'
    );
  }
}

const regEx = /^[a-záéíóú ]*$/;

function encriptarMensaje(str) {
  let mensajeEncriptado = str.replace(/[aeiou]/gi, function (vocal) {
    switch (vocal) {
      case 'a':
        return 'xJd';
      case 'e':
        return 'yIl';
      case 'i':
        return 'Als';
      case 'o':
        return 'isz';
      case 'u':
        return 'vSf';
      default:
        return vocal;
    }
  });
  document.querySelector('.copiar').removeAttribute('disabled');
  let resultado = asignarTextoElemento('.parrafo_resultado', mensajeEncriptado);
  return resultado;
}

function desencriptar(str) {
  let textoUsuario = document.getElementById('message_input').value;
  if (textoUsuario == '') {
    cambiarColorTexto('.parrafo_resultado', 'black');
  } else {
    let mensajeDesencriptado = str
      .replace(/xJd/g, 'a')
      .replace(/yIl/g, 'e')
      .replace(/Als/g, 'i')
      .replace(/isz/g, 'o')
      .replace(/vSf/g, 'u');
    document.querySelector('.copiar').removeAttribute('disabled');
    return asignarTextoElemento('.parrafo_resultado', mensajeDesencriptado);
  }
}

function copiar() {
  navigator.clipboard.writeText(
    document.querySelector('.parrafo_resultado').innerHTML
  );

  alert('El texto se copio al portapapeles');
}

function limpiarTexto() {
  let textoUsuarioNuevo = document.getElementById('message_input');
  textoUsuarioNuevo.value = '';
  asignarTextoElemento(
    '.parrafo_resultado',
    '<span class="texto_negritas">Ningún mensaje fue encontrado</span><br>Ingresa el texto que desees encriptar o desencriptar'
  );
  document.querySelector('.copiar').setAttribute('disabled', true);
}
