const nameUser = document.getElementById("userName");
const Saludar = document.getElementById("buttonSaludar");
const saludoPersona = document.getElementById("saludoPersonal");
const despedir = document.getElementById("despedida");

Saludar.addEventListener("click", function () {
  const userNameValue = nameUser.value;
  if (userNameValue === "") {
    saludoPersona.innerHTML = `<h1>💔</h1>Ok..no me quieres decir tu nombre...<br>te doy la bienvenida igualmente,<br>espero que te diviertas mucho<br><h2>¿Comenzamos?</h2>`;
    despedir.innerHTML = "Persona sin nombre, gracias por llegar hasta aquí";
  } else {
    saludoPersona.innerHTML = `<h1>👋🏾</h1>¡Encantad@ de conocerte, ${userNameValue}!<br>Te doy la bienvenida a mi formulario,<br>espero que te diviertas mucho<br><h2>¿Comenzamos?</h2>`;
    despedir.innerHTML = `<h1>❤</h1>${userNameValue}, gracias por llegar hasta aquí!`;
  }
});

var emailField = document.getElementById("emailField");
const Validar = document.getElementById("buttonValidar");

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

Validar.addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {
    alert("Enhorabuena tu email es correcto🙌");
  } else {
    alert('"' + emailField.value + '"' + " es un email incorrecto💩");
  }
});

const edadUser = document.getElementById("edad");
const button = document.getElementById("button");
const respuesta = document.getElementById("response");

button.addEventListener("click", function () {
  const edadValue = edadUser.value;
  if (edadValue > 29) {
    respuesta.innerHTML =
      "Ambos sabemos que ya no eres joven, pero sigues molando... ❤";
  } else {
    respuesta.innerHTML =
      "pero bueno..¡Qué joven!, seguro que aún tienes dientes de leche...🦷";
  }
});

var dato = document.getElementById("nombre");
var enviar = document.getElementById("buttonenviar");
var alerta = document.getElementById("alertaRoja");

enviar.addEventListener("click", function () {
  var datos = dato.value;
  if (datos === "") {
    alertaRoja.innerHTML = "No seas así...dime algo...";
  } else {
    alertaRoja.innerHTML = "Gracias por compartir tu historia";
  }
});

// Validación de letras

function validarLetraCorrecta(input, letraCorrecta) {
  input.addEventListener("change", function () {
    input.style.backgroundColor =
      input.value.toLowerCase() === letraCorrecta.toLowerCase()
        ? "green"
        : "red";
  });
}

validarLetraCorrecta(document.getElementById("letraA"), "A");
validarLetraCorrecta(document.getElementById("letraG"), "G");
validarLetraCorrecta(document.getElementById("letraI"), "I");
validarLetraCorrecta(document.getElementById("letraM"), "M");
validarLetraCorrecta(document.getElementById("letraR"), "R");
validarLetraCorrecta(document.getElementById("letraO"), "O");
validarLetraCorrecta(document.getElementById("letraH"), "H");
