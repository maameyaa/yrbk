// funtion to display all the photos in a grid

$(document).ready(function(){
  var folder = "img/schools/ashesi/classes/2018/";

  //console.log(folder);

  for(i=1; i<=138; i++ ){
    // console.log(i);

    $("#photos").append( "<div class='col-6 col-lg-3' style='margin-bottom: 30px;'><a onclick='getimage(i)' data-toggle='modal' data-target='#myModal'><img alt='100%x180' src='"+ folder + i + '.jpg'+ "' class='img-thumbnail' style='height: 100%; width: 100%; display: block;'></a></div>"  );
  }

  function getimage(x){

    console.log(x);
    var folder = "img/schools/ashesi/classes/2018/";

    $("#photos").append( "<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-dialog'><div class='modal-body'><div class='modal-content'><div class='modal-body'><h4>Text in a modal</h4><img alt='100%x180' src='"+ folder + x + '.jpg'+ "' class='img-thumbnail' style='height: 100%; width: 100%; display: block;'></div></div></div></div></div>");
  }

});


function groupimages(){

   // groups.innerHTML='';
     $("#groups").empty();

   var folder = "img/schools/ashesi/classes/2018/group/";

  // $("#photos").remove();

  var output="";

   for(i=1; i<=75; i++ ){

      output+="<div class='entry clearfix'><div class='entry-image'><a href=''><img class='image_fade'  src='"+ folder + i + '.jpg'+ "'></a></div></div>" ;


   }

    photos.innerHTML=output;

 }

 function singleimages(){
   // photos.innerHTML='';
  $("#photos").empty();
    var folder = "img/schools/ashesi/classes/2018/";



   var output="";

    for(i=1; i<=76; i++ ){


       output+="<div class='col-6 col-lg-3' style='margin-bottom: 30px;'><a onclick='getimage(i)' data-toggle='modal' data-target='#myModal'><img alt='100%x180' src='"+ folder + i + '.jpg'+ "' class='img-thumbnail' style='height: 100%; width: 100%; display: block;'></a></div>" ;


    }
     groups.innerHTML=output;

  }




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
