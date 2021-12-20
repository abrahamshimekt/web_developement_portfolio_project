var index=0;
show_image(index);
function show_image(i){
    index +=i;
    var images=document.getElementsByClassName("coll");
    var dots = document.getElementsByClassName("vdot");
    for(i=0;i<images.length;i++){
        images[i].style.display ="none";
    }
    for (i=0;i<dots.length;i++){
        dots[i].className=dots[i].className.replace("active","");

    }
    if(index > images.length -1){
        index=0;
    }
    if(index <0){
        index=images.length -1;

    }
   images[index].style.display="block";
   dots[index].className +="active";
}
var index_vid=0;
show_video(index_vid);
function show_video(i){
    index_vid +=i;
    var videos=document.getElementsByClassName("video");
    var vdots = document.getElementsByClassName("vdot");
    for(i=0;i<videos.length;i++){
        videos[i].style.display ="none";
    }
    for (i=0;i<vdots.length;i++){
        vdots[i].className=vdots[i].className.replace("active","");

    }
    if(index_vid > videos.length - 1){
        index_vid=0;
    }
    if(index_vid <0){
        index_vid=videos.length -1;

    }
   videos[index_vid].style.display="block";
  vdots[index_vid].className +="active";
}