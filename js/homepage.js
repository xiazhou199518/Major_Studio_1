//window width
var winWidth = $( window ).width();
$(".carousel-inner").css("font-size", winWidth/25.6);

function dropControl(){
    if(winWidth < 768){
        document.getElementById("dropdown_menu").style.position = "relative";
    } else{
        document.getElementById("dropdown_menu").style.position = "absolute";
    }

    if(document.getElementById("dropdown_menu").style.height == "82px"){
        document.getElementById("dropdown_menu").style.height = "0px";
    } else{
        document.getElementById("dropdown_menu").style.height = "82px";
    }
}

$(document).ready(function(){
  //resize font size when resolution change
  $(window).resize(function(){
    winWidth = $( window ).width();
    $(".carousel-inner").css("font-size", winWidth/25.6);
  })

    $("#nav_btn1").hover(
      function(){
        $('.carousel').carousel(0);
        $('.carousel').carousel('pause');
      }, 
      function(){
        $('.carousel').carousel('cycle');
      }
    )

    $("#nav_btn2").hover(
        function(){
            $('.carousel').carousel(1);
            $('.carousel').carousel('pause');
        }, 
        function(){
            $('.carousel').carousel('cycle');
        }
    )

    $("#nav_btn3").hover(
        function(){
            $('.carousel').carousel(2);
            $('.carousel').carousel('pause');
        }, 
        function(){
            $('.carousel').carousel('cycle');
        }
    )

    $("#nav_btn4").hover(
        function(){
            $('.carousel').carousel(3);
            $('.carousel').carousel('pause');
        }, 
        function(){
            $('.carousel').carousel('cycle');
        }
    )

    $("#nav_btn5").hover(
        function(){
            $('.carousel').carousel(4);
            $('.carousel').carousel('pause');
        }, 
        function(){
            $('.carousel').carousel('cycle');
        }
    )
});