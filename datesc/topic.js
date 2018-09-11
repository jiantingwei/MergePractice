var topic =[
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機生",
    "重複性"
];
var startDate = new Date()
//var startDate1= new Date(dateString);
//var startDate = new Date()
function setMonthAndDay(startMonth, startDay)
{   
    startDate.setMonth(startMonth-1,startDay);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

   
/*$(document).ready(function(){
    $("#button1").click(function(){
        
    var dateA= $("#start").val();
    var dateB = dateA.split("-");
    $('#show_date').text(dateA);
    setMonthAndDay(dateB[1],dateB[2])
    });
});*/
//setMonthAndDay(startMonth,startDay)
