let wbishop = []; 
let wking = []; 
let wknight = []; 
let wpawn = []; 
let wqueen = []; 
let wrook = []; 

let bbishop = []; 
let bking = []; 
let bknight = []; 
let bpawn = []; 
let bqueen = []; 
let brook = []; 


let blank = []; 
function preload(){
    for(let i = 0; i<19; i++){
        wbishop[i] = loadImage(`data/wbishop/${i+1}compressedwbishop.png`);
    } 
    for(let i = 0; i<16; i++){
        wking[i] = loadImage(`data/wking/${i+1}compressedwking.png`);
    } 
    for(let i = 0; i<20; i++){
        wknight[i] = loadImage(`data/wknight/${i+1}compressedwknight.png`);
    }
    for(let i = 0; i<21; i++){
        wpawn[i] = loadImage(`data/wpawn/${i+1}compressedwpawn.png`);
    } 
    for(let i = 0; i<19; i++){
        wqueen[i] = loadImage(`data/wqueen/${i+1}compressedwqueen.png`);
    } 
    for(let i = 0; i<22; i++){
        wrook[i] = loadImage(`data/wrook/${i+1}compressedwrook.png`);
    } 
    for(let i = 0; i<19; i++){
        bbishop[i] = loadImage(`data/bbishop/${i+1}compressedbbishop.png`);
    } 
    for(let i = 0; i<15; i++){
        bking[i] = loadImage(`data/bking/${i+1}compressedbking.png`);
    } 
    for(let i = 0; i<17; i++){
        bknight[i] = loadImage(`data/bknight/${i+1}compressedbknight.png`);
    } 
    for(let i = 0; i<17; i++){
        bpawn[i] = loadImage(`data/bpawn/${i+1}compressedbpawn.png`);
    } 
    for(let i = 0; i<19; i++){
        bqueen[i] = loadImage(`data/bqueen/${i+1}compressedbqueen.png`); 
    } 
    for(let i = 0; i<19; i++){
        brook[i] = loadImage(`data/brook/${i+1}compressedbrook.png`);
    }

} 

let pieceClassifier; 

function setup(){
    createCanvas(400,400); 

    let options = {
        inputs: [64,64,4],
        task: 'imageClassification',
        debug: true
    }; 

    pieceClassifier = ml5.neuralNetwork(options); 

    console.log(wbishop.length); 
 
    for(let i = 0; i<19; i++){
        pieceClassifier.addData({ image: wbishop[i] }, { label: 'WBISHOP' }); 
    } 
    for(let i = 0; i<16; i++){
        pieceClassifier.addData({ image: wking[i] }, { label: 'WKING' }); 
    } 
    for(let i = 0; i<20; i++){
        pieceClassifier.addData({ image: wknight[i] }, { label: 'WKNIGHT' }); 
    } 
    for(let i = 0; i<21; i++){
        pieceClassifier.addData({ image: wpawn[i] }, { label: 'WPAWN' }); 
    } 
    for(let i = 0; i<19; i++){
        pieceClassifier.addData({ image: wqueen[i] }, { label: 'WQUEEN' }); 
    } 
    for(let i = 0; i<22; i++){
        pieceClassifier.addData({ image: wrook[i] }, { label: 'WROOK' }); 
    } 
    for(let i = 0; i<19; i++){       
        pieceClassifier.addData({ image: bbishop[i] }, { label: 'BBISHOP' });
    } 
    for(let i = 0; i<15; i++){ 
        pieceClassifier.addData({ image: bking[i] }, { label: 'BKING' }); 
    } 
    for(let i = 0; i<17; i++){
        pieceClassifier.addData({ image: bknight[i] }, { label: 'BKNIGHT' }); 
    } 
    for(let i = 0; i<17; i++){
        pieceClassifier.addData({ image: bpawn[i] }, { label: 'BPAWN' }); 
    } 
    for(let i = 0; i<19; i++){
        pieceClassifier.addData({ image: bqueen[i] }, { label: 'BQUEEN' }); 
    } 
    for(let i = 0; i<19; i++){
        pieceClassifier.addData({ image: brook[i] }, { label: 'BROOK' }); 
    } 


    



    const trainingOptions = {
        epochs: 40,
        batchSize: 12
    }; 


    pieceClassifier.normalizeData(); 
    pieceClassifier.train(trainingOptions, trainingFinished); 
}


function trainingFinished(){
    console.log("TRAINING FINISHED!"); 
    pieceClassifier.save(); 
}


