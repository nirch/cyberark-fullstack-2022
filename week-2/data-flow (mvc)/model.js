const Colors = function () {
  const colors = ['Blue', 'Gold'];

  function addColor(color) {
    colors.push(color);
  }

  function getColors() {
    // return colors.slice(); // ES3 Style - shallow copy
    return [...colors]; // ES6 Style - shallow copy
    // return JSON.parse(JSON.stringify(colors));  // Deep Copy (with JSON limitation)
    // return colors;
  }

  return {
    addColor,
    getColors,
  };
};
