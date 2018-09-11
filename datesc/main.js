/*$(document).ready(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
});*/
//testdatestatus
/*$(document).ready(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    var topicCount=topic.length
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>")
        $("#courseTable").append("<td>"+(x+1)+"</td>")
        $("#courseTable").append("<td>"+"預計日期"+"</td>")
        $("#courseTable").append("<td>"+topic[x]+"</td>")
        $("#courseTable").append("</tr>")
    }
});*/
//testdatestatus
/*var topicCount =topic.length;
$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    var topicCount=topic.length
    for(var x=0;x<topicCount;x++)
    {  
        $("#courseTable").append("<tr>")
        $("#courseTable").append("<td>"+(x+1)+"</td>")
        $("#courseTable").append("<td>"+startDate+"</td>")
        $("#courseTable").append("<td>"+topic[x]+"</td>")
        $("#courseTable").append("</tr>")
    }
});*/
//teststartdate
/*var topicCount =topic.length;
$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    var topicCount=topic.length
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>")
        $("#courseTable").append("<td>"+(x+1)+"</td>")
        $("#courseTable").append("<td>"+(startDate+7*x)+"</td>")
        $("#courseTable").append("<td>"+topic[x]+"</td>")
        $("#courseTable").append("</tr>")
    }
});*/

/*var topicCount =topic.length;
$(document).ready(function() {
    
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")
    var topicCount=topic.length
    
    var secondUnit =1000;
    var minuteUnit =secondUnit*60;
    var hourUnit= minuteUnit*60;
    var dayUnit= hourUnit*24;
     $("#courseTable").empty();
    for(var x=0;x<topicCount;x++)
    {
        $("#courseTable").append("<tr>")
        
        if(x%2==0){dwi(1);}else{dwi(0);}
        /*$("#courseTable").append("<td>"
                                 +(new Date((startDate.getTime()+x*7*dayUnit)).toLocaleDateString() )+"</td>")
        $("#courseTable").append("<td>"+topic[x]+"</td>")*/
       /* $("#courseTable").append("</tr>")
    }
    function dwi(i){
        var x1 = ['class="a1"',""];
        var x2 ="";
        var dayf=(new Date((startDate.getTime()+x*7*dayUnit)).toLocaleDateString());
        //var laststr= dayf.lastIndexOf("/");
        //var laststr2= dayf.substr(0,laststr);        
        if (i==0){x2=x1[0]}else{x2=x1[1]}
            $("#courseTable").append("<td "+x2+">"+(x+1)+"</td>")
        $("#courseTable").append("<td "+x2+">"
                                 +dayf+"</td>")
        $("#courseTable").append("<td "+x2+">"+topic[x]+"</td>")        
    }
    function datefromat(){
        var laststr= dayf.lastIndexOf("/");
        var laststr2= dayf.substr(0,laststr);
        
    }
    console.log(datelisten());
function datelisten(){
        var d = new Date();
        return document.getElementById('start').value = d.getFullYear()+"-"+"0"+(d.getMonth()+1)+"-"+d.getDate(); 
    };
});*/
var dataA=""
$(document).ready(function(){
    $("#courseTable").append("<tr>");
    $("#courseTable").append("<th>場次</th>");
    $("#courseTable").append("<th>時間</th>");
    $("#courseTable").append("<th>主題</th>");
    $("#courseTable").append("</tr>");
    
    $( "input[type=date]" ).change(function() {
        //alert( $( "input[type=date]" ).val() );
        //2018-09-03
       $("#button1").click(function(){
        
         var inputDate = $( "input[type=date]" ).val();
        
        dataA= $("#text1").val();
         //console.log(dataA=="");
        if(inputDate){
            if(dataA==""){}else{      
    
    topic.length =topic.length+1;
    topic[topic.length-1]=dataA;    
        console.log(topic);
                }
        var inputDate = $( "input[type=date]" ).val();
        var splitText = inputDate.split("-");
        console.log(splitText[1]);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
            
        }
       });
    });
     
});

function setTable(){
    
    $("#courseTable").empty();
    
    $("#courseTable").append("<tr>");
    $("#courseTable").append("<th>場次</th>");
    $("#courseTable").append("<th>時間</th>");
    $("#courseTable").append("<th>主題</th>");
    $("#courseTable").append("</tr>");
    
    var topicCount = topic.length;
    for(var x=0;x<topicCount;x++){
        if(x%2==0)
        {
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td class='even'>"+(x+1)+"</td>");
            $("#courseTable").append("<td class='even'>"+(new Date(startDate.getTime()+7*x*24*60*60*1000)).toLocaleDateString()+"</td>");
            $("#courseTable").append("<td class='even'>"+topic[x]+"</td>");
            $("#courseTable").append("</tr>"); 
        }else
        {
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append("<td>"+(new Date(startDate.getTime()+7*x*24*60*60*1000)).toLocaleDateString()+"</td>");
            $("#courseTable").append("<td>"+topic[x]+"</td>");
            $("#courseTable").append("</tr>");
        }
        
    }
   /* $(document).ready(function(){
    $("#button1").click(function(){
        var dataA=""
        
    dataA= $("#text1").val();
    topic.length =topic.length+1
    topic[topic.length-1]=dataA;    
        console.log(topic);
     var inputDate = $( "input[type=date]" ).val();
        if(inputDate){

        var inputDate = $( "input[type=date]" ).val();
        var splitText = inputDate.split("-");
        console.log(splitText[1]);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
            $("#text1").text("")
        }
    });    
    });*/
}
