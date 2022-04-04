$(document).ready(function() {
    // run function on initial page load
    $('#generate').click(function() {
      generator();
      $('.item').removeClass('initial-hide');
    });
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function generator() {
  var arr = [];
  while(arr.length < 5){
      var r = Math.floor(Math.random() * 10) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
  var hText = ["Visibility of system status", "Match between system and the real world", "User control and freedom", "Consistency and standards", "Error prevention", "Recognition rather than recall", "Flexibility and efficiency of use", "Aesthetic and minimalist design", "Help users recognize, diagnose, and recover from errors", "Help and documentation"]
  $('#p1 .number').text(arr[0]);
  $('#p1 .text').text(hText[arr[0] - 1]);
  $('#p2 .number').text(arr[1]);
  $('#p2 .text').text(hText[arr[1] - 1]);
  $('#p3 .number').text(arr[2]);
  $('#p3 .text').text(hText[arr[2] - 1]);
  $('#p4 .number').text(arr[3]);
  $('#p4 .text').text(hText[arr[3] - 1]);
  $('#p5 .number').text(arr[4]);
  $('#p5 .text').text(hText[arr[4] - 1]);
}
