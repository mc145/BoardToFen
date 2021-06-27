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
    for(let i = 0; i<110; i++){
        wbishop[i] = loadImage(`data/wbishop/augmented_bishop_${i}.png`);
        wking[i] = loadImage(`data/wking/augmented_king_${i}.png`);
        wknight[i] = loadImage(`data/wknight/augmented_knight_${i}.png`);
        wpawn[i] = loadImage(`data/wpawn/augmented_pawn_${i}.png`);
        wqueen[i] = loadImage(`data/wqueen/augmented_queen_${i}.png`);
        wrook[i] = loadImage(`data/wrook/augmented_rook_${i}.png`);

        bbishop[i] = loadImage(`data/bbishop/augmented_bbishop_${i}.png`);
        bking[i] = loadImage(`data/bking/augmented_bking_${i}.png`);
        bknight[i] = loadImage(`data/bknight/augmented_bknight_${i}.png`);
        bpawn[i] = loadImage(`data/bpawn/augmented_bpawn_${i}.png`);
        bqueen[i] = loadImage(`data/bqueen/augmented_bqueen_${i}.png`);
        brook[i] = loadImage(`data/brook/augmented_brook_${i}.png`);
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
 
    for(let i = 0; i<wbishop.length; i++){
        pieceClassifier.addData({ image: wbishop[i] }, { label: 'WBISHOP' }); 
        pieceClassifier.addData({ image: wking[i] }, { label: 'WKING' }); 
        pieceClassifier.addData({ image: wknight[i] }, { label: 'WKNIGHT' }); 
        pieceClassifier.addData({ image: wpawn[i] }, { label: 'WPAWN' }); 
        pieceClassifier.addData({ image: wqueen[i] }, { label: 'WQUEEN' }); 
        pieceClassifier.addData({ image: wrook[i] }, { label: 'WROOK' }); 

        pieceClassifier.addData({ image: bbishop[i] }, { label: 'BBISHOP' }); 
        pieceClassifier.addData({ image: bking[i] }, { label: 'BKING' }); 
        pieceClassifier.addData({ image: bknight[i] }, { label: 'BKNIGHT' }); 
        pieceClassifier.addData({ image: bpawn[i] }, { label: 'BPAWN' }); 
        pieceClassifier.addData({ image: bqueen[i] }, { label: 'BQUEEN' }); 
        pieceClassifier.addData({ image: brook[i] }, { label: 'BROOK' }); 


    }



    const trainingOptions = {
        epochs: 60,
        batchSize: 12
    }; 


    pieceClassifier.normalizeData(); 
    pieceClassifier.train(trainingOptions, trainingFinished); 
}


function trainingFinished(){
    console.log("TRAINING FINISHED!"); 
    pieceClassifier.save(); 
}


