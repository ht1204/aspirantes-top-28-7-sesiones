const person = {
    name: "Héctor",
    lastname: "Triana",
    greet: function() {
        console.log("Hello, my name is", this.name ? this.name : 'John Doe');
    }
}

// console.log(person['name']);
// console.log(person['lastname']);

// console.log();

// console.log(person.name);
// console.log(person.lastname);

// console.log();

// person.greet();
// console.log(person['greet']);
// person['greet']();

// console.log(Object.keys(person));
// console.log();
// console.log(Object.values(person));
// console.log();
// console.log(Object.entries(person));

// const phoneObj = {
//   phone: '+573205441583',
//   name : "pedro",
// };

// const personWithPhone = Object.assign({ key: "value" }, person, phoneObj);
// console.log(personWithPhone);

// console.log(Boolean(person.name));
// console.log(person.hasOwnProperty('name'));

// person.id = 1;
// console.log(person);

// delete person.name;
// person.greet();
// delete person['greet'];
// Reflect.deleteProperty(person, 'lastname');
// console.log(person);

// Object.freeze(person);
// delete person.name;
// Reflect.deleteProperty(person, 'name');
// person.name = "Pedro";
// console.log(person);

