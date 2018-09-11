$(document).ready(function() {
    $("input").click(function()
    {
        //alert("hi");
    });
});
/*$(document).ready(function() {
    $("input").click(function()
    {
        $("h1").text("hello");
    });
});
$(document).ready(function() {
    $("input").click(function()
    {
        $("h1").text($("li:first").text());
    });
});
$(document).ready(function() {
    $("input").click(function()
    {
        $("h1").text($("li:last").eq(1).text());
    });
});
$(document).ready(function() {
    $("input").click(function()
    {
        $("h1").text($("li").eq(1).text());
    });
});*/
$(document).ready(function() {
    $("input").click(function()
    {
        var numberOfListItem =$("#choices li").length;
        var radomChildNumber =Math.floor(Math.random()*numberOfListItem);
       $("h1").text($("#choices li").eq(radomChildNumber).text());
    });
});