"use strict";
class Vehicle {
}
function kmToMiles(vehicle) {
    vehicle.run = vehicle.run / 0.62;
    return vehicle;
}
class LCV extends Vehicle {
}
const vehicle = kmToMiles(new Vehicle());
const lcv1 = kmToMiles(new LCV());
const lcv2 = kmToMiles({ run: 1 });
const lcv3 = kmToMiles({ test: 1 });
function logId(id, additionalData) {
    console.log(id);
    console.log(additionalData);
    return { id, data: additionalData };
}
