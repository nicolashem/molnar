
let square = 50;
let distance = 70;
let cellsX = 7;
let cellsY = 10;
let offset = -cellsX/2 * distance
let sizes = [0, 0, square, square * 0.9, square * 0.8, square * 0.7, square * 0.6, square * 0.5, square * 0.4, square * 0.3, square * 0.2, square * 0.1];


function setup() {
  createCanvas(700, 950);

  slider = createSlider(0, 255, 255);
  slider.position(10, 10);
  slider.style('width', '120px');
  slider.style('background', 'red');

  slider2 = createSlider(0, 20, 10);
  slider2.position(10, 30);
  slider2.style('width', '120px');

  slider3 = createSlider(0, 20, 10);
  slider3.position(10, 50);
  slider3.style('width', '120px');

  slider4 = createSlider(0, 100, 50);
  slider4.position(10, 70);
  slider4.style('width', '120px');

  slider5 = createSlider(1, 15, 8);
  slider5.position(10, 90);
  slider5.style('width', '120px');

  slider6 = createSlider(1, 20, 10);
  slider6.position(10, 110);
  slider6.style('width', '120px');

  slider7 = createSlider(-200, 200, 0);
  slider7.position(10, 130);
  slider7.style('width', '120px');

  slider8 = createSlider(-200, 200, 0);
  slider8.position(10, 150);
  slider8.style('width', '120px');
}

function draw() {
  //background(255);

  noFill()

  let val1 = slider.value();
  background(val1);

  let val2 = slider2.value();
  let diceStep = val2

  let val3 = slider3.value();

  let val4 = slider4.value();
  distance = val4

  let val5 = slider5.value();
  cellsX = val5

  let val6 = slider6.value();
  cellsY = val6

  let val7 = slider7.value();

  let val8 = slider8.value();

  randomSeed(val3)

  translate(val7,val8)
  
  for(let x = 0; x < cellsX; x++){
    for(let y = 0; y < cellsY; y++){
            
      let xpos = 400 + offset + x * distance
      let ypos = 400 + offset + y * distance

        for(let z = 0; z < sizes.length; z++) {

          let dice = Math.floor(random() * sizes.length);

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
          
          
          