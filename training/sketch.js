let bishop = []; 
let king = []; 
let knight = []; 
let pawn = []; 
let queen = []; 
let rook = []; 


function preload(){
    for(let i = 0; i<24; i++){
        bishop[i] = loadImage(`data/bishop/${i+1}compressedbishop.png`);
        king[i] = loadImage(`data/king/${i+1}compressedking.png`);
        knight[i] = loadImage(`data/knight/${i+1}compressedknight.png`);
        pawn[i] = loadImage(`data/pawn/${i+1}compressedpawn.png`);
        queen[i] = loadImage(`data/queen/${i+1}compressedqueen.png`);
        rook[i] = loadImage(`data/rook/${i+1}compressedrook.png`);
    }
    pawn[24] = loadImage(`data/pawn/25compressedpawn.png`); 
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
 
    for(let i = 0; i<bishop.length; i++){
        pieceClassifier.addData({ image: bishop[i] }, { label: 'bishop' }); 
        pieceClassifier.addData({ image: king[i] }, { label: 'king' }); 
        pieceClassifier.addData({ image: knight[i] }, { label: 'knight' }); 
        pieceClassifier.addData({ image: pawn[i] }, { label: 'pawn' }); 
        pieceClassifier.addData({ image: queen[i] }, { label: 'queen' }); 
        pieceClassifier.addData({ image: rook[i] }, { label: 'rook' }); 

    }

    pieceClassifier.addData({ image: pawn[24] }, { label: 'pawn' }); 

    pieceClassifier.normalizeData(); 
    pieceClassifier.train({ epochs: 50 }, trainingFinished); 
}


function trainingFinished(){
    console.log("TRAINING FINISHED!"); 
    pieceClassifier.save(); 
}


