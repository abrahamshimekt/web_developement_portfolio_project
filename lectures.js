var index = 0;
show_image(index);
function show_image(i) {
  index += i;
  var images = document.getElementsByClassName("coll");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  dots[index].className += "active";
}

var index_vid = 0;
show_video(index_vid);
function show_video(j) {
  index_vid += j;
  var videos = document.getElementsByClassName("video");
  var vdots = document.getElementsByClassName("vdot");
  for (j = 0; j < videos.length; j++) {
    videos[j].style.display = "none";
  }
  for (j = 0; j< vdots.length; j++) {
    vdots[j].className = vdots[j].className.replace("active", "");
  }
  if (index_vid > videos.length - 1) {
    index_vid = 0;
  }
  if (index_vid < 0) {
    index_vid = videos.length - 1;
  }
  videos[index_vid].style.display = "block";
  vdots[index_vid].className += "active";
}
