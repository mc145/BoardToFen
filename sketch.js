let pieceClassifier; 
let numberClassified = 0;
//let resultText; 


const modelNumber = 9; 

let boardPhotos = []; 
function preload(){
    for(let i = 0; i<64; i++){
        boardPhotos[i] = loadImage(`splittingImage/finalImages/${i+1}_square.png`);
    } 
}

function setup(){
    createCanvas(400,400);



    let options = {
        inputs: [64,64,4],
        task: 'imageClassification',
        debug: true
    }; 

    pieceClassifier = ml5.neuralNetwork(options); 
    const modelDetails = {
        model: `model1.0.${modelNumber}/model.json`,
        metadata: `model1.0.${modelNumber}/model_meta.json`,
        weights: `model1.0.${modelNumber}/model.weights.bin`
    }; 
    pieceClassifier.load(modelDetails, modelLoaded); 
    //resultText = createDiv('loading model'); 
}


function modelLoaded(){
    console.log("MODEL HAS BEEN LOADED!"); 
    classifyImage(); 
}



function classifyImage(){

pieceClassifier.classify({ image: boardPhotos[numberClassified] }, gotResults); 
numberClassified++; 
}



function gotResults(err, result){
    if(err){
        console.log(err);
        return; 
    }
    if(result[0].confidence < 0.989 && (result[0].label == 'white queen' || result[0].label == 'white king')){
        console.log("BLANK", `${result[0].confidence * 100}%`); 
        classifyImage(); 
        return; 
    }
    console.log(result[0].label, `${result[0].confidence*100}%`); 
    classifyImage(); 
    //resultText.html(`${result[0].label} ${result[0].confidence * 100}%`); 
   
}




function draw(){
}
