// Завдання 1, 2
function Car(brand, fuelTank, ownerFullName = "John Doe"){
    if (ownerFullName.trim().split(/\s+/).length == 2 ){
        this.ownerFullName = ownerFullName;
    } else {
        this.ownerFullName = "John Doe";
    }
    this.brand = brand;
    this.fuelTank = fuelTank;
}

var animal = new Car("Camaro", 68, "Nazar Pishchaniy");
console.log(animal);

function getFirstNamePart(){
    var arrayOfNames = animal.ownerFullName.trim().split(' ');
    return arrayOfNames[0];
}

function getSecondNamePart(){
    var arrayOfNames = animal.ownerFullName.trim().split(' ');
    return arrayOfNames[1];
}
console.log(getFirstNamePart());
console.log(getSecondNamePart());