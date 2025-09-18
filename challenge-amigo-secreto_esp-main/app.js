// Array para almacenar los nombres
let amigos = [];

// Función para añadir un amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);

  // Actualizar la lista en pantalla
  actualizarLista();

  // Limpiar caja de texto
  input.value = "";
}

// Función para actualizar la lista de amigos
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // 1. Limpiar la lista antes de actualizar

  // 2. Recorrer el array amigos
  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li"); // 3. Crear un <li> para cada amigo
    li.textContent = amigos[i];            // 4. Poner el nombre dentro del <li>
    lista.appendChild(li);                 // 5. Agregarlo a la lista
  }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Primero agrega al menos un amigo antes de sortear.");
    return;
  }

  // Elegir un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

    