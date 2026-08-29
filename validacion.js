function askInformation() {
    for (let tries = 0; tries < 3;) {
        const USER = "Admin123";
        const PASSWORD = 12345;
        let userInput = prompt("Ingrese nombre de usuario:: ");
        let userPassword = parseFloat(prompt("Ingrese contraseña: "));

        if (userInput != USER || userPassword != PASSWORD) {
            tries++
            console.log("Incorrecto, intente de nuevo");
            console.log("Intentos actuales: " + tries + " de 3");
            if (tries == 3) {
                console.log("Intentos máximos alcanzados, intente más tarde");
                break;
            }
        }
        else {
            console.log("Bienvenido/a, " + USER);
            break;
        }
    }
}
console.log(askInformation());