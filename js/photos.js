// funtion to display all the photos in a grid

$(document).ready(function(){
  var folder = "img/schools/ashesi/classes/2018/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpg|png|gif)$/) ) {
                $("#photos").append( "<div class='col-6 col-lg-3'><a href='#'><img alt='100%x180' src='"+ folder + val +"' class='img-thumbnail' style='padding-bottom: 30px; height: 100%; width: 100%; display: block;'></a></div>" );

            }
        });
    }
});
});


//funtion for pin/key modal
(function() {
  document.getElementById('fix').style.overflow= "hidden";
  document.getElementById('blur').style.filter= "blur(5px)";
var o = document.getElementById('modal-key');
o.getElementsByTagName('form')[0].onsubmit = function() {
    if (this.answer.value === 'yrbk2018') {
        o.style.display = "none";
        document.getElementById('fix').style.overflow= "auto";
        document.getElementById('blur').style.filter= "blur(0px)";
    } else {
      $("#pin").css("animation","shake 0.5s");
    }
    return false;
};
})();


// Webflow.push(function() {
//   $('overlay'){
//     e.preventDefault();
// 	$('body').css('overflow', 'hidden');
//   });
//
//   $('.overlay').onsubmit = function() {
//     e.preventDefault();
// 	$('body').css('overflow', 'auto');
//   });
// });

// (function(){
//   var $body = $(window.document.body);
//   var a = document.getElementById('modal-key');
//   $body.css('overflow', 'hidden');
//   a.getElementsByTagName('form')[0].onsubmit = function(){
//     if (this.answer.value === null) {
//         $('body').css('overflow', 'hidden');
//     } else if (this.answer.value === 'yrbk2018'){
//       $body.css('overflow', 'hidden');
//     }
//     return false;
//   }
// });

// Webflow.push(function() {
//   $('overlay').click(function(e) {
//     e.preventDefault();
// 	$('body').css('overflow', 'hidden');
//   });
//
//   $('.menu-class-name').click(function(e) {
//     e.preventDefault();
// 	$('body').css('overflow', 'auto');
//   });
// });
