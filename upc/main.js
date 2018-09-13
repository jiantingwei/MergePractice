var c=0

$(document).ready(function() {
    var wd=0
    var re=true
    
    $("#assh1").mouseenter(function(){
        wd  = $("#ass2").width();
        re=true
        console.log($("#ass2").width());
        var h= setInterval(function textsub(){
           if(c<wd && re==true){
               c++
               $("#assh1").text(c);
           }else
           { clearInterval(h);
             //console.log("clearInterval(aasd); ")
                re=false;
           }
           },1)
        
    
   }).mouseleave(function(){
         $("#assh1").text(1);
        re=false;
        var h= setInterval(function textsub(){
           if(c>1 && re==false){
               c--
               $("#assh1").text(c);
           }else
           { clearInterval(h);
             //console.log("clearInterval(aasd); ")
                re=true;
           }
           },1)
    })
   
   
});


