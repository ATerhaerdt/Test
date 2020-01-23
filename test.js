var btn = $("#transition");

btn.click(function(){
    console.log("Click");
    $("#bar1").animate({height:"100%"},2000).delay(100).animate({height:0},2000);
    $("#bar2").delay(200).animate({height:"100%"},2000).delay(100).animate({height:0},2000);
    $("#bar3").delay(400).animate({height:"100%"},2000).delay(100).animate({height:0},2000);
    $("#bar4").delay(600).animate({height:"100%"},2000).delay(100).animate({height:0},2000);
});