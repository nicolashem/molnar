
let square = 50;
let distance = 72;
let cellsX = 7;
let cellsY = 10;
let offset = -cellsX/2 * distance
let sizes = [0, 0, square, square * 0.9, square * 0.8, square * 0.7, square * 0.6, square * 0.5, square * 0.4, square * 0.3, square * 0.2, square * 0.1];
//let path;

let slider1;
let slider2;
let slider3;


function setup() {
  createCanvas(1000, 1000);

  slider = createSlider(0, 255, 100);
  slider.position(10, 10);
  slider.style('width', '80px');

  slider2 = createSlider(0, 20, 10);
  slider2.position(10, 30);
  slider2.style('width', '80px');

  slider3 = createSlider(0, 20, 10);
  slider3.position(10, 50);
  slider3.style('width', '80px');
}

function draw() {
  //background(255);

  noFill()

  let val1 = slider.value();
  background(val1);

  let val2 = slider2.value();
  let diceStep = val2

  let val3 = slider3.value();


  randomSeed(val3)
  //console.log("hell")

  for(let x = 0; x < cellsX; x++){
    for(let y = 0; y < cellsY; y++){
            
      let xpos = 400 + offset + x * distance
      let ypos = 400 + offset + y * distance

        for(let z = 0; z < sizes.length; z++) {

          let dice = Math.floor(random() * sizes.length);

          //let diceStep = 3.25;


          let dice2 = random() * diceStep
          let dice3 = random() * diceStep
          let dice4 = random() * diceStep
          let dice5 = random() * diceStep
          let dice6 = random() * diceStep
          let dice7 = random() * diceStep
          let dice8 = random() * diceStep

          square = sizes[dice];

          let path = [
            {x: xpos - square / 2 - dice2, y: ypos - square / 2 - dice2},
            {x: xpos + square / 2 - dice3, y: ypos - square / 2 - dice4},
            {x: xpos + square / 2 - dice5, y: ypos + square / 2 - dice6},
            {x: xpos - square / 2 - dice7, y: ypos + square / 2 - dice8}
          ];

          beginShape();
          vertex(path[0].x, path[0].y);
          vertex(path[1].x, path[1].y);
          vertex(path[2].x, path[2].y);
          vertex(path[3].x, path[3].y);
          endShape(CLOSE);
        }
    }
  }

    
                

}
          
          
          