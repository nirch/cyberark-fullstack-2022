function asyncPromise() {
  return new Promise((resolve, reject) => {
    if (new Date().getTime() % 2 === 0) {
      resolve(10, 30);
    } else {
      reject('blablabla');
    }
  });
}

asyncPromise()
  .then((data1, data2) => {
    console.log(data1, data2);
  })
  .catch(err => {
    console.error(err);
  });

function getNumberOfBreeds(callback) {
  const responsePromise = axios.get('https://dog.ceo/api/breeds/list/all');
  responsePromise.then(response => {
    callback(Object.keys(response.data.message).length);
  });
}

getNumberOfBreeds(result => {
  console.log(result);
});

// function getNumberOfBreeds() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get('https://dog.ceo/api/breeds/list/all')
//       .then(response => {
//         resolve(Object.keys(response.data.message).length);
//       })
//       .catch(err => {
//         //
//         reject(err);
//       });
//   });
// }

async function getNumberOfBreeds() {
  const response = await axios.get('https://dog.ceo/api/breeds/list/all');
  // if (...) {
  //   throw new Error({})  // this is like reject
  // }
  return Object.keys(response.data.message).length;
}

getNumberOfBreeds().then(numOfBreeds => {
  console.log(numOfBreeds);
});

(async function () {
  const numOfBreeds = await getNumberOfBreeds();
  console.log(numOfBreeds);
})();

// const numOfBreeds = await getNumberOfBreeds();
// getNumberOfBreeds().then(numOfBreeds => {
//   console.log(numOfBreeds);
// });
