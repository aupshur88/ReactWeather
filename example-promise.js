function addPromise(a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('At least one entry is not a number')
    }
  });
}

addPromise(7, 'a').then(function (result) {
  console.log('success', result);
}, function (err) {
  console.log('failure', err);
});
