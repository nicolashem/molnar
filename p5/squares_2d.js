

let button;
let square = 50;
let distance = 70;
let cellsX = 7;
let cellsY = 10;
let offset = -cellsX/2 * distance
let sizes = [0, 0, square, square * 0.9, square * 0.8, square * 0.7, square * 0.6, square * 0.5, square * 0.4, square * 0.3, square * 0.2, square * 0.1];

//////////////////save_image///////////////////
function saveImage() {
  saveCanvas('wallpaper', 'jpg');
}

function setup() {

  const cnv = createCanvas(600, 800);
  cnv.parent('p5-canvas-id')


  button = createButton('save image');
  button.mousePressed(saveImage);
  button.parent('menu-id')
  button.addClass('button');


  slider = createSlider(0, 255, 255);
  slider.parent('menu-id')
  slider.addClass('slider');

  slider2 = createSlider(0, 200, 10);
  slider2.parent('menu-id')
  slider2.addClass('slider');

  slider3 = createSlider(0, 20, 10);
  slider3.parent('menu-id')
  slider3.addClass('slider');

  slider4 = createSlider(0, 100, 50);
  slider4.parent('menu-id')
  slider4.addClass('slider');

  slider5 = createSlider(1, 15, 8);
  slider5.parent('menu-id')
  slider5.addClass('slider');

  slider6 = createSlider(1, 20, 10);
  slider6.parent('menu-id')
  slider6.addClass('slider');

  slider7 = createSlider(-200, 200, 0);
  slider7.parent('menu-id')
  slider7.addClass('slider');

  slider8 = createSlider(-200, 200, 0);
  slider8.parent('menu-id')
  slider8.addClass('slider');

  slider9 = createSlider(0, 10, 1, 0.1);
  slider9.parent('menu-id')
  slider9.addClass('slider');


  slider10 = createSlider(1, 100, 50);
  //slider10.position(10, 190);
  //slider10.style('width', '120px');
  slider10.parent('menu-id')
  slider10.addClass('slider');


  slider11 = createSlider(1, 60, 1);
  //slider11.position(10, 210);
  //slider11.style('width', '120px');
  slider11.parent('menu-id')
  slider11.addClass('slider');

}

function draw() {
  //background(255);

  

  let val1 = slider.value();
  background(val1);

  let val2 = slider2.value();
  let diceStep = val2

  let randomS = slider3.value();

  let val4 = slider4.value();
  distance = val4

  let val5 = slider5.value();
  cellsX = val5

  let val6 = slider6.value();
  cellsY = val6

  let translX = slider7.value();
  let translY = slider8.value();

  let val9 = slider9.value();

  let val10 = slider10.value();
  square = val10

  let strokeW = slider11.value();

  randomSeed(randomS)

  translate(translX,translY)

  strokeWeight(strokeW)

  // push()
  // translate(windowWidth, windowHeight)
  // scale(4)
  // pop()
  
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
          noFill()
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
          
          
          