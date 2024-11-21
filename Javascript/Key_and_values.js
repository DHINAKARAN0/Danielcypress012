var obj = [{
    name    : "Jai1",
    age     : 20,
    depart  : "ece"
    
},
{
    name    : "bharath2",
    age     : 22,
    depart  : "mech"
    
},
{
    name    : "Jai3",
    age     : 20,
    depart  : "Aero"
    
},
{
    name    : "Jai4",
    age     : 20,
    depart  : "Aero"
    
},
{
    name    : "Jai5",
    age     : 20,
    depart  : "Aero"
    
},
{
    name    : "Jai6",
    age     : 20,
    depart  : "Aero"
    
}];
//let key = Object.keys(obj);
console.log(obj);
//console.log(key); // output: ['name','age']
//console.log(obj); // output: {name: 'jai', age: 20}
obj[2].name= "suresh";
obj[5].name="daniel";

console.log("UPDATED_NAME_AND_AGE");//output: UPDATED_NAME_AND_ 
//obj.name = "Suresh";
//obj.age  = 30
console.log(obj);
//let values = Object.values(obj);
//console.log(values);
