const cars = [
  {
    id: '1',
    brand: 'Toyota',
    model: 'Yaris',
    year: 2015,
    km: 192000,
  },
  {
    id: '2',
    brand: 'Toyota',
    model: 'Corola',
    year: 2016,
    km: 122000,
  },
  {
    id: '3',
    brand: 'Toyota',
    model: 'Rav4',
    year: 2017,
    km: 132000,
  },
];

// let dataToAppend = '';
// for (const car of cars) {
//   dataToAppend += `
//         <tr>
//             <td>${car.brand}</td>
//             <td>${car.model}</td>
//             <td>${car.year}</td>
//             <td>${car.km}</td>
//         </tr>
//     `;
// }
// $('#cars').append(dataToAppend);

const tbodyCars = $('#cars');
for (const car of cars) {
  const newTr = $(`
        <tr data-id="${car.id}">
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.km}</td>
        </tr>
    `);
  //   newTr.on('click', function () {
  //     console.log(car.id);
  //   });
  tbodyCars.append(newTr);
}

tbodyCars.on('click', 'tr', function () {
  console.log($(this).data().id);
  console.log('car clicked');
});
