const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;
var playerbraco

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerbraco = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  var player_options={
    isStatic: true
  }
  playerBase = Bodies.rectangle(200,350,180,150,player_options);
  World.add(world,playerBase);

  //criar corpo do jogador
  playerArcher = Bodies.rectangle(300,215,180,150,player_options);
  player = Bodies.rectangle(250,230,180,150,player_options);
  World.add(world,player);
  World.add(world,playerArcher);
}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage,player.position.x,player.position.y,80,130)
  image(playerbraco,playerArcher.position.x,playerArcher.position.y,100,100);

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
