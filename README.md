# Encriptador de Mensajes

Este proyecto es un encriptador y desencriptador de mensajes simple, desarrollado en JavaScript. Su propósito es permitir a los usuarios encriptar textos introducidos, desencriptarlos, copiar los resultados al portapapeles y limpiar el campo de entrada de texto.

## Funcionalidades

### 1. `funcionalidadBotones(selector, f)`

Esta función se encarga de asignar un evento de clic a un botón específico identificado por un selector. Al hacer clic en el botón, se ejecuta la función pasada como argumento con un parámetro opcional.

### 2. `cambiarColorTexto(elemento, color)`

Cambia el color del texto de un elemento HTML específico.

### 3. `asignarTextoElemento(elemento, texto)`

Asigna un texto a un elemento HTML específico.

### 4. `validarTextoUsuario()`

Valida el texto ingresado por el usuario en un campo de texto. Si el texto es válido (solo letras minúsculas y sin caracteres especiales), lo encripta. Si no es válido, muestra un mensaje de error.

### 5. `encriptarMensaje(str)`

Encripta un mensaje de texto, reemplazando cada vocal por una secuencia de caracteres predefinida.

### 6. `desencriptar(str)`

Desencripta un mensaje de texto, revertiendo las secuencias de caracteres predefinidas a sus respectivas vocales.

### 7. `copiar()`

Copia el contenido encriptado o desencriptado al portapapeles del usuario.

### 8. `limpiarTexto()`

Limpia el campo de entrada de texto y restablece el área de resultado con un mensaje predeterminado.

## Uso

1. **Encriptar un Mensaje**:

   - Ingresa un mensaje en el campo de texto.
   - Haz clic en el botón "Encriptar". Si el mensaje es válido, se mostrará el texto encriptado.

2. **Desencriptar un Mensaje**:

   - Ingresa un mensaje encriptado en el campo de texto.
   - Haz clic en el botón "Desencriptar". El mensaje original será mostrado.

3. **Copiar Mensaje**:

   - Después de encriptar o desencriptar un mensaje, haz clic en el botón "Copiar" para copiar el resultado al portapapeles.

4. **Limpiar Texto**:
   - Haz clic en el botón "Limpiar" para borrar el texto ingresado y restablecer el área de resultados.

## Notas

- El texto a encriptar debe estar en minúsculas y sin caracteres especiales.
