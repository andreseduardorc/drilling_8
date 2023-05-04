alert("bienvenido a banca en linea");
const clientes = [
  { nombre: "Juan", identificador: "001", clave: "1234", saldo: 1000 },
  { nombre: "María", identificador: "002", clave: "5678", saldo: 5000 },
  { nombre: "Pedro", identificador: "003", clave: "9012", saldo: 20000 },
];
alert("ingrese sus datos");

const identificador = prompt("Ingrese su identificador:");
const clave = prompt("Ingrese su clave:");

const cliente = clientes.find(
  (c) => c.identificador === identificador && c.clave === clave
);
if (!cliente) {
  alert("Error: identificador o clave incorrectos.");
} else {
  alert(`Bienvenido, ${cliente.nombre}!`);
  // Mostrar menú y realizar acciones
}
let opcion;
while (opcion !== "4") {
  opcion = prompt(`Menu:
  1. Ver saldo
  2. Realizar depósito
  3. Realizar giro
  4. Salir
  Elija una opción:`);

  switch (opcion) {
    case "1":
      alert(`Su saldo es ${cliente.saldo}`);
      break;
    case "2":
      const montoDeposito = parseInt(prompt("Ingrese el monto a depositar:"));
      cliente.saldo += montoDeposito;
      alert(
        `Se ha depositado ${montoDeposito}. Su nuevo saldo es ${cliente.saldo}`
      );
      break;
    case "3":
      const montoGiro = parseInt(prompt("Ingrese el monto a girar:"));
      if (montoGiro > cliente.saldo) {
        alert("Error: saldo insuficiente.");
      } else {
        cliente.saldo -= montoGiro;
        alert(`Se ha girado ${montoGiro}. Su nuevo saldo es ${cliente.saldo}`);
      }
      break;
    case "4":
      alert("Gracias por usar nuestro cajero automático!");
      break;
    default:
      alert("Error: opción no válida.");
  }
}
