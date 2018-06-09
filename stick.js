function Stick(){
  this.position = {x:0, y:300};
}

Stick.prototype.update = function(){

  //TEST
  this.position = Mouse.position;

  if(Mouse.left.pressed){
    console.log("Pressed left");
  }
}

Stick.prototype.draw = function(){
  Canvas.drawImage(sprites.stick, this.position);
}
