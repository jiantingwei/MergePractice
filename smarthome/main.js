 //var request =require('request');
$(document).ready(function() {
    
    getLightSwitchStatus();
    //console.log("[swhhhh]"+ $("#swh").checked)
});

function getLightSwitchStatus(){
    var url= "https://sheetdb.io/api/v1/5b960cdbd16f8/search?";
    var data= $.getJSON(url,{
       light_name:"main"
   })
    
    
   // $.light_name.value="關"
    /*document.querySelector("https://sheetdb.io/api/v1/5b960cdbd16f8/light_name/main").dataset["'light_switch'"] = "'開'"*/
   
    /*$options = array(
  "http" => array(
    "method"  => "PUT",
    "header"  => "Content-type: application/x-www-form-urlencoded",
    "light_switch" => "開"
  )
        $result = json_decode(
  file_get_contents($i, false, stream_context_create($options)*/
    //開始動作 
   .done(
        function(msg){
            console.log(msg);
            $("h1").text("電燈狀態:"+msg[0].light_switch);
            if(msg[0].light_switch=="開"){
                document.getElementById("swh").checked=true
              $("img").attr("src","../assets/img/azuline02.png");
                
            }else{
                document.getElementById("swh").checked=false
                $("img").attr("src","../assets/img/goruli.png")
                
            }
        }
    ).fail(
        function(msg){
            console.log("fail!");
            console.log(msg)
        }
    )
    .always(
        function(msg){
            console.log("complete!")
            
        }
        
    )
}

function updateswitch() {
     var thisqs ={};    
    thisqs.light_name="main";
    if(document.getElementById("swh").checked == true){
        thisqs.light_switch="開";
        console.log(thisqs.light_switch);
    }else{thisqs.light_switch="關";
         console.log(thisqs.light_switch);
         }
   
    $.ajax({url:"https://sheetdb.io/api/v1/5b960cdbd16f8/light_name/main",type: "PUT",dataType: "json",data:{data:[thisqs]}
           //{light_switch: "關", light_name: "main"}*/
   }
   )
}