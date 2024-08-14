function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
console.log(z);
z();

// const resolveProm = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("This is a promise resolved");
//   }, 1000);
// });

// resolveProm
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
