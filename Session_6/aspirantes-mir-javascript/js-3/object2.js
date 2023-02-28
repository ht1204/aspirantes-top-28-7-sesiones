let persona = {
    nombre: "Hector Triana",
    edad: 30,
    ciudad: "Cartagena de Indias",
    profesion: "Full Stack Developer"
};

console.log(persona);

function presentacion(persona) {
    return `${persona.nombre} ${persona.edad} ${persona.ciudad} ${persona.profesion}`;
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = ["programar", "leer", "ver tutoriales y videos"];
console.log("\nHobbies:");
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}

