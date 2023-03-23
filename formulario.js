var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e) {
  e.preventDefault();

  var n = formulario.elements["name"];
  var e = formulario.elements["age"];
  var na = formulario.elements["nationality"];

  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

var botonBorrar = document.getElementById("boton-borrar");

botonBorrar.onclick = function() {
  var lista = document.getElementById("lista-de-invitados");
  lista.innerHTML = "";
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var spanDescripcion = document.createElement("span");
    var inputValor = document.createElement("input");
    var espacio = document.createElement("br");
    spanDescripcion.textContent = descripcion + ": ";
    inputValor.value = valor;
    elementoLista.appendChild(spanDescripcion);
    elementoLista.appendChild(inputValor);
    elementoLista.appendChild(espacio);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}