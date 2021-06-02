const upload=()=>{
  var fileInput = document.getElementById("upload");
  // alert('Selected file: ' + fileInput.files.item(0).name);
  var str=fileInput.files.item(0).name;
  var n=str.length;
  var files = fileInput.files;
  var fileURL = URL.createObjectURL(files[0]);
  document.getElementById("video").src = fileURL;
  if(str[n-3]=='m' && str[n-2]=='k' && str[n-1]=='v'){
    popupmsg("Attention!!","It is a .mkv file there may be a issue playing this file,like no audio or no video. We apologize for that.");
  }
  else if(str[n-3]=='m' && str[n-2]=='p' && str[n-1]=='3'){
    popupmsg("Audio Loaded!!","Please press the PLAY button to play the music and enjoy.");
  }
  else if(str[n-3]=='m' && str[n-2]=='p' && str[n-1]=='4'){
    popupmsg("Video Loaded!!","Please press the PLAY button to play the video and enjoy.");
  }
  else{
    popupmsg("Media Loaded!!","Please press the PLAY button to play the media and enjoy.");
  }
}
const start=()=>{
  document.getElementById("video").play();    
}
const invisible=()=>{
  document.getElementById("popup1").style.display = "none";
}

const popupmsg=(a,b)=>{
  document.getElementById("head").innerHTML=a;
  document.getElementById("content").innerHTML=b;
  document.getElementById("popup1").style.display = "block";
}

function failed(e) {
  switch (e.target.error.code) {
    case e.target.error.MEDIA_ERR_ABORTED:
      popupmsg("Error!!","You aborted the video playback.");
      break;
    case e.target.error.MEDIA_ERR_NETWORK:
      popupmsg("Error!!","A network error caused the video download to fail part-way.");
      break;
    case e.target.error.MEDIA_ERR_DECODE:
      popupmsg("Error!!","The video playback was aborted due to a corruption problem or because the video used features your browser did not support.");
      break;
    case e.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
      popupmsg("Error!!","The video could not be loaded, either because the server or network failed or because the format is not supported.");
      break;
    default:
      popupmsg("Error!!","Unknown Error Occured.");
      break;
  }
}
