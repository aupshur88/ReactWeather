// var names = ['Andre', 'Shaima', 'Karthick'];
//
// // names.forEach(function (name) {
// //   console.log('forEach', name);
// // });
// //
// // names.forEach((name) => {
// //   console.log('arrowFunc', name);
// // });
// //
// // names.forEach((name) => console.log(name));
// //
// // var returnMe = (name) => name + '!';
// // console.log(returnMe('Andre'));
//
// var person = {
//   name: 'Andre',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
// person.greet();

function add(a,b) {
  return a + b;
}

var addStatement = (a,b) => {
  return a + b;
}

var addExpression = (a,b) => a + b;

console.log(addStatement(4,8));
console.log(addExpression(2,3));

console.log(add(1,3));
console.log(add(5,8));
