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
    for(let i = 0; i<60; i++){
        wbishop[i] = loadImage(`data/wbishop/augmented_wbishop_${i}.png`);
        wking[i] = loadImage(`data/wking/augmented_wking_${i}.png`);
        wknight[i] = loadImage(`data/wknight/augmented_wknight_${i}.png`);
        wpawn[i] = loadImage(`data/wpawn/augmented_wpawn_${i}.png`);
        wqueen[i] = loadImage(`data/wqueen/augmented_wqueen_${i}.png`);
        wrook[i] = loadImage(`data/wrook/augmented_wrook_${i}.png`);

        bbishop[i] = loadImage(`data/bbishop/augmented_bbishop_${i}.png`);
        bking[i] = loadImage(`data/bking/augmented_bking_${i}.png`);
        bknight[i] = loadImage(`data/bknight/augmented_bknight_${i}.png`);
        bpawn[i] = loadImage(`data/bpawn/augmented_bpawn_${i}.png`);
        bqueen[i] = loadImage(`data/bqueen/augmented_bqueen_${i}.png`);
        brook[i] = loadImage(`data/brook/augmented_brook_${i}.png`);
    }

    for(let i = 0; i<43; i++){
        blank[i] = loadImage(`data/blank/blank${i+1}.png`); 
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
 
    for(let i = 0; i<wbishop.length; i++){
        pieceClassifier.addData({ image: wbishop[i] }, { label: 'white bishop' }); 
        pieceClassifier.addData({ image: wking[i] }, { label: 'white king' }); 
        pieceClassifier.addData({ image: wknight[i] }, { label: 'white knight' }); 
        pieceClassifier.addData({ image: wpawn[i] }, { label: 'white pawn' }); 
        pieceClassifier.addData({ image: wqueen[i] }, { label: 'white queen' }); 
        pieceClassifier.addData({ image: wrook[i] }, { label: 'white rook' }); 

        pieceClassifier.addData({ image: bbishop[i] }, { label: 'black bishop' }); 
        pieceClassifier.addData({ image: bking[i] }, { label: 'black king' }); 
        pieceClassifier.addData({ image: bknight[i] }, { label: 'black knight' }); 
        pieceClassifier.addData({ image: bpawn[i] }, { label: 'black pawn' }); 
        pieceClassifier.addData({ image: bqueen[i] }, { label: 'black queen' }); 
        pieceClassifier.addData({ image: brook[i] }, { label: 'black rook' }); 


    }

    for(let i = 0; i<blank.length; i++){
        pieceClassifier.addData({ image: blank[i] }, { label: 'BLANK' }); 

    }

    const trainingOptions = {
        epochs: 35,
        batchSize: 12
    }; 


    pieceClassifier.normalizeData(); 
    pieceClassifier.train(trainingOptions, trainingFinished); 
}


function trainingFinished(){
    console.log("TRAINING FINISHED!"); 
    pieceClassifier.save(); 
}


