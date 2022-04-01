Webcam.set({
width:350, 
height:300,
image_format: 'jpg',
jpg_quality: 90
});
cam = document.getElementById("camera")
Webcam.attach(cam)
function capture() {
Webcam.snap(function(data_uri){
    console.log(data_uri)
document.getElementById("result").innerHTML="<img id='captured_image' src="+ data_uri +">"
})
}
console.log("ml5 version", ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WU66azS-n/model.json',modelloaded)
function modelloaded() {
    console.log("model has been loaded")
}
function results() {
img = document.getElementById("captured_image")
console.log(img)
classifier.classify(img, gotResult)

}
function gotResult(error,result) {
if (error) {
    console.log(error)
}
else {
    console.log(result)
    document.getElementById("object").innerHTML=result[0].label
    document.getElementById("accuracy").innerHTML=result[0].confidence * 100
}
}