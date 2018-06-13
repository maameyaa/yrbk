$(document).ready(function(){
  var folder = "classPictures/2018/";

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
