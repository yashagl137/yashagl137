function stopScroll(){
   var x=document.getElementById("top");
    if(x.style.overflow="auto"){
    x.style.overflow="hidden";
}
else if(x.style.overflow="hidden")
{
   x.style.overflow="auto";
}

}