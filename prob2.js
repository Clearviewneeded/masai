let nums = [10, 3, 7, 20, 13, 2];
let squares=nums.map(num=>num*num);
console.log(squares)
let primes=nums.filter(num=>{
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if (num%i==0) return false
    }
    return true;
})
console.log(primes);
let sum=nums.reduce((acc,curr)=>acc+curr,0);
console.log(sum)
let sorted=nums.sort((a,b)=>b-a);
console.log(sorted)

function displayCar(){
    console.log("Carselected")
}
function  displayTruck(){
    console.log("Truckselected")

}
function displayBike(){
    console.log("Bike selected")
}
 function vehicleInfo(vehicleCategory, callbackFn)
{
    console.log(`(vehicleCategory:$(vehicleCategory)`);
    callbackFn();


}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
