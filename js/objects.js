/* Dıffrent ways of cretaing objects in Javascript
*
*
** let obj = {}--empty object
*/
//1st way Function factories
function createPerson(firstName, lastName, age, salary) {
  let promotion = 10;
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    address: {
      street: 'King William',
      city: 'Adelaide',
      postCode: 34820
    },
    getSalary: function () {
      return salary * promotion;
    }
  };
}
//second way of creating object is the Constructors-Use New keyword
function Person(firstName, lastName, age, baseSalary,Address) {
  let salary = baseSalary;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  if (Address == undefined)
  {
  this.address = {
    street: 'King William',
    city: 'Adelaide',
    postCode: 34820
   };
  }
   this.getSalary = function () {
    return salary;
  }
  this.setSalary = function (newSalary) {
    salary = newSalary;
  }
  
};
//Display the object values
function displayObject(Obj) {
  for (key in Obj) {
    console.log(Obj[key]);
  }
}
/* TESTZONE  */
//first way of creating
let oPerson = createPerson('solen', 'dogan', 40, 1000);
//second way of creating use of new keyword
let oPerson2 = new Person('solen', 'dogan', 40, 1000);

let oPerson3 = new Person(
  { firstName:'new',
    lastName :'test',
    age:12,
    baseSalary:100,
/*    
    Address : 
      { 
        street: 'here',
        city: 'Istanbul',
        postCode: 1111
     }
     */
    }
  );

displayObject(oPerson);
//console.log('The person object is',oPerson.)
