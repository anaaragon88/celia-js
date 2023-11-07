const nameUser = document.getElementById("userName");
const Saludar = document.getElementById("buttonSaludar");
const saludoPersona = document.getElementById("saludoPersonal");
const despedir = document.getElementById("despedida");

Saludar.addEventListener("click", function () {
  const nameUser = userName.value;
  if (nameUser === "") {
    saludoPersona.innerHTML = '<h1>' + '💔' + '</h1>' + 'Ok..no me quieres decir tu nombre...' + '<br>' + 'te doy la bienvenida igualmente,' + '<br>' + ' espero que te diviertas mucho' + '<br>' + '<h2>' + '¿Comenzamos?' + '</h2>';
    despedir.innerHTML = 'Persona sin nombre Gracias por llegar hasta aquí'
  } else {
    saludoPersona.innerHTML = '<h1>' + '👋🏾' + '</h1>' + `¡Encanta de conocerte, ${nameUser}!` + '<br>' + ' te doy la bienvenida a mi formulario,' + '<br>' + ' espero que te diviertas mucho' + '<h2>' + '¿Comenzamos?' + '</h2>';
    despedir.innerHTML = '<h1>' + '❤' + '</h1>' + `¡${nameUser} Gracias por llegar hasta aquí!`;
  }

});


var emailField = document.getElementById("emailField");
const Validar = document.getElementById("buttonValidar");

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

Validar.addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {
    alert('Enhorabuena tu email es correcto🙌');
  } else {
    alert('"' + emailField.value + '"' + ' es un email incorrecto💩');
  }
});

const edadUser = document.getElementById("edad");
const button = document.getElementById("button");
const respuesta = document.getElementById("response");

button.addEventListener("click", function () {
  const edadUser = edad.value;
  if (edadUser > 29) {
    respuesta.innerHTML = "Ambos sabemos que ya no eres joven, pero sigues molando... ❤";

  } else {
    respuesta.innerHTML = "pero bueno..¡Qué joven!, seguro que aún tienes dientes de leche...🦷";
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

const inputLetraA = document.getElementById("letraA");

inputLetraA.addEventListener("change", function () {
  const valorInputA = letraA.value;
  if (valorInputA == "A" || valorInputA == "a") {
    document.getElementById("letraA").style.backgroundColor = "green";
  } else {
    document.getElementById("letraA").style.backgroundColor = "red";
  }
});
const inputLetraG = document.getElementById("letraG");

inputLetraG.addEventListener("change", function () {
  const valorInputG = letraG.value;
  if (valorInputG == "G" || valorInputG == "g") {
    document.getElementById("letraG").style.backgroundColor = "green";
  } else {
    document.getElementById("letraG").style.backgroundColor = "red";
  }
});

const inputLetraI = document.getElementById("letraI");

inputLetraI.addEventListener("change", function () {
  const valorInputI = letraI.value;
  if (valorInputI == "I" || valorInputI == "i") {
    document.getElementById("letraI").style.backgroundColor = "green";
  } else {
    document.getElementById("letraI").style.backgroundColor = "red";
  }
});

const inputLetraM = document.getElementById("letraM");

inputLetraM.addEventListener("change", function () {
  const valorInputM = inputLetraM.value;
  if (valorInputM == "M" || valorInputM == "m") {
    document.getElementById("letraM").style.backgroundColor = "green";
  } else {
    document.getElementById("letraM").style.backgroundColor = "red";
  }
});

const inputLetraR = document.getElementById("letraR");

inputLetraR.addEventListener("change", function () {
  const valorInputR = inputLetraR.value;
  if (valorInputR == "R" || valorInputR == "r") {
    document.getElementById("letraR").style.backgroundColor = "green";
  } else {
    document.getElementById("letraR").style.backgroundColor = "red";
  }
});


const inputLetraO = document.getElementById("letraO");

inputLetraO.addEventListener("change", function () {
  const valorInputO = inputLetraO.value;
  if (valorInputO == "O" || valorInputO == "o") {
    document.getElementById("letraO").style.backgroundColor = "green";
  } else {
    document.getElementById("letraO").style.backgroundColor = "red";
  }
});

const inputLetraH = document.getElementById("letraH");

inputLetraH.addEventListener("change", function () {
  const valorInputH = inputLetraH.value;
  if (valorInputH == "H" || valorInputH == "h") {
    document.getElementById("letraH").style.backgroundColor = "green";
  } else {
    document.getElementById("letraH").style.backgroundColor = "red";
  }
});       