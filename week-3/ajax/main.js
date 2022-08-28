function updateDogImg() {
  $.get('https://dog.ceo/api/breeds/image/random', function (data) {
    $('#dog-img').attr('src', data.message);
  });
}

$('#randomBtn').on('click', updateDogImg);

$('#aboutBtn').on('click', function () {
  $.ajax({
    url: 'about.html',
    success: function (data) {
      $('#content').html(data);
    },
  });
});

$('#contactBtn').on('click', function () {
  $('#content').load('contact.html');
});
