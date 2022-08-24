const Renderer = function () {
  function renderColors(colors) {
    const colorList = $('#colors-list');
    colorList.empty();
    for (const color of colors) {
      const colorLi = $(`<li>${color}</li>`);
      colorList.append(colorLi);
    }
    $('#color-num').text(colors.length);
  }

  return {
    renderColors,
  };
};
