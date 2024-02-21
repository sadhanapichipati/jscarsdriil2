// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. 
// 
// Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

function problem1(inventory){
    const car33 = inventory.filter(car => car.id == "33");
    console.log(car33);
    return `car 33 is a ${car33[0].car_year} ${car33[0].car_make} ${car33[0].car_model}`;

}

module.exports = problem1
