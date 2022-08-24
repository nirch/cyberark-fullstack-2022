$(document).ready(function () {
  $('#btn-hide').on('click', () => {
    $('.my-div').hide(1000);
  });
  $('#btn-show').on('click', function () {
    $('.my-div').show(1000);
  });
  $('#btn-toggle').on('click', function () {
    $('.my-div').toggle(1000);
  });

  //   $('.hide-p').on('click', function () {
  //     $(this).remove();
  //   });

  $('span.delete').on('click', event => {
    $(this).closest('.item').remove();
    $(event.currentTarget).closest('.item').remove();
  });

  $('div.target-example').on('click', function (event) {
    console.log($(this)); // div
    console.log(event.target); // span
    console.log(event.currentTarget); // div
  });

  const h1Element = document.getElementById('my-h1');
  const h1ElementjQuery = $('#my-h1');

  h1Element !== h1ElementjQuery;
});
