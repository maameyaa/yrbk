// funtion to display all the photos in a grid

$(document).ready(function(){
  var folder = "img/schools/ashesi/classes/2018/"; 

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpg|png|gif)$/) ) {
                $("#photos").append( "<div class='col-6 col-lg-3'><a href='#'><img alt='100%x180' src='"+ folder + val +"' class='img-thumbnail' style='height: 100%; width: 100%; display: block;'></a></div>" );

            }
        });
    }
});
});


//funtion for pin/key modal
(function() {
var o = document.getElementById('modal-key');
o.getElementsByTagName('form')[0].onsubmit = function() {
    if (this.answer.value === 'yrbk2018') {
        o.style.display = "none";
    } else {
      $("#pin").css("animation","shake 0.5s");
    }
    return false;
};
})();
