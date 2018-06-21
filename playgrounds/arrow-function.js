// statement syntax
// var square = (x) => {
//   var result = x * x;
//   return result;
// };

// expression syntax
//var square = (x) => x*x;

// expression syntax
//var square = x => x*x;
//console.log(square(9));

//********************************

// methods on objects
var user = {
  name: 'Piero',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
