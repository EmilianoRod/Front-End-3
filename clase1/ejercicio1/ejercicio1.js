const users = [{ "apodo": "Nepeta", "email": "nepetalover123@gmail.com", "mascotas": [{ "nombre": "Luna", "edad": 3, "color": "blanco y negro" }, { "nombre": "Simba", "edad": 1, "color": "naranja" }, { "nombre": "Mia", "edad": 5, "color": "gris" }] }
, { "apodo": "CatLady", "email": "catlady999@yahoo.com", "mascotas": [{ "nombre": "Tom", "edad": 2, "color": "gris y blanco" }, { "nombre": "Lucas", "edad": 4, "color": "negro" }] }
, { "apodo": "GatitoFeliz", "email": "gatitofeliz22@hotmail.com", "mascotas": [{ "nombre": "Cleo", "edad": 1, "color": "marrón" }, { "nombre": "Toby", "edad": 6, "color": "blanco" }, { "nombre": "Nina", "edad": 2, "color": "negro y blanco" }] }
, { "apodo": "ElGatoNegro", "email": "elgatonegro@outlook.com", "mascotas": [{ "nombre": "Oreo", "edad": 3, "color": "negro y blanco" }, { "nombre": "Milo", "edad": 7, "color": "naranja" }] }
, { "apodo": "GatitoTierno", "email": "gatitotierno5555@gmail.com", "mascotas": [{ "nombre": "Pelusa", "edad": 2, "color": "gris" }, { "nombre": "Kitty", "edad": 4, "color": "blanco y negro" }, { "nombre": "Loki", "edad": 1, "color": "marrón y blanco" }] }
, { "apodo": "CatQueen", "email": "catqueen8888@hotmail.com", "mascotas": [{ "nombre": "Fluffy", "edad": 5, "color": "blanco y gris" }, { "nombre": "Sasha", "edad": 2, "color": "marrón y blanco" }] }
, { "apodo": "Nepeta", "email": "nepetaalegre7@yahoo.com", "mascotas": [{ "nombre": "Punky", "edad": 3, "color": "naranja" }, { "nombre": "Zoe", "edad": 1, "color": "blanco" }, { "nombre": "Simón", "edad": 4, "color": "negro" }] }
, { "apodo": "GatoMimoso", "email": "gatomimoso55@gmail.com", "mascotas": [{ "nombre": "Leo", "edad": 2, "color": "blanco" }, { "nombre": "Coco", "edad": 3, "color": "negro y blanco" }] }
];

/*
Ejercicio 1
Muestra por consola:

El email del primer Usuario.

El apodo del tercer Usuario.

El color de la segunda mascota del tercer Usuario.
*/


console.log(users[0].email);
console.log(users[2].apodo);
console.log(users[2].mascotas[1].color);