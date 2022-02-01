Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality: 90
})
webcam=document.getElementById("camera");
Webcam.attach('#camera');
function captureImage(){
    Webcam.snap(function(data_uri){
    document.getElementById("c_image").innerHTML='<img id="image" src="'+data_uri+'">';
});
}
console.log("ml5:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/LsRx0bHAe/model.json',modelLoaded());
function identify(){
    
}