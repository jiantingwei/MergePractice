var mapArray,ctx,currentImgMainX,currentImgMainY 
var mapArrayAll = [];
var mapchangelog=0;
$(document).ready(function() {
    
    mapArray =[0,1,1,0,0,0,3,1,2]
    mapArrayAll[0]=[0,1,1,0,0,0,3,1,2];
    mapArrayAll[1]=[4,0,1,3,0,2,3,1,1];
    mapchangelog=0;
    ctx=$("#myCanvas")[0].getContext("2d");
    imgMain = new Image();
    imgMain.src="rpggame/images/spriteSheet.png";
    currentImgMainX =0;
    currentImgMainY=0;
    imgMountain=new Image();
    imgMountain.src= "rpggame/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src ="rpggame/images/Enemy.png";
    mainroleimg()
});
$(document).keydown(function(even){
    var targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    console.log (even.which);
    even.preventDefault();
    switch(even.which)
    {   
        case 37: case 65://left
            targetImgMainX=currentImgMainX-200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=175;
            break;
        case 38:case 87://up
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY-200;
            cutImagePositionX=355;
            break;
        case 39:case 68://right 
            targetImgMainX=currentImgMainX+200;
            targetImgMainY=currentImgMainY;
            cutImagePositionX=540;
            break;
        case 40: case 83://down
            targetImgMainX=currentImgMainX;
            targetImgMainY=currentImgMainY+200;
            cutImagePositionX=0;
            break;
        default:
            return;
    }
    if(targetImgMainX<=400 && targetImgMainX>=0 && targetImgMainY<=400 && targetImgMainY >=0)
    {
        targetBlock=targetImgMainX/200+targetImgMainY/200*3
    }
    else
    {
        targetBlock=-1;
    }
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
    if(targetBlock==-1 || mapArray[targetBlock]==1 || mapArray[targetBlock]==3)
    {
        
    }
    else
    {
        $("#talBox").text("");
        currentImgMainX=targetImgMainX;
        currentImgMainY=targetImgMainY;
        
    }
        drawrole(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    console.log($("#talBox").text());
    if ($("#talBox").text()=="抵達終點")
    {  /* $("#talBox").text("")
       checkreset (); */
    }
    else
    {
        switch(mapArray[targetBlock])
    {   
        case undefined://wall
            $("#talBox").text("邊界");
            break;
        case 1:
            $("#talBox").text("有山");
            break;
        case 2:
            
            $("#talBox").text("切換位置");
            setTimeout(function(){checkreset ()},100);      
            break;
        case 3:
            $("#talBox").text("！");
            break;
        case 4: 
            $("#talBox").text("切換位置");
            mapchangelog--;
            setTimeout(function(){checkreset ()},100);      
            break;
    }
    }
    
    function checkreset (){
        console.log(mapArray.length)
        var maparraylen =mapArray.length
        if(mapchangelog< mapArrayAll.length-1 &&　!(mapArray[targetBlock]==4)){
           mapchangelog++; 
        }
         console.log("mapchangelog= "+mapchangelog)
        for (var  mapch=0;mapch<maparraylen;mapch++){mapArray[mapch]=mapArrayAll[mapchangelog][mapch];
                                                    console.log("mapArrayAll"+mapch+"="+mapArrayAll[mapchangelog][mapch])};
        ctx.clearRect(0,0,600,600)
                currentImgMainX=0;
                currentImgMainY=0; /*drawrole(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200)*/
        //mainroleimg();
        mainroleimg2();
     } 
    
});
function drawrole(imgrole,cutimgpos,posh,posw,h,crimgx,crimgy,i,j)
    {
        ctx.drawImage(imgrole,cutimgpos,posh,posw,h,crimgx,crimgy,i,j); 
    }
/*function imgsrc(number,position1)
{   
    imgsh1[i]=new Image();
    imgsh1[number].src = position1;
              
}*/
function mainroleimg()
{   
    imgMain.onload=function(){
       
       drawrole(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200)
    }
    
    imgMountain.onload=function(){
        imgEnemy.onload=function(){
            for (var x in mapArray)
            {
                if(mapArray[x]==1)
                {
                    drawrole(imgMountain,32,190,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                    
                }
                else if(mapArray[x]==3)
                {
                   //ctx.drawImage(imgMountain,222,32,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                drawrole(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        };};
}
function mainroleimg2()
{
    drawrole(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200)
    //console.log (for (var x in mapArray){})
    for (var x in mapArray)
            {
                if(mapArray[x]==1)
                {
                    drawrole(imgMountain,32,190,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                    
                }
                else if(mapArray[x]==3)
                {
                   //ctx.drawImage(imgMountain,222,32,32,32,x%3*200,Math.floor(x/3)*200,200,200);
                drawrole(imgEnemy,7,40,104,135,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
}