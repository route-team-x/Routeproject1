
$("#options i").click(function(){
    
    $(".color-options").toggle();
})
var colors = ["orange","tan","gray","#09c","teal"]
var lis = $("#options ul li");
for(var i=0;i<lis.length;i++)
    {
$("#options ul li").eq(i).css("backgroundColor",colors[i])
    }
if(localStorage.getItem("clientColor") == null)
    {
$("p,i,h3,h2,h1").css("color","orange")        
    }
else
    {
$("p,i,h3,h2,h1").css("color",localStorage.getItem("clientColor"))      
    }
$("#options ul li").click(function(){
   // $(this).css("backgroundColor","black") 
   var color = $(this).css("backgroundColor") 
   $("p,i,h3,h2,h1").css("color",color)
    
localStorage.setItem("clientColor",color);
})
