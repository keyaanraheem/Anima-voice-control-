function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0CGQgbQUM/model.json ', modelReady);

}

function modelReady(){
    classfier.classify(gotResults);

}
