const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    height: 1.69,
    mass: 78,

    calcBMI: function calcBMI() {
        this.markBMI = this.mass / this.height ** 2;
        return this.markBMI
    }
}

console.log(mark.calcBMI());


const john = {
    firstName: 'John',
    lastName: 'Smith',
    height: 1.95,
    mass: 92,

    calcBMI: function calcBMI() {
        this.johnBMI = this.mass / this.height ** 2;
        return this.johnBMI
    }
}

console.log(john.calcBMI());


if (john.johnBMI > mark.markBMI) {
    console.log(`${john.firstName} BMI (${john.johnBMI}) is higher than ${mark.firstName}'s (${mark.markBMI})!`)
} else {
    console.log(`${mark.firstName} BMI (${mark.markBMI}) is higher than ${john.firstName}'s (${john.johnBMI})!`)
}