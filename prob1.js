let arr1=[10,20,0];
let arr2=[40,50];
let combined=[...arr1,...arr2];
console.log(combined)

let person={name:"Venu",age:25};
let extra ={ city:"Bengalur"};
let profile={...person,...extra};
console.log(profile)

let numbers=[10,20,30,40,50];
let [first,second,...remaining]=numbers;
console.log(first);
console.log(second);
console.log(remaining);

function sumAll(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0);
}
console.log(sumAll(1,2,3,4))

let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {address:{city,geo:{lat,lng}}}=user;
console.log(city);
console.log(lat);
console.log(lng);

const multiply =(a,b)=>a*b;
console.log(multiply(5,4));

let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};

console.log(emp.details?.profile?.role);