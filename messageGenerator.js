//declaracion de variables para crear mensaje
const str_per = ['Pedro', 'Isabella', 'Juliana', 'Heriberto', 'Elhadji', 'Gloria', 'Charly Flow', 'Safira'];
const str_acc = ['conduce el Halcón Milenario','come helado', 'ronca', 'saluda', 'corre', 'cocina frijoles', 'no tiene Flow',
'no se come las acelgas'];
const str_como = ['como un campeón','como una destroyer', 'como un camionero', 'con una sonrisa en la cara','como un negro',
'como los angeles','por eso dice "Hola Princesa"', 'y eso no le preocupa'];

//funciones para crear el mensaje

//seleccionar un index random
const random_index = (str) => {
    return Math.floor(Math.random()*str.length);
}

//funcion que coge un elemento al azar de las str
const random_element = str => {
    let index = random_index(str);
    return str(index);
}
