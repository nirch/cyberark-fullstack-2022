const ENTER = 13;
const colors = Colors();
const renderer = Renderer();

renderer.renderColors(colors.getColors());

$('input').on('keypress', function (e) {
  if (e.which !== ENTER) {
    return;
  }
  const color = $(this).val();
  colors.addColor(color);
  renderer.renderColors(colors.getColors());
  $(this).val('');
  // $('#color-num').text($('#colors-list').children().length);
});
